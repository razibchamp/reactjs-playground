import React from 'react';

export default class Title extends React.Component {

    state = {
        date : new Date()
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.setState(() => {
                return {
                    date : new Date()
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    
    render() {
        const {title} = this.props
        return (
            <>
                <h1>This is a title updated {title}</h1>
                <h2>Current time : {this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}