import { useState } from "react";
import Title from "./Title";

export default function UserList ({handleUserNameChange}) {
    const [users, setUsers] = useState([
            {
                firstName : 'Faseeha',
                lastName : 'Islam',
                gender: 'female'
            },
            {
                firstName : 'Razib Hossain',
                lastName : 'Shuvo',
                gender: 'male'
            }
        ]
    )

    const handleChange = (user, index) => {
        setUsers((prevState) => {
            const users = [
                    ...prevState
                ]

            users[index].firstName = user.fullName
            handleUserNameChange(users)
            return users
        })
    }

    return (
            <>
                {users.map( (user, index) => (
                    <Title title={user.firstName}
                        lastName={user.lastName}
                        gender={user.gender}
                        key={index}
                        handleChange={ (user) => handleChange(user, index)}
                    />
                ))}
            </>
        );
}