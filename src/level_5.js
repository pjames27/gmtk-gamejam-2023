
//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_5_";

const TEXT_INPUT_ID = LEVEL_ID_PREFIX + "text_input";
const VERIFY_BUTTON_ID = LEVEL_ID_PREFIX + "verify_button";

//=================================================================================
// End Element IDs
//=================================================================================

const TARGET_TEXT_STRING = "only robots can read this";

let level_5_local_state = {

};


createEventListeners();

function progress_bar_completed_callback() {
    fail_level();
}

function level_exit_callback() {
    level_5_local_state = {
    };

    document.getElementById(TEXT_INPUT_ID).value = "";

    removeEventListeners();
}

function createEventListeners() {
    //document.getElementById(TEXT_INPUT_ID).addEventListener("change", textInputListener);
    document.getElementById(VERIFY_BUTTON_ID).addEventListener("click", verifyButtonListener);
}

function removeEventListeners() {
    //document.getElementById(TEXT_INPUT_ID).removeEventListener("change", textInputListener);
    document.getElementById(VERIFY_BUTTON_ID).removeEventListener("click", verifyButtonListener);
}

function textInputListener(event) {
    //let textInputWidget = document.getElementById(TEXT_INPUT_ID);

}

function verifyButtonListener(event) {
    let textInputWidget = document.getElementById(TEXT_INPUT_ID);

    if (textInputWidget.value.toLowerCase() === TARGET_TEXT_STRING) {
        set_level(6);
        return;
    }


    fail_level();



}