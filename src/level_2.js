function check(){
    let a = document.getElementById("vehicle1");
    let b = document.getElementById("vehicle2");
    let c = document.getElementById("vehicle3");

    if( a.checked && b.checked && !c.checked){
        update_level(3)
    }else{
        alert("Wrong");
    }

}