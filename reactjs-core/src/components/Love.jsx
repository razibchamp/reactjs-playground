import React from "react";
import UserList from "./UserList";

export default class Love extends React.Component {
    state = {
        users : [],
        lovestring : ''
    }

    handleUserNameChange = (UserList) => {
        console.log('love', UserList)
        this.setState({
            users : UserList
        }, this.buildLoveString)
    }

    buildLoveString = () => {
        let lovestring = '🧡'
        const {users} = this.state
        const prefix = users[0].firstName.toUpperCase()
        const suffix = users[1].firstName.toUpperCase()
        lovestring = [prefix, lovestring, suffix].join(' ')
        this.setState({lovestring})
    }

    render () {
        const {lovestring} = this.state
        return (
            <>
                <UserList handleUserNameChange={this.handleUserNameChange}/>
                <br/>
                <h1 style={{backgroundColor:'pink'}} >{lovestring}</h1>
            </>
        )
    }
}