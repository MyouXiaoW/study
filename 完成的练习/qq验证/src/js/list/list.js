import React from "react";

class Tlist extends React.Component {

    change=()=>{
        let {id,checkedchage}=this.props;
        checkedchage(id)
    }

    click = ()=>{
        let {deltechange,id}=this.props;
     
        deltechange(id);
    }

    render() {
        let {name,checked}=this.props;
        return (
            <li className={checked?"completed":""}>
                <div className="view">
                    <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={checked}
                    onChange = {this.change}
                    />
                    <label>{name}</label>
                    <button 
                        className="destroy"
                        onClick = {this.click}
                    ></button>
                </div>
            
            </li>
            
        );
    }
}

export default Tlist;