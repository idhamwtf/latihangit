
var binary=(a)=>{

    var input = Number(a)
    console.log(input.toString(2))
}


// binary(50)


function toBinary(n){
    var result =[]
    // var i;
    for (var i=n;i>0;i=parseInt(i/2)){
    result.push(i%2)
    }
    return result.reverse().join
    }


    console.log(toBinary(50))
    