import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/8160-sent-heart.json';

class Animation extends Component {
    constructor() {
        super();
        this.state = {
            isStopped: false,
            isPaused: false
        }
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            redererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return(
            <div>
                <h1>Lottie Animation</h1>
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                />
                <button onClick={() => this.setState({isStopped: true})}>Stop</button>
                <button onClick={() => this.setState({isStopped: false, isPaused: false})}>Play</button>
                <button onClick={() => this.setState({isPaused: !this.state.isPaused})}>Pause</button>
            </div>
        );
    }
}

export default Animation;