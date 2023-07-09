function progress_bar_callback() {
    console.log("PROGRESS BAR CALLBACK - LEVEL 2")
}

function check(){
    let a = document.getElementById("vehicle1");
    let b = document.getElementById("vehicle2");
    let c = document.getElementById("vehicle3");

    if( a.checked && b.checked && !c.checked){
        set_level(3)
    }else{
        alert("Wrong");
    }

}