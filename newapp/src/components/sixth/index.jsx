import React from "react";
import "./style.css"
class Clickbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            r: '',
            g: '',
            b: '',
            textColor: 'black'
        };
    }

    changeColor = () => {
        const r =  Math.floor(Math.random()*256)
        const g =  Math.floor(Math.random()*256)
        const b =  Math.floor(Math.random()*256)

        this.setState({
            r: r,
            g: g,
            b: b,
            textColor: `rgb(${r},${g},${b})`
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

export default Clickbutton;
