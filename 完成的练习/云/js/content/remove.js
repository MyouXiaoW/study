del.onclick = function(){
    
    let arr = t.getChild(data[files[0].dataset.index].pid)


    if(arr.some(e=>e.checked)){
        tanbox.style.display = "block"
    }else{
        alert("请勾选一个")
    }
   
    tanbox.onclick = function(ev){

        if(ev.target.innerHTML =="X"|| ev.target.innerHTML =="取消"){
            tanbox.style.display = "none";
        }

        if(ev.target.innerHTML =="确定"){
            tanbox.style.display = "none";
            
            arr.forEach(e=>{
                if(e.checked){
                    let removeArr=t.getChilds(e.id);
                    removeArr.push(e);
                    removeArr.forEach(e=>delete data[e.id] );
                    console.log(data)
                    render(e.pid);
                    treeMenu.innerHTML = treeRender(-1,1);
                }
            })
            
        }
    }
}
