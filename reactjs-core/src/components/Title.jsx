import React from 'react';

export default class Title extends React.Component {

    state = {
        title : this.props.title
    }
    
    render() {
        console.log('re-rendering from titleComponent')
        const {title} = this.state
        return <h1>This is a title updated {this.props.title}</h1>
    }
}