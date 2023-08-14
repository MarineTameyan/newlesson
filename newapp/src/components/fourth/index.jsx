import React from "react";
import "./style.css"
class Visiblebutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilty: 'visible'
        };
    }

    getVisibilty = () => {
        this.setState({
            visibilty: 'hidden'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.getVisibilty}>Click</button>
                <p style={{visibility: this.state.visibilty}}>Click</p>
            </div>
        );
    }
}

export default Visiblebutton;





