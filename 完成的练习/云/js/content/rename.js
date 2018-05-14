rename.onclick = function(){
    let arr = t.getChild(breadNav.getElementsByTagName('span')[0].dataset.index);
    let arr2 = arr.filter(e=>e.checked);
    if(arr2.length && arr2.length < 2){
        let divs = folders.children;
        for(let i=0;i<divs.length;i++){
            if(divs[i].classList.contains('hov')){
                let span = divs[i].getElementsByTagName('span')[0];
                let txt = divs[i].getElementsByTagName('input')[0];
                span.style.display = 'none';
                txt.style.display = 'block';
                txt.select();
                txt.onblur = function(){
                    let val = this.value;
                    let o = arr.some(e=>{
                        if(e.title != arr2[0].title){
                            return e.title == val;
                        }
                    });
                    //重名
                    if(arr && o){
                        this.focus();
                        this.select();
                    }else{
                        data[divs[i].dataset.index].title = val;
                        render(breadNav.getElementsByTagName('span')[0].dataset.index);
                        treeMenu.innerHTML = treeRender(-1,-1);
                    }
                }
            }
        }
    }else{
        alert('请选择一个文件!');
    }
}