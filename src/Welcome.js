import React from 'react';

class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : props.name
        };
    };

    render(){
        return(
            <p>Welcome, {this.props.name}!</p>
        )
    };

};
export default Welcome;