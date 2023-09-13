import UserList from './UserList'
import { useContext } from "react";
import LovePaint from "./LovePaint";
import { UserContext } from '../context/UserContext';


export default function Love () {

    const {printLove, togglePrintLove} = useContext(UserContext)

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