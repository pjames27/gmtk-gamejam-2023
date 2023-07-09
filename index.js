// Unfortunate, but necessary
let global_state = {
    running_progress_bar_interval_id: -1,
    current_level: -1
};

const PER_LEVEL_PROGRESS_BAR = {
    "level_0": {
        "duration": 200
    },
    
    "level_1": {
        "duration": 1000
    },
    
    "level_2": {
        "duration": 20000
    },
    
    "level_3": {
        "duration": 50000
    },
    
    "level_4": {
        "duration": 10000
    },
}

set_level(0);

function set_level(level){
    
    if (global_state.current_level === level) { 
        return;
    }

    global_state.current_level = level;

    console.log("Setting level " + level);
    $(function() {
        $("#level_body").load("level_" + level+".html");
    }).ready(() => {
        window.requestAnimationFrame(() => {run_progress_bar(PER_LEVEL_PROGRESS_BAR["level_"+level]["duration"])});
    });
}

function reload_level() {
    $(function() {
        $("#level_body").load("level_" + global_state.current_level+".html");
     }).ready(() => {
        window.requestAnimationFrame(() => {run_progress_bar(PER_LEVEL_PROGRESS_BAR["level_"+global_state.current_level]["duration"])});
     });
}

function fail_level(){
    let level_body = document.getElementById("level_body");
    level_body.style.pointerEvents = false;
}

// Initialize the page
//document.addEventListener('DOMContentLoaded', function () {    
    //run_progress_bar();
//});

function run_progress_bar(msTimerDuration) {
    const pxWindowWidth = window.innerWidth;
    const msInterval = msTimerDuration/200;
    const pxAddtlWidth = pxWindowWidth/200;
    
    let width = 0;
    let elem = document.getElementById("progress_bar_filler");
    let intervalId = setInterval(frame, msInterval);
    console.log("Set interval id " + intervalId);

    global_state.running_progress_bar_interval_id = intervalId;

    function frame() {
        // Cancel if started the progress bar again
        if (global_state.running_progress_bar_interval_id !== intervalId) {
            clearInterval(intervalId);
            console.log("Cleared id " + intervalId);
            return;
        }

        if (width >= window.innerWidth) {
            clearInterval(intervalId);
            elem.style.width = window.innerWidth + "px";
            console.log("Cleared id " + intervalId);
            // Reset the id of the running progress bar
            global_state.running_progress_bar_interval_id = -1;
        } else {
            width += pxAddtlWidth;
            elem.style.width = width + "px";
        }
    }
}