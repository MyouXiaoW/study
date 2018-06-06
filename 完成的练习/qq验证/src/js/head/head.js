import React from "react";

class Thead extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val:"" };
    }

    change = (ev)=>{
        let {value:val}=ev.target
        this.setState({val})
    }

    up =(ev)=>{
        if(ev.keyCode===13){
            let {val} = this.state;
            if(!val)return
            let obj={name:val,id:new Date(),checked:false,editing:false};
            let {Arrchange} = this.props;
            Arrchange(obj);
            this.setState({val:""})
        }
    }
    render() {
        let {val}=this.state;
        
        return (
            <input 
            className="new-todo"
            
            placeholder="请输入内容"
            value={val}

            onChange= {this.change}
            onKeyUp={this.up}
            />
        );
    }
}

export default Thead;