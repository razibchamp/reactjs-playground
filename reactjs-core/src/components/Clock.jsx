import React from "react"

export default class Clock extends React.Component {

    state = {
        date : new Date(),
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

    render () {
        return (
            <h2>Current time : {this.state.date.toLocaleTimeString()}</h2>
        )
    }
}