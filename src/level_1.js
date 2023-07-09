
//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_1_";

const TEXT_INPUT_ID = LEVEL_ID_PREFIX + "text_input";
const VERIFY_BUTTON_ID = LEVEL_ID_PREFIX + "verify_button";

//=================================================================================
// End Element IDs
//=================================================================================

const FUZZY_TEXT_STRING = "rvx83";

let level_1_local_state = {
    already_failed: false,
};


createEventListeners();

function progress_bar_completed_callback() {

    if (level_1_local_state.already_failed) {
        return;
    }

    fail_level();

     // Bad form, but here we are
    let failure_message_main_text = document.getElementById("failure_message_main_text");

    failure_message_main_text.textContent = "Robot ReCaptcha failed: only a human could be so indecisive";
}

function level_exit_callback() {
    level_1_local_state = {
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

    if (textInputWidget.value.toLowerCase() === FUZZY_TEXT_STRING) {
        level_1_local_state.already_failed = true;
        fail_level();
        return;
    }

    set_level(2);

}