import React from 'react';
import Clock from './Clock';

export default class Title extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            lastName : props.lastName,
            fullName : props.title,
            fullNameInput: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { fullName : currentFullName, fullNameInput} = nextState
        const { fullName : prevFullName, fullNameInput : prevFullNameInput } = this.state
        if ( currentFullName === prevFullName && fullNameInput === prevFullNameInput) {
            return false;
        }

        

        return true;
    }

    changeName = () => {
        this.setState((prevState) => {
            return {
                fullName : prevState.fullName + (prevState.lastName ? ' ' + prevState.lastName : ''),
                lastName : ''
            }
        }, () => {
            this.props.handleChange(this.state)
        })
    }

    saveName = (e) => {
        e.preventDefault()
        this.setState({
            fullName: this.state.fullNameInput,
            fullNameInput: '',
            lastName: ''
        }, () => {
            this.props.handleChange(this.state)
        })
    }
    
    render() {
        const {fullName, fullNameInput} = this.state
        const {gender} = this.props
        const honorific = gender === 'male' ? 'Mr. ' : 'Mrs. '
        console.log('re-rendering title')
        return (
            <>
                <h1>Hello {honorific + fullName}</h1>
                <Clock />
                <button onClick={this.changeName}>Show Full Name</button>
                <form onSubmit={this.saveName}>
                    <input type='text' name='fullNameInput'  value={fullNameInput} onChange={ (e) => {
                        this.setState({
                            [e.target.name]: e.target.value
                        })
                    }}/>
                    <input type='submit' value="save name"/>
                </form>
            </>
        )
    }
}