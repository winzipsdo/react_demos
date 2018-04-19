import React, {Component} from  'react';
import style from './Content.css';

export default class Content extends Component{

    render(){

        const {paras} = this.props;
        const content = paras.map((para)=>
            <p className={style.para} key={para.toString()}>{para}</p>
        );
        return (
            <div className={style.container}>{content}</div>
        );
    }
}