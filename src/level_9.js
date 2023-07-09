

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_9_";

const CHECKBOX_ID = LEVEL_ID_PREFIX + "checkbox";
const CHECKED_IMAGE_ID = LEVEL_ID_PREFIX + "checkbox_check_image";

//=================================================================================
// End Element IDs
//=================================================================================


let level_9_local_state = {
    checkbox_clicked: false,
    
};

function progress_bar_completed_callback() {

    if (level_9_local_state.checkbox_clicked) {
        return;
    }

    set_level(10);
}

function level_exit_callback() {
    level_9_local_state = {
        checkbox_clicked: false,
    };

    removeEventListeners();
}

function createEventListeners() {
    // Example
    document.getElementById(CHECKBOX_ID).addEventListener("click", clickCheckBoxHandler);
}

function removeEventListeners() {
    
}

createEventListeners();

//==============================================================================
// Event handlers
//==============================================================================
function clickCheckBoxHandler(event) {

    level_9_local_state.checkbox_clicked = true;

    fail_level();
}