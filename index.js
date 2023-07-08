function set_level(level){
        
    $(function() {
       $("#level_body").load("level_" + level+".html");
    });

}

function fail_level(){
    let level_body = document.getElementById("level_body");
    level_body.style.pointerEvents = false;
}

set_level(4);

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {    
    run_progress_bar();
});

function run_progress_bar() {
    let elem = document.getElementById("progress_bar_filler");
    let width = 1;
    let intervalId = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(intervalId);
            console.log("test");
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}