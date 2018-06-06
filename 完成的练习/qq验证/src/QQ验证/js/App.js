import React from "react";
import Inbox from "./inputbox";


class  App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  
            arr:[
                {id:"qq",name:"QQ:",txt:"请输入QQ",re:/^[1-9][0-9]{5,12}$/,onOff:false},
                {id:"email",name:"Email:",txt:"请输入Email",re:/^[a-zA-Z]\w{5,17}@[0-9a-zA-Z]{2,8}((\.com)|(\.cn))|(.\com.\cn)$/,onOff:false},
                {id:"mobile",name:"Mobile:",txt:"请输入Mobile",re:/^1[3-9][0-9]{9}$/,onOff:false},
                {id:"date",name:"Date:",txt:"请输入Date",re:/^(\d+)\D+(\d+)\D+(\d+)$/,onOff:false}
            ]
        };
    }

    checkchange =(name,onOff)=>{
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.name==name){
                e.onOff=onOff
            }
        })
        this.setState({arr})
    }

    render() {
        let {arr} = this.state;
        let newArr = arr.map((e,i)=>
                <Inbox {...{
                            key:i,
                            id:e.id,
                            name:e.name,
                            txt:e.txt,
                            re:e.re,
                            onOff:e.onOff,
                            checkchange:this.checkchange
                }}/>
        )
        let all = arr.every(e=>e.onOff)

        return (
            <div id="contain">
                {newArr}
                <p>
                <input 
                type="submit" 
                value="注册" 
                id="btn"
                className = {all? "succ":"fail"}
                />
                </p>

            </div>
        );
    }
}

export default App;