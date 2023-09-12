import UserList from './UserList'
import React from "react";
import LovePaint from "./LovePaint";
import { UserContext } from '../context/UserContext';

export default class Love extends React.Component {

    static contextType = UserContext

    render () {
        const {printLove, togglePrintLove} = this.context

        return (
            <>

                <h1>{printLove}</h1>
                <LovePaint 
                >
                    {(handleUserNameChange, {lovestring}) => (
                            <div>
                                <UserList handleUserNameChange={ (users) => {
                                        handleUserNameChange(users)
                                        togglePrintLove()
                                    }}/>
                                <br/>
                                <h1 style={{backgroundColor:'pink'}} >{lovestring}</h1>
                            </div>
                        )
                    }
                </LovePaint>
            </>
        )
    }
}