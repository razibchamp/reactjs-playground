import React from 'react';

export default class Title extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            date : new Date(),
            lastName : 'Shuvo',
            fullName : props.title
        }
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

    changeName = () => {
        this.setState((prevState) => {
            return {
                fullName : prevState.fullName + ' ' + prevState.lastName,
                lastName : ''
            }
        })
    }
    
    render() {
        const {fullName} = this.state
        return (
            <>
                <h1>This is a title updated {fullName}</h1>
                <h2>Current time : {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}