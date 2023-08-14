import React from "react";
import "./style.css"
class Buttontwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classname: ''
        };
    }

    getClassname = () => {
        this.setState({
            classname: 'change-button'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.getClassname} className={this.state.classname}>Click</button>
            </div>
        );
    }
}

export default Buttontwo;





