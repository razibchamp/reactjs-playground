import UserList from './UserList'
import React from "react";
import LovePaint from "./LovePaint";

export default class Love extends React.Component {

    render () {
        return (
            <>
                <LovePaint 
                    render = {(handleUserNameChange, {lovestring}) => {
                        return (
                        <div>
                            <UserList handleUserNameChange={ (users) => handleUserNameChange(users)}/>
                            <br/>
                            <h1 style={{backgroundColor:'pink'}} >{lovestring}</h1>
                        </div>)
                    }}
                />
            </>
        )
    }
}