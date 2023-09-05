import withLove  from "./withLove";
import UserList from './UserList'
import React from "react";

class LoveHandle extends React.Component {

    render () {
        const {lovestring} = this.props
        return (
            <>
                <UserList handleUserNameChange={this.props.handleUserNameChange}/>
                <br/>
                <h1 style={{backgroundColor:'pink'}} >{lovestring}</h1>
            </>
        )
    }
}

const Love = withLove(LoveHandle);
export default Love;