

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_8_";

const ID_OF_LEVEL_ELEM = LEVEL_ID_PREFIX + "example_id";

const correct_state = {
    1: false,
    2: true,
    3: false,
    4: false,
}

//=================================================================================
// End Element IDs
//=================================================================================


let locally_relevant_state = {
    1: false,
    2: false,
    3: false,
    4: false,

    already_failed: false,
};

function progress_bar_completed_callback() {
    if (locally_relevant_state.already_failed) {
        return;
    }

    fail_level();
}

createEventListeners();

function level_exit_callback() {
    removeEventListeners();
}

function createEventListeners() {
    // Example
    // document.getElementById(ID_OF_LEVEL_ELEM).addEventListener("click", handleEventOfChoice);
    document.getElementById("sq-1").addEventListener("click", (event) => { toggle_select(1) });
    document.getElementById("sq-2").addEventListener("click", (event) => { toggle_select(2) });
    document.getElementById("sq-3").addEventListener("click", (event) => { toggle_select(3) });
    document.getElementById("sq-4").addEventListener("click", (event) => { toggle_select(4) });

    document.getElementById("verify-button").addEventListener("click", verify);
}

function removeEventListeners() {

}


//==============================================================================
// Event handlers
//==============================================================================

function toggle_select(n) {
    console.log(n);
    let frame = document.getElementById("fr-" + String(n));
    //console.log("fr-" + String(n));
    //console.log(frame);
    if (frame.style.display === "none") {
        frame.style.display = "block";
        locally_relevant_state[n] = true;
    } else {
        frame.style.display = "none";
        locally_relevant_state[n] = false;
    }
    // frame.style.display = frame.style.display == "none" ? "block" : "none";
}

function verify(event) {
    //console.log(locally_relevant_state);
    for (let i = 1; i <= 4; i++) {
        if (!(i in locally_relevant_state) | (locally_relevant_state[i] != correct_state[i])) {
            locally_relevant_state.already_failed = true;
            fail_level();
            return;
        }
    }
    set_level(9);
}
