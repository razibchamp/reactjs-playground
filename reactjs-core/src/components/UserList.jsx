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

    handleChange = (user, index) => {
        this.setState((prevState) => {
            const users = [
                    ...prevState.users
                ]

            users[index].firstName = user.fullName
            return users
        }, () => {
            this.props.handleUserNameChange(this.state.users)
        })
    }

    render () {
        return (
                <>
                    {this.state.users.map( (user, index) => (
                        <Title title={user.firstName}
                            lastName={user.lastName}
                            gender={user.gender}
                            key={index}
                            handleChange={ (user) => this.handleChange(user, index)}
                        />
                    ))}
                </>
            );
    }
}