

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


// Initialize the page
document.addEventListener('DOMContentLoaded', function () {    
    // Initialize elements (setting defaults, etc.)
    local_initialization_function();

    // Update based on current locally_relevant_state
    local_update_function();
    
    // Create event listeners once everything is initialized
    createEventListeners();
});

function local_initialization_function() {

};

function local_update_function() {
};



function createEventListeners() {
    // Example
    document.getElementById(ID_OF_LEVEL_ELEM).addEventListener("click", (event) => handleEventOfChoice(event, ID_OF_LEVEL_ELEM));
}

//==============================================================================
// Event handlers
//==============================================================================

function handleEventOfChoice(event, optionWidgetId) {
    
}