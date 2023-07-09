

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_15_";

const ID_OF_LEVEL_ELEM = LEVEL_ID_PREFIX + "example_id";

//=================================================================================
// End Element IDs
//=================================================================================


let locally_relevant_state = {
    ignore_timeout: false
};

function progress_bar_completed_callback() {
    if (locally_relevant_state["ignore_timeout"]) {
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
    document.getElementById("pull-lever").addEventListener("click", (event) => end_game());
    document.getElementById("do-nothing").addEventListener("click", (event) => fail_level());
}

function removeEventListeners() {

}


//==============================================================================
// Event handlers
//==============================================================================

function end_game() {
    locally_relevant_state["ignore_timeout"] = true;
    win_game();
}