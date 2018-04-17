import {Component} from 'react';
import style from './SpotLoading.css';

export default class SpotLoading extends Component {
    constructor(props) {
        super(props);

        this.curtain = document.createElement("div");
        this.curtain.classList.add(style.curtain);

        this.curtainInnerContainer = document.createElement("div");
        this.curtain.appendChild(this.curtainInnerContainer);
        this.curtainInnerContainer.classList.add(style.innerContainer);

        this.curtainInnerLeft = document.createElement("div");
        this.curtainInnerContainer.appendChild(this.curtainInnerLeft);
        this.curtainInnerLeft.classList.add(style.innerLeft);

        this.curtainInnerRight = document.createElement("div");
        this.curtainInnerContainer.appendChild(this.curtainInnerRight);
        this.curtainInnerRight.classList.add(style.innerRight);

        this.loading = this.loading.bind(this);
        this.unload = this.unload.bind(this);
    }

    componentDidMount() {
        // this.loading();//测试用
    }

    loading() {
        this.curtain.style.height = String(document.documentElement.clientHeight) + "px";
        document.body.appendChild(this.curtain);
    }

    unload() {
        document.body.removeChild(this.curtain);
    }

    render() {
        return null;
    }
}