import React, {Component} from 'react';
import style from './ButtonToTop.css';
import cubic_bezier from './bezier';

export default class ButtonToTop extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    animateToTop(scrollTop, time) {//应该改用两段三阶贝塞尔，在快靠近顶部的时候启用第二段贝塞尔
        let interval = 16.6;
        let index = 0;
        let timer = setInterval(function () {
            if (time - index > interval) {
                document.documentElement.scrollTop =
                    document.body.scrollTop =
                        scrollTop - scrollTop * cubic_bezier(index / time, .25, .1, .25, 1);//修改两个控制点坐标
                index += interval;
            } else {
                document.documentElement.scrollTop =
                    document.body.scrollTop = 0;
                clearInterval(timer);
            }
        }, interval);
    }

    handleClick() {
        const currentScollTop = document.documentElement.scrollTop === 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        if (currentScollTop !== 0) {
            this.animateToTop(currentScollTop, 600);
        }
    }

    render() {
        return (
            <div className={style["btn-primary"]} onClick={this.handleClick}>
            </div>
        )
    }
}

