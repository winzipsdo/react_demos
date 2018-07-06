import React, {Component} from  'react';
import style from './Content.css';

export default class Content extends Component{

    constructor(props){
        super(props);
        this.test = this.test.bind(this);
        // this.timer = setInterval(this.lazy_render,1000);//test lazy load
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    lazy_render(){
        const para = document.getElementsByClassName(style.para);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        for (let i = 0; i<para.length;i++){
            let height = scrollTop + viewPortHeight - para[i].offsetTop;
            if (height > 0){
                para[i].style.backgroundColor = '#D1D0AE';
            } else {//可不用恢复default
                para[i].style.backgroundColor = 'inherit';
            }
        }
    }

    test(e){
        const target = e.target;
        if (target.nodeName.toLowerCase() === 'p'){
            alert(target.offsetTop);
        }
    }

    render(){

        const {paras} = this.props;
        const content = paras.map((para)=>
            <p className={style.para} key={para.toString()}>{para}</p>
        );
        return (
            <div className={style.container} onClick={this.test}>
                <button onClick={this.lazy_render}>render!</button>
                {content}
            </div>
        );
    }
}