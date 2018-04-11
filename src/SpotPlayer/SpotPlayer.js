import React, {Component} from 'react';
import style from './SpotPlayer.css';

//autoPlay = {false}
//loop = {true}
//music = {music_path}
export default class SpotPlayer extends Component {
    constructor(props) {
        super(props);
        const autoPlay = this.props.autoPlay ? this.props.autoPlay : false;
        this.state = {
            isPlay: autoPlay,
            autoPlay: autoPlay,
            loop: true
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.audioPlay = this.audioPlay.bind(this);
        this.audioPause = this.audioPause.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.autoPlay){
            this.audioPlay();
        }
    }

    audioPause() {
        let audio = this.refs.audio;
        let outerContainer = this.refs.outerContainer;
        let outerTransform = getComputedStyle(outerContainer).transform;
        let innerContainer = this.refs.innerContainer;
        let innerTransform = getComputedStyle(innerContainer).transform;

        audio.pause();
        innerContainer.classList.remove(style.isPlay);
        outerContainer.style.transform = outerTransform === 'none'
            ? innerTransform
            : innerTransform.concat(outerTransform);
    }

    audioPlay() {
        this.refs.audio.play();
        this.refs.innerContainer.classList.add(style.isPlay);
    }

    handleDoubleClick(){
        let audio = this.refs.audio;
        audio.currentTime = 0;
        this.audioPlay();
    }

    handleToggle() {
        this.setState({
            isPlay: !this.state.isPlay
        },()=>{
            if (!this.state.isPlay) {
                this.audioPause()
            } else {
                this.audioPlay()
            }
        });
    }

    render() {
        const {loop} = this.state;
        const {music} = this.props;

        return (
            <div ref='outerContainer'
                 className={style.outerContainer}
                 onClick={this.handleToggle}
                 onDoubleClick={this.handleDoubleClick}>
                <div ref='innerContainer' className={style.innerContainer}>
                    <audio ref="audio"
                           loop={loop}>
                        <source src={music || null}/>
                        您的浏览器版本过低。
                    </audio>
                </div>
            </div>
        );
    }
}
