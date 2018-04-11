import React, {Component} from 'react';
import music from './media/乔杉 - 塑料袋.flac';
import SpotPlayer from './SpotPlayer/SpotPlayer';
import ButtonToTop from './ButtonToTop/ButtonToTop';

class App extends Component {
    render() {
        return (
            <div>
                <SpotPlayer music={music}/>
                <ButtonToTop/>
            </div>
        );
    }
}

export default App;
