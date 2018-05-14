const breadmenu = document.querySelector(".breadmenu");
const breadNav = breadmenu.children[1];

BreadmenuRender(0);

function BreadmenuRender(id){
    breadNav.innerHTML = "";
    let arr = t.getParents(id);
    arr.forEach((e,i,all)=>{
        if(i==all.length-1){
            let span =document.createElement("span");
            span.dataset.index = e.id;
            span.innerHTML = e.title;
            breadNav.appendChild(span);
        }else{
            let a = document.createElement("a");
            a.innerHTML = e.title;
            a.herf = "javascript";
            a.dataset.index = e.id;
            breadNav.appendChild(a);
            a.onclick = function(){ 
                for(let attr in data){
                    data[attr].checked = false;
                }
                render(a.dataset.index);
                BreadmenuRender(a.dataset.index);
            }
        }
    })
}