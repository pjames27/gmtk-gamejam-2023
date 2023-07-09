

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_7_";

const ID_OF_LEVEL_ELEM = LEVEL_ID_PREFIX + "example_id";

//=================================================================================
// End Element IDs
//=================================================================================


let locally_relevant_state = {
};

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL N");
    fail_level();
}

createEventListeners();

function level_exit_callback() {
    removeEventListeners();
}

function createEventListeners() {
    // Example
    document.getElementById("pull-lever").addEventListener("click", (event) => set_level(15));
    document.getElementById("do-nothing").addEventListener("click", (event) => fail_level());
}

function removeEventListeners() {

}


//==============================================================================
// Event handlers
//==============================================================================
