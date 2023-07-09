
//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_10_";

const TEXT_INPUT_ID = LEVEL_ID_PREFIX + "text_input"; 
const VERIFY_BUTTON_ID = LEVEL_ID_PREFIX + "verify_button"; 

//=================================================================================
// End Element IDs
//=================================================================================

const TARGET_TEXT_STRING = "the cake is not a lie";

let level_10_local_state = {

};


createEventListeners();

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL 10");
}

function level_exit_callback() {
    level_10_local_state = {
    };

    document.getElementById(TEXT_INPUT_ID).value = "";

    removeEventListeners();
}

function createEventListeners() {
    document.getElementById(VERIFY_BUTTON_ID).addEventListener("click", verifyButtonListener);
}

function removeEventListeners() {
    document.getElementById(VERIFY_BUTTON_ID).removeEventListener("click", verifyButtonListener);
}

function verifyButtonListener(event) {
    let textInputWidget = document.getElementById(TEXT_INPUT_ID);

    if (textInputWidget.value.toLowerCase() === TARGET_TEXT_STRING) {
        set_level(11);
        return;
    }

    
    fail_level();
}