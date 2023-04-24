import React from 'react';

class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            age : props.age
        };
    };

    render(){
        return(
            <div>
                <p>Welcome, {this.props.name}!</p>
                <p>Your age is {this.props.age}.</p>
            </div>
        )
    };

};
Welcome.defaultProps = {
    name: "default name"
};

export default Welcome;