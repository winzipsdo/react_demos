import {Component} from 'react';
import style from './SpotLoading.css';

export default class SpotLoading extends Component {
    constructor(props) {
        super(props);
        this.curtain = document.createElement("div");
        this.curtain.classList.add(style.curtain);

        this.loading = this.loading.bind(this);
    }

    componentDidMount() {
        // this.loading();//测试用
    }

    loading() {
        this.curtain.style.height = String(document.documentElement.clientHeight) + "px";
        document.body.appendChild(this.curtain);
        setTimeout(() => {
            this.curtain.style.opacity = '1';
        }, 0);
    }

    render() {
        return null;
    }
}