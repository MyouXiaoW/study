const files = document.getElementsByClassName("file-item");
folders.onmousedown = function(ev){
    if(ev.target.className == 'folders'){
        let disX=ev.pageX;
        let disY=ev.pageY;
        let div = document.createElement('div');
        div.style.background = "red"
        div.style.border = "1px"+" dashed"+" black";
        div.style.opacity = .5;
        div.style.position = "absolute"
        div.style.top = disY+"px"
        div.style.left = disX+"px"
        //添加到document上面的话就不需要算top值了
        document.documentElement.appendChild(div)
        document.onmousemove =function(ev){
            let Y=ev.pageY;
            let X=ev.pageX
            if(Y<130){
                Y=130;
            }
            if(X<260){
                X=260;
            }
            div.style.width = Math.abs(X-disX)+"px";
            div.style.height = Math.abs(Y-disY)+"px"
            div.style.top = Math.min(Y,disY)+"px"
            div.style.left = Math.min(X,disX)+"px"

            let arr = t.getChild(data[files[0].dataset.index].pid);
            Array.from(files).forEach((e,i)=>{
                let offOn = t.bong(div,e);
                data[e.dataset.index].checked =offOn? true:false;
                e.classList.toggle("hov",offOn);
                e.children[3].className =offOn? "checked":"";
                checkedAll.className = arr.every(e=>e.checked)? "checked":"";
            })
        }
        document.onmouseup = function(){
            document.onmouseup =document.onmousemove = null;
            document.documentElement.removeChild(div);
        }
    }
    
}