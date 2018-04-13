import React, {Component} from 'react';
import style from './ButtonToTop.css';
import cubic_bezier from './bezier';

export default class ButtonToTop extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.animateToTop = this.animateToTop.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    animateToTop(scrollTop, time) {//TODO 应该改用两段三阶贝塞尔，在快靠近顶部的时候启用第二段贝塞尔
        let interval = 16.6;
        let index = 0;
        this.timer = setInterval(()=>{//如果用匿名函数，如何解决闭包问题？1.let that = this 2.TODO 还有什么解决方式？
            if (time - index > interval) {
                document.documentElement.scrollTop =//Chrome
                    document.body.scrollTop =//Safari
                        scrollTop - scrollTop * cubic_bezier(index / time, .25, .1, .25, 1);//修改两个控制点坐标
                index += interval;
            } else {
                document.documentElement.scrollTop =
                    document.body.scrollTop = 0;
                clearInterval(this.timer);
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

