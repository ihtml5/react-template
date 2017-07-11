import React, { Component } from 'react';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startCount
        }
    }
    componentDidMount() {
        this.intervalHandle = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({
                    count: newCount
                });
            } else {
                window.clearInterval(this.intervalHandle);
            }
        }, 1000);
    }
    componentWillUnmount() {
        if (this.intervalHandle) {
            window.clearInterval(this.intervalHandle);
            this.intervalHandle = null;
        }
    }
    render() {
        return this.props.children(this.state.count);
    }
}
const CountDownExample = () => {
    return (
        <CountDown startCount={100}>
            {(count)=> <div>{count}</div>}
        </CountDown>
    );
}
export default CountDownExample;