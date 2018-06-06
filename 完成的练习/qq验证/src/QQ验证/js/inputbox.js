import React from "react";

class Inbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { val:"",onOff:true };
    }

    change=(ev)=>{
        let {re,name,checkchange}=this.props;
        let {value:val}=ev.target;
        let onOff=re.test(val);
        if(name=="Date:"){
            onOff=this.happybirthday(val,re)
        }
        checkchange(name,onOff)
        this.setState({val,onOff})
        
    }   

    happybirthday=(val,re)=>{
        let str = val.replace(re,function($0,$1,$2,$3){
            return $1+"-"+$2+"-"+$3
        })
        let arr = str.split("-")
        let setdate = new Date(str);
        let y=setdate.getFullYear();
        let m=setdate.getMonth()+1;
        let d=setdate.getDate();
        console.log(arr[1]==m)
        if(setdate.getTime()<(+new Date)&&(arr[0]==y&&arr[1]==m&&arr[2]==d)){
            return true
        }else{
            return false
        }
    }

    render() {
        let {id,name,txt,re}=this.props;
        let {val,onOff}=this.state;
        
        return (
            <div id={id}>
                    <span>{name}</span>
                    <input 
                    type="text" 
                    name={id} 
                    placeholder={txt}
                    onChange = {this.change}
                    className={onOff? " ok":" error"}
                    />
            </div>
        );
    }

}

export default Inbox;