let num =0
let arrnum2=[]
create.onclick = function(){
    let arrnum=[]
    
    Array.from(files).forEach(e=>{
        if(e.innerHTML.includes("新建文件夹")){
            arrnum.push(e.innerText.substring(6,7)*1)
        }
    })
    if(num>0){
        arrnum2.push(num==1? 0:num)
    }
    let arr3=arrnum2.find((e,i)=>{
        e==arrnum[i]
    })
    // console.log(arr3)
    // console.log(arrnum)
    // console.log(arrnum2)
    num++
    
    fEmpty.style.display = "none"
    newBuild(breadNav.getElementsByTagName('span')[0].dataset.index,num)
    let arr = t.getChild(breadNav.getElementsByTagName('span')[0].dataset.index)
    render(breadNav.getElementsByTagName('span')[0].dataset.index)
    treeMenu.innerHTML = treeRender(-1,1);
    let newfile = files[files.length-1]
    newfile.children[1].style.display = "none";
    newfile.children[2].style.display = "block";
    newfile.children[2].value = "新建文件夹"+(num==1? "":num)
    newfile.children[2].select()
    newfile.children[2].focus()
    newfile.children[2].onblur =function(){
        newfile.children[2].style.display="none";
        newfile.children[1].style.display = "block";
        newfile.children[1].innerHTML = newfile.children[2].value;
        arr[arr.length-1].title = newfile.children[2].value;
        let arr2 = [...arr]
        arr2.pop()
        console.log(arr2.some(e=>e.title ==newfile.children[2].value))
        if(arr2.some(e=>e.title ==newfile.children[2].value)){
            newfile.children[1].style.display = "none";
            newfile.children[2].style.display = "block";
            newfile.children[2].select()
            newfile.children[2].focus()
        }
    }
}

function newBuild(pid,num){
    let t= +new Date;
    data[t] = 
            {
                "id": t,
                pid,
                "title": "新建文件夹",
                "type": "file",
            }

}