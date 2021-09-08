


const getUniqueChr = (string)=>{
    let unqie =''
    for(  char of string){
        if (!unqie.includes(char)){
        unqie+=char;
            
        }

    }
    return unqie;
}

// console.log(getUniqueChr("hello")=='helo')


const mostOccured =(list)=>{
    let higestObj = Object();
    let count=0;
    while(count <= list.length-1){
        if(higestObj[`${list[count]}`] == undefined){

        higestObj[`${list[count]}`] = 0
        }

        for(i in list){
            if (i==list[count]){
                // console.log(i)
                higestObj[`${list[count]}`]+=1
            }
        }
        count+=1
    }
    console.log(higestObj)
}

mostOccured([1,1,3])
