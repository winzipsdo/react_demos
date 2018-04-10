import React, {Component} from 'react';
import style from './ButtonToTop.css';
import cubic_bezier from '../bezier';

export default class ButtonToTop extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const currentScollTop = document.documentElement.scrollTop === 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        if (currentScollTop !== 0){
            animateToTop(currentScollTop,400);
        }
    }

    render() {
        return (
            <div className={style["btn-primary"]} onClick={this.handleClick}>
            </div>
        )
    }
}

function animateToTop(scrollTop,time) {
    let fps = 16.6;
    let index = 0;
    let timer = setInterval(function () {
        if (time-index>fps){
            document.documentElement.scrollTop =
                document.body.scrollTop =
                    scrollTop - scrollTop * cubic_bezier(index/time, .42,0,.58,1);
            console.log(index);
            index += fps;
        } else {
            document.documentElement.scrollTop =
                document.body.scrollTop = 0;
            console.log(index);
            clearInterval(timer);
        }
    },fps);
}