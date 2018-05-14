const content =document.querySelector(".folder-content");
const folders =document.querySelector(".folders");
const fEmpty = document.querySelector('.f-empty');
const checkedAll = document.querySelector('.checkedAll');
content.style.height =window.innerHeight -head.offsetHeight+"px";
render(0);
//根据数据渲染出页面
function render(id){
    
    //重新打开一个文件夹就会清空一次
    folders.innerHTML = "";
    //得到父级的子级数据
    let arr = t.getChild(id);
    // console.log(arr.some(e=>e.title =="新建文件夹4"))
    let CheckedArr =[];
    //如果有arr，根据数据打开文件夹
    if(arr){
        fEmpty.style.display = "none";
        arr.forEach(e=>{
            let div =document.createElement("div");
            div.className="file-item" + `${e.checked? " hov":""}`;
            div.dataset.index =e.id;
            let img =document.createElement("img");
            img.src="img/folder-b.png";
            let span =document.createElement("span");
            span.className = "folder-name";
            span.innerHTML = e.title;
            let input =document.createElement("input");
            input.className="editor";
            let i = document.createElement("i");
            i.className = `${e.checked? "checked":""}`;
            checkedAll.className = arr.every(e=>e.checked)? "checked":"";
            i.onclick =function(){
                e.checked = !e.checked;
                console.log(arr)
                render(id);
            }
           
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
            folders.appendChild(div);
            div.ondblclick = function(ev){
                if(ev.target.tagName =="I")return;
                render(e.id);
                BreadmenuRender(e.id)
            }
            checkedAll.onclick = function(){
                arr.forEach(e=>e.checked =checkedAll.className?false:true);
                render(id)
            }
        })
    }else{
        checkedAll.className ="";
        fEmpty.style.display = "block";
    }
    
}

