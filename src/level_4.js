

//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_4_";

const CHECKBOX_ID = LEVEL_ID_PREFIX + "checkbox";
const CHECKED_IMAGE_ID = LEVEL_ID_PREFIX + "checkbox_check_image";

//=================================================================================
// End Element IDs
//=================================================================================


let level_4_local_state = {
    checkbox_clicked: false,
};

function progress_bar_completed_callback() {

    if (level_4_local_state.checkbox_clicked) {
        return;
    }

    fail_level();
}

function level_exit_callback() {
    level_4_local_state = {
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

    let checkboxWidget = document.getElementById(CHECKBOX_ID);
    let checkboxCheckImgWidget = document.getElementById(CHECKED_IMAGE_ID);

    checkboxWidget.style.display = "none";
    checkboxCheckImgWidget.style.display = "inline";

    level_4_local_state.checkbox_clicked = true;

    setTimeout(function() { set_level(5);}, 4000);
}