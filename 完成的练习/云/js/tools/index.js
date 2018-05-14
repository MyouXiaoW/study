let ChildsArr=[];
t={
    getChild(id){
        let ChildArr = [];
        for(let attr in data){
            if(data[attr].pid==id){
                ChildArr.push(data[attr]);
            }
        }
        if(ChildArr.length>0){
            return ChildArr;
        }else{
            return null;
        }
    },
    getParent(id){
        if(data[id] && data[id].pid != -1){
            return data[data[id].pid];
        }
        return null;
    },
    //根据当前的id找到所有的父级
    getParents(id){
        let parentsArr = [];
        let now = data[id]; //当前的id  3
        while(now){
            parentsArr.unshift(now);
            now = this.getParent(now.id);
        }
        return parentsArr;
    },
    bong(box1,box2){
        let bl = box1.offsetLeft;
        let bt = box1.offsetTop;
        let br = bl + box1.offsetWidth;
        let bb = bt + box1.offsetHeight;
    
        let cl = box2.offsetLeft + box.offsetLeft;
        let ct = box2.offsetTop + box.offsetTop;
        let cr = cl + box2.offsetWidth;
        let cb = ct + box2.offsetHeight;
    
        if(br < cl || bb < ct || bl > cr || bt > cb){
            return false;
        }else{
            //碰到了
            return true;
        }
    },
    getChilds(id){
        if(t.getChild(id)&&t.getChild(id).length>0){
            ChildsArr.push(...t.getChild(id));
            (t.getChild(id)).forEach(e=>{
                t.getChilds(e.id)
            })
        }return ChildsArr
    }
}
