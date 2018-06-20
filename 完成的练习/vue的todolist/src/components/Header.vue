<template>
    <header class="header" >
        <h1>todos</h1>
        <input 
            class="new-todo" 
            placeholder="请输入内容" 
            @keyup.13="addon"
            >
    </header>
</template>
<script>
    export default {
        name:"Header",
        props:["add"],
        methods:{
            addon(ev){
                this.$emit("add",{
                    id:+new Date(),
                    txt:ev.target.value,
                    checked:false
                })
                ev.target.value="";
            }
        }
    }
</script>