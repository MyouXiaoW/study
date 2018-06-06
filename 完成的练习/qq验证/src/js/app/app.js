import React from 'react';
import Thead from "../head/head";
import Tlist from "../list/list";
import Tfooter from "../footer/footer";

 class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:false,editing:false},
                {name:"呵呵1",id:1,checked:false,editing:false},
                {name:"呵呵2",id:2,checked:false,editing:false}
            ]
        }
    }

    Arrchange = (obj)=>{
        let {arr} =this.state;
        arr.push(obj);
        this.setState({arr});
    }

    checkedchage =(id)=>{
        let {arr} =this.state;
        arr.forEach(e=>{
            if(e.id===id){
                e.checked = !e.checked;
            }
        })
        
        
        this.setState({arr})
    }

    deltechange = (id)=>{
        let {arr} =this.state;
        arr=arr.filter(e=>e.id!==id);
        this.setState({arr})
    }

    newchange= (ev)=>{
        let {checked}=ev.target
        let {arr} =this.state;
        arr.forEach(e=>e.checked=checked);
        this.setState({arr})
    }

    render() {
        let {arr} = this.state;
        let len =arr.length;
        let all=arr.every(e=>e.checked);
        let NewArray = arr.map((e,i)=>{
                    if(e.checked){len--}
                    return<Tlist {...
                            {
                                key:i,
                                name:e.name,
                                id:e.id,
                                checked:e.checked,
                                editing:e.editing,
                                checkedchage:this.checkedchage,
                                deltechange:this.deltechange
                            }
                        }/>})
        return (
                <section className="todoapp">
                    <div>
                        <header className="header" >
                            <h1>todos</h1>
                            <Thead {...{Arrchange:this.Arrchange}}/>
                        </header>
                        <section className="main">

                            <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={all}
                            onChange={this.newchange}
                            />

                            <ul className="todo-list">
                                {NewArray}
                            </ul>
                        </section>
                        <footer className="footer">
                            <Tfooter {...{len}}/>
                        </footer> 
                    </div>
                </section>
        )
  }
}


export default App;