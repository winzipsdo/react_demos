import React, {Component} from 'react';
import style from './ButtonToTop.css'

export default class ButtonToTop extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={style["btn-primary"]}></div>
        )
    }
}