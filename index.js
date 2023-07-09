// Unfortunate, but necessary
let global_state = {
    running_progress_bar_interval_id: -1,
    current_level: -1
};

const PER_LEVEL_CONFIG = {
    "level_1": {
        "failure message": "impossible skills",
        "progress bar duration": 1000
    },

    "level_2": {
        "failure message": "impossible skills",
        "progress bar duration": 2000
    },

    "level_3": {
        "failure message": "impossible skills",
        "progress bar duration": 5000
    },

    "level_4": {
        "failure message": "impossible skills",
        "progress bar duration": 10000
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

    // Hide failure message
    let failure_message_widget = document.getElementById("failure_message");
    failure_message_widget.style.display = "none";

    // Update the current level
    global_state.current_level = level;

    // Load the level
    $(function () {
        $("#level_body").load("level_" + level + ".html");
    }).ready(() => {
        // Start the progress bar
        window.requestAnimationFrame(() => {run_progress_bar(PER_LEVEL_CONFIG["level_"+level]["progress bar duration"])});
    });
}

function reload_level() {
    // Hide failure message
    let failure_message_widget = document.getElementById("failure_message");
    failure_message_widget.style.display = "none";

    level_exit_callback();

    //let level_body = document.getElementById("level_body");
    //level_body.style.pointerEvents = true;

    $(function() {
        $("#level_body").load("level_" + global_state.current_level+".html");
     }).ready(() => {
        window.requestAnimationFrame(() => {run_progress_bar(PER_LEVEL_CONFIG["level_"+global_state.current_level]["progress bar duration"])});
     });
}


function fail_level(){
    let failure_message_main_text = document.getElementById("failure_message_main_text");
    let failure_message_tests_passed_text = document.getElementById("failure_message_tests_passed_text");
    
    failure_message_main_text.textContent = "Incorrect NeoCaptcha: " + PER_LEVEL_CONFIG["level_" + global_state.current_level]["failure message"];
    failure_message_tests_passed_text.textContent = (global_state.current_level - 1) + "/15 tests passed";
    
    // Make failure message visible
    let failure_message_widget = document.getElementById("failure_message");
    failure_message_widget.style.display = "flex";
}

function restart_game() {
    if (global_state.current_level === 1) {
        reload_level();
        return;
    }

    set_level(1);
}

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
