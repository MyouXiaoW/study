<template>
  <div id="app">
     <section class="todoapp">
        <div>
            <Header @add="add"></Header>
            <section class="main">
                <input 
                    class="toggle-all" 
                    type="checkbox" 
                    :checked="arr.every(e=>e.checked)? true:false"
                    @click="changeall"
                >
                <List 
                    :data="newArr"
                    @delet = "delet"
                    @changeediter="changeediter"
                ></List>
            </section>
            <Footer 
                :num="newArr.length"
                :num2="num"
                @changecheckedall="changecheckedall"
            ></Footer>
        </div>
    </section>
  </div>
</template>
<script>

import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./assets/css/index.css";

  export default {
    name:"App",
    data(){
        return{
            arr:[
                {id:0,txt:"hah",checked:false,editer:true},
                {id:1,txt:"hah",checked:false,editer:true},
                {id:2,txt:"hah",checked:false,editer:true}
            ],
            checkedall:"all"
        }
    },
    components:{
        Header,
        List,
        Footer
    },
    methods:{
        add(data){
            this.arr.unshift(data)
        },
        changeall(ev){
            this.arr.forEach(e => {
                e.checked=ev.target.checked
            });
        },
        changecheckedall(newcheckedall){
            this.checkedall=newcheckedall;
        },
        delet(id){
            this.arr.splice(id,1)
        },
        changeediter(key){
            this.arr[key].editer=!this.arr[key].editer;
        }
    },
    computed:{
        num(){
           return this.arr.filter(e=>!e.checked).length
        },
        newArr(){
            return this.arr.filter(e=>{
                switch (this.checkedall) {
                case 'all':
                    return e;
                    break;
                case 'active':
                    return !e.checked;
                    break;
                case 'completed':
                    return e.checked;
                    break;
                default:
                    return e;
                    break;
                }
            });
        }
    },
    watch:{
        arr:{
            handler(){
                console.log(this.arr)
            },
            deep:true
        }
    }
  }
</script>
