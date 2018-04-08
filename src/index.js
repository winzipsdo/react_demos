import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpotPlayer from './SpotPlayer/SpotPlayer';
import registerServiceWorker from './registerServiceWorker';
import music from './media/烟把儿 - 纸短情长（完整版）.mp3';

ReactDOM.render(<SpotPlayer autoPlay={false}
                            music={music}/>, document.getElementById('player'));
registerServiceWorker();
