import React from 'react';
import Clock from './Clock';

export default class Title extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            lastName : 'Shuvo',
            fullName : props.title
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { fullName : currentFullName } = nextState
        const { fullName : prevFullName } = this.state
        if ( currentFullName === prevFullName ) {
            return false;
        }

        return true;
    }

    changeName = () => {
        this.setState((prevState) => {
            return {
                fullName : prevState.fullName + (prevState.lastName ? ' ' + prevState.lastName : ''),
                lastName : ''
            }
        })
    }
    
    render() {
        const {fullName} = this.state
        console.log('re-rendering title')
        return (
            <>
                <h1>This is a title updated {fullName}</h1>
                <Clock />
                <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}