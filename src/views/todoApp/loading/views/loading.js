import React, { Component } from 'react';


class Loading extends Component {
    render() {
        const { loadingStyle } = this.props;
        return (
            <div className="tu-loading" style={loadingStyle}>正在加载中....</div>
        );
    }
}

export default Loading;