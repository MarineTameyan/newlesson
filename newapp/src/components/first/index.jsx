import React from "react";
import "./style.css"
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: 'black'
        };
    }

    changeColor = () => {
        this.setState({
            textColor: 'green'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.changeColor} style={{ color: this.state.textColor }}>Click</button>
            </div>
        );
    }
}

export default Button;
