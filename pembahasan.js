const decimalToBiner=(a)=>{
    var arr =[]
    do{
       var sisa=a%2
       arr.push(sisa)
       a/=2
       a=Math.floor(a) 
    } while (a>0);

    return arr.reverse().join('')
}

console.log(decimalToBiner(50))



var angka=50
var newarr=[]
for(var i=angka;i>0;i=Math.floor(i/2)){
    var sisa=i%2
    newarr.push(sisa)

}

console.log(newarr.reverse().join(''))



const minMax=(arr=[],cond)=>{
    arr.sort((a,b)=>a-b)
    if(cond=='min'){
        return arr[0]
    }else{
        return arr[arr.length-1]
    }

}


console.log(minMax([200,1,0.2,3,45,7,3,42],'min'))



const repeat=(a=['z','b','a','a','d'])=>{
    for(var i=0;i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            if(a[i]==a[j]){
                return a[i]
            }
        }
    }
}

console.log(repeat())