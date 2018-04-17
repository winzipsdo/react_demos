import React, {Component} from 'react';
import music from './media/乔杉 - 塑料袋.flac';
import SpotPlayer from './SpotPlayer/SpotPlayer';
import ButtonToTop from './ButtonToTop/ButtonToTop';
import SpotLoading from './SpotLoading/SpotLoading';
import Content from './Content/Content';
import {poems} from './global_content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerAutoPlay: props.playerAutoPlay,
            test: 0
        };
        this.handlePlayerToggle = this.handlePlayerToggle.bind(this);
        console.log("constructor");
    }

    componentWillMount() {
        console.log("will mount");
    }

    componentDidMount() {
        console.log("did mount");
    }

    componentWillReceiveProps() {
        console.log("will receive props");
    }

    componentWillUpdate() {
        console.log("component will update");
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    handlePlayerToggle() {
        this.refs.loading.loading();
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.handlePlayerToggle}>Button!</button>
                <SpotLoading ref='loading'/>
                <Content paras={poems}/>
                <SpotPlayer ref="audio" autoPlay={this.state.playerAutoPlay} music={music}/>
                <ButtonToTop/>
            </div>
        );
    }
}

App.defaultProps = {
    playerAutoPlay: false
};

export default App;
