
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

};


createEventListeners();

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL 1")
}

function level_exit_callback() {
    level_1_local_state = {
    };

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
        console.log("Failure");
        let failure_message_widget = document.getElementById("failure_message");
        failure_message_widget.style.display = "block";
        return;
    }

    set_level(2);

}