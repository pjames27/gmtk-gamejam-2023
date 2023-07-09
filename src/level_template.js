

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_n_";

const ID_OF_LEVEL_ELEM = LEVEL_ID_PREFIX + "example_id";

//=================================================================================
// End Element IDs
//=================================================================================


let locally_relevant_state = {
};

function level_exit_callback() {
    removeEventListeners();
}

function createEventListeners() {
    // Example
    document.getElementById(ID_OF_LEVEL_ELEM).addEventListener("click", handleEventOfChoice);
}

function removeEventListeners() {

}


//==============================================================================
// Event handlers
//==============================================================================

function handleEventOfChoice(event) {
    
}