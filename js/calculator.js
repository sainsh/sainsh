function calc(op){


    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    if(op.valueOf() == "plus".valueOf()){
        c.value = parseInt(a.value) + parseInt(b.value);
    }else if(op.valueOf() == "minus".valueOf()){
        c.value = parseInt(a.value) - parseInt(b.value);
    }else if(op.valueOf() == "divide".valueOf()){
        c.value = parseInt(a.value) / parseInt(b.value);
    }else if(op.valueOf() == "mult".valueOf()){
        c.value = parseInt(a.value) * parseInt(b.value);
    }

    

}