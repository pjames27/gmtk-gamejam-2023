

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_3_";

const ID_OF_LEVEL_ELEM = LEVEL_ID_PREFIX + "example_id";

//=================================================================================
// End Element IDs
//=================================================================================


let locally_relevant_state = {

};

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL N")
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
    document.getElementById("sq-5").addEventListener("click", (event) => { toggle_select(5) });
    document.getElementById("sq-6").addEventListener("click", (event) => { toggle_select(6) });
    document.getElementById("sq-7").addEventListener("click", (event) => { toggle_select(7) });
    document.getElementById("sq-8").addEventListener("click", (event) => { toggle_select(8) });
    document.getElementById("sq-9").addEventListener("click", (event) => { toggle_select(9) });

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
    console.log("fr-" + String(n));
    console.log(frame);
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
    for (let i = 1; i <= 9; i++) {
        if (!(i in locally_relevant_state) | (locally_relevant_state[i] == false)) {
            return;
        }
    }
    set_level(4);
}
