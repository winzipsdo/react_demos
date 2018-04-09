import React, {Component} from 'react';
import music from './media/烟把儿 - 纸短情长（完整版）.mp3';
import './App.css';
import SpotPlayer from './SpotPlayer/SpotPlayer';
import ButtonToTop from './ButtonToTop/ButtonToTop';

class App extends Component {
    render() {
        return (
            <div>
                <SpotPlayer className='SpotPlayer'
                            music={music}
                            loop={true}/>
                <ButtonToTop/>
            </div>
        );
    }
}

export default App;
