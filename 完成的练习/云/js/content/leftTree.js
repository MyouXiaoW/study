const treeMenu =document.querySelector(".tree-menu");
// <!-- <ul>
//                     <li>
//                         <div class="tree-title tree-ico close">
//                             <span><i></i>微云</span>
//                         </div>
//                         <ul>
//                             <li>
//                                 <div class="tree-title tree-ico close">
//                                     <span><i></i>我的音乐</span>
//                                 </div>
//                             </li>
//                         </ul>
//                     </li>
//                 </ul> -->r
function treeRender(id,num){
    //找到当前的子级
    num++
    let child = t.getChild(id);
    if(!child)return "";
    let html =`<ul style="padding-left :${num*5}px">`
    child.forEach(e=>{
        html+=`<li>
                    <div class="tree-title tree-ico close" data-index = "${e.id}">
                        <span class="${(t.getChild(e.id))? ("open"):("")}"><i></i>${e.title}</span>
                    </div>
                    ${treeRender(e.id,num+1)}
                </li>`
    })
    html+=`</ul>`
    return html;
}
treeMenu.innerHTML = treeRender(-1,1)