<template>
    <ul class="todo-list">
        <li :class="val.checked?'completed':''" 
            v-for="(val,key) in data"
            @dblclick="changeed(key)"
            >
            <div class="view">
                <input 
                    class="toggle" 
                    type="checkbox" 
                    v-model="val.checked"
                    >
                <label v-show="val.editer">{{val.txt}}</label>
                <input 
                        v-show="!val.editer" 
                        v-focus="true"
                        type="text" 
                        v-model.lazy="val.txt"
                        @blur="changeed(key)"
                        
                        >
                <button 
                class="destroy"
                @click="deletdate(key)"
                ></button>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        name:"List",
        props:["data","delet","changeediter"],
        methods:{
            deletdate(key){
                this.$emit("delet",key)
            },
            changeed(key){
                this.$emit("changeediter",key)
            }
        },
        directives: {  
            focus: {  
                // 指令的定义  
                update: function (el,{value}) {  
                    if(value){
                        el.focus()  
                    }
                
                }  
            }  
      }
    }
</script>