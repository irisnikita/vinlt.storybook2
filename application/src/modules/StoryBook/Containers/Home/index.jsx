// Libraries
import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                Home
                <button onClick={this.onClickClickMe}>Click me</button>
            </div>
        );
    }
}

export default Home;