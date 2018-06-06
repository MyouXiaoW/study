import React from "react";

class Tfooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }



    render() {
        let{len}=this.props;
        return (
            <span className="todo-count">
                <strong>{len}</strong>
                <span>条未选中</span>
            </span>
        );
    }
}

export default Tfooter;