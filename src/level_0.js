
//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_0_";

//=================================================================================
// End Element IDs
//=================================================================================


let level_0_local_state = {

};


createEventListeners();

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL 0")
}

function level_exit_callback() {
    level_0_local_state = {
    };

    removeEventListeners();
}

function createEventListeners() {
}

function removeEventListeners() {
}
