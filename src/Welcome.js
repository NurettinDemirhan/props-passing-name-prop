import React from 'react';
import Age from './Age';

class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : props.name
        };
    };

    render(){
        const { age,name } = this.props
        return(
            <div>
                <p>Welcome, {this.props.name}!</p>
                {(age > 18 && age < 65 && name === "John") && <Age age={age} />}
                
            </div>
        )
    };

};
Welcome.defaultProps = {
    name: <strong>Guest</strong>
};

export default Welcome;