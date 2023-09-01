import React from "react";
import Title from "./Title";

export default class UserList extends React.Component {
    state = {
        users : [
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
    }

    shouldComponentUpdate(prevProps, prevState) {
        const {users} = this.state
        const {users : oldUsers} = prevState
        if (users === oldUsers) {
            return false;
        }
        return true;
    }

    render () {
        console.log(this.state)
        return (
                <>
                    {this.state.users.map( (user) => (
                        <Title title={user.firstName}
                            lastName={user.lastName}
                            gender={user.gender}
                            key={Math.random()}
                        />
                    ))}
                </>
            );
    }
}