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
        "duration": 2000
    },

    "level_3": {
        "duration": 5000
    },

    "level_4": {
        "duration": 10000
    },
}

set_level(1);

function set_level(level) {

    // Don't set the level to the current level
    if (global_state.current_level === level) {
        return;
    }

    // Reset the level you're leaving
    if (global_state.current_level !== -1) {
        level_exit_callback();
    }

    // Update the current level
    global_state.current_level = level;

    // Load the level
    $(function () {
        $("#level_body").load("level_" + level + ".html");
    }).ready(() => {
        // Start the progress bar
        window.requestAnimationFrame(() => { run_progress_bar(PER_LEVEL_PROGRESS_BAR["level_" + level]["duration"]) });
    });
}

function reload_level() {
    $(function () {
        $("#level_body").load("level_" + global_state.current_level + ".html");
    }).ready(() => {
        window.requestAnimationFrame(() => { run_progress_bar(PER_LEVEL_PROGRESS_BAR["level_" + global_state.current_level]["duration"]) });
    });
}

function fail_level() {
    let level_body = document.getElementById("level_body");
    level_body.style.pointerEvents = false;
}

// Initialize the page
//document.addEventListener('DOMContentLoaded', function () {    
//run_progress_bar();
//});

function run_progress_bar(msTimerDuration) {
    // const pxWindowWidth = window.innerWidth;
    const pxWindowWidth = document.getElementById("progress_bar_bg").clientWidth;
    console.log(pxWindowWidth);
    const msInterval = msTimerDuration / 200;
    const pxAddtlWidth = pxWindowWidth / 200;

    let width = 0;
    let elem = document.getElementById("progress_bar_filler");
    let intervalId = setInterval(frame, msInterval);
    //console.log("Set interval id " + intervalId);

    global_state.running_progress_bar_interval_id = intervalId;

    function frame() {
        // Cancel if started the progress bar again
        if (global_state.running_progress_bar_interval_id !== intervalId) {
            clearInterval(intervalId);
            //console.log("Cleared id " + intervalId);
            return;
        }

        // Finished progress bar
        if (width >= pxWindowWidth) {
            clearInterval(intervalId);
            elem.style.width = pxWindowWidth + "px";
            //console.log("Cleared id " + intervalId);

            // Reset the id of the running progress bar
            global_state.running_progress_bar_interval_id = -1;

            progress_bar_completed_callback();
        }
        // Continue progressing the bar 
        else {
            width += pxAddtlWidth;
            elem.style.width = width + "px";
        }
    }
}
