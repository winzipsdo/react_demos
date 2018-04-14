import React, {Component} from  'react'

export default class Content extends Component{

    render(){
        const style = {
            textAlign: 'center',
            fontFamily: 'serif',
            fontSize: '1.3em'
        };
        const {paras} = this.props;
        const content = paras.map((para)=>
            <p key={para.toString()}>{para}</p>
        );
        return (
            <div style={style}>{content}</div>
        );
    }
}