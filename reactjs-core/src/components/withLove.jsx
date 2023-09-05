import React from "react"

const withLove = (WrappedComponent) => {
    class NewComponent extends React.Component {

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
            return (<WrappedComponent 
                    buildLoveString={this.buildLoveString}
                    handleUserNameChange={this.handleUserNameChange}
                    {...this.state}/>)
        }
    }

    return NewComponent;
}

export default withLove;