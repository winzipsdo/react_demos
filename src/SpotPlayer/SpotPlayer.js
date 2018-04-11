import React, {Component} from 'react';
import style from './SpotPlayer.css';

export default class SpotPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay:props.autoPlay
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
        this.setState({isPlay:false},()=>{
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
        });
    }

    audioPlay() {
        this.setState({isPlay:true},()=>{
            this.refs.audio.play();
            this.refs.innerContainer.classList.add(style.isPlay);
        });
    }

    handleDoubleClick(){
        let audio = this.refs.audio;
        audio.currentTime = 0;
        this.audioPlay();
    }

    handleToggle() {
        if (this.state.isPlay){
            this.audioPause();
        } else {
            this.audioPlay();
        }
    }

    render() {
        const {music,loop} = this.props;
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

SpotPlayer.defaultProps = {//在此设置props的默认值
    autoPlay:false,
    loop:true
};