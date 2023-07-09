let level_2_local_state = {

}

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL 2")
}

function level_exit_callback() {

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