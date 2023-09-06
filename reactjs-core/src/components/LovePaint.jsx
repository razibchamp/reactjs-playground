import React from "react";


export default class LovePaint extends React.Component {

    state = {
        users : [],
        lovestring : ''
    }

    buildLoveString = () => {
        console.log('builstring', this.state)
        let lovestring = '🧡'
        const {users} = this.state
        const prefix = users[0].firstName.toUpperCase()
        const suffix = users[1].firstName.toUpperCase()
        lovestring = [prefix, lovestring, suffix].join(' ')
        this.setState({lovestring})
    }

    handleUserNameChange = (UserList) => {
    
        this.setState({
            users : UserList
        }, this.buildLoveString)
    }

    render () {
        const {render} = this.props
        return render(this.handleUserNameChange, this.state);
    }
}