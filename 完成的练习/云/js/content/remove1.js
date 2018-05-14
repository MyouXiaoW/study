const modelTree = document.querySelector('.modal-tree');
const contentTree = document.querySelector('.content');
const cancel = document.querySelector('.cancel');
let checkedId ="";
remove.onclick = function(){
    let arr = t.getChild(data[files[0].dataset.index].pid)

    if(arr.some(e=>e.checked)){
        modelTree.style.display = "block";
        contentTree.innerHTML = treeRender(-1,1);

        cancel.onclick=function(){
            modelTree.style.display = "none";
        }
       
        let contentTreeChilds = contentTree.querySelectorAll('.tree-title');
        for(let i=0;i<contentTreeChilds.length;i++){
            contentTreeChilds[i].onclick = function(){
                for(let i=0;i<contentTreeChilds.length;i++){
                    contentTreeChilds[i].style.background = '';
                }
                this.style.background = 'rgba(204, 204,204,1)';
                console.log(this.dataset.index)
                checkedId = this.dataset.index;
            }
        }
        let ok = modelTree.querySelector('.ok');
        ok.onclick = function(){
            modelTree.style.display = "none";
            
            arr.forEach(e=>{
               
                if(e.checked){
                    let removeArr=t.getChilds(e.id);
                    removeArr.push(e);
                    if(removeArr.every(e=>e.id!=checkedId)){
                        e.pid = checkedId;
                        e.checked = !e.checked;
                    }else{
                        alert("换一个吧")
                    } 
                }else{
                    render(e.pid);
                    treeMenu.innerHTML = treeRender(-1,1)
                }
            })
            console.log(data)
            
        }
        
    }
    

}