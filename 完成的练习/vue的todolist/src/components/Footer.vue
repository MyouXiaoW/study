<template>
    <footer class="footer">
        <span class="todo-count">
            <strong>{{num2}}</strong>
            <span>条未选中</span>
        </span>
        <ul class="filters">
            <li v-for="(val,key) in changState">
                <a 
                    :href="`#/${val.state}`"
                    :class="all===val.state?'selected':''"
                    @click="checkedAll(val.state)"
                >{{val.name}}</a>
            </li>
        </ul>
    </footer>
</template>
<script>
    export default {
        name:"Footer",
        props:["num","changecheckedall","num2"],
        data(){
        return {
                changState:[
                    {name:'全部',state:'all'},
                    {name:'未完成',state:'active'},
                    {name:'已完成',state:'completed'}
                ],
                all:'all'
            }
        },
        methods:{
            checkedAll(select){
                this.all=select
                this.$emit("changecheckedall",select)
            }
        }
    }
</script>