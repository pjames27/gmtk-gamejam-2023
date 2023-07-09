
//=================================================================================
// Begin Element IDs
//=================================================================================

const LEVEL_ID_PREFIX = "level_0_";

const SVG_ELEM_ID = LEVEL_ID_PREFIX + "svg";


const SVG_PATH_ELEM_ID_PREFIX = LEVEL_ID_PREFIX + "svg_path_";

//=================================================================================
// End Element IDs
//=================================================================================


let level_0_local_state = {
    curr_svg_path_index: 0,
    currently_drawing: false,

    curr_path_start_x: -100,
    curr_path_start_y: -100,

};


createEventListeners();

function progress_bar_completed_callback() {
}

function level_exit_callback() {
    level_0_local_state = {
        curr_svg_path_index: 0,
        currently_drawing: false,

        curr_path_start_x: -100,
        curr_path_start_y: -100,
    };

    removeEventListeners();
}

function createEventListeners() {
    document.addEventListener("mousemove", handleMouseMoveSVG);
    document.addEventListener("mousedown", handleMouseDownSVG);
}

function removeEventListeners() {
    document.removeEventListener("mousedown", handleMouseDownSVG);
    document.removeEventListener("mousemove", handleMouseMoveSVG);
}

function handleMouseDownSVG(event) {
    console.log("Still listening");

    let bounding_rect = event.target.getBoundingClientRect();
    let mouse_x = event.clientX - bounding_rect.left; //x position within the element.
    let mouse_y = event.clientY - bounding_rect.top;  //y position within the element.

    // If not drawing, start drawing
    if (!level_0_local_state.currently_drawing) {
        level_0_local_state.currently_drawing = true;

        level_0_local_state.curr_path_start_x = mouse_x;
        level_0_local_state.curr_path_start_y = mouse_y;

        let newPathElem = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
        newPathElem.id = SVG_PATH_ELEM_ID_PREFIX + level_0_local_state.curr_svg_path_index;
        newPathElem.classList.add("level_0_svg_path");

        newPathElem.setAttribute('d', "M " + mouse_x + " " + mouse_y);


        // Add to DOM
        let svg_elem = document.getElementById(SVG_ELEM_ID);
        svg_elem.appendChild(newPathElem);
    } 
    
    // If drawing, finish drawing current line
    else {
        let currPathElem = document.getElementById(SVG_PATH_ELEM_ID_PREFIX + level_0_local_state.curr_svg_path_index);
        currPathElem.setAttribute('d', "M " + level_0_local_state.curr_path_start_x + " " + level_0_local_state.curr_path_start_y + " L " + mouse_x + " " + mouse_y);


        level_0_local_state.curr_svg_path_index += 1;

        level_0_local_state.currently_drawing = false;
    }
    
}

function handleMouseMoveSVG(event) {

    if (!level_0_local_state.currently_drawing) {
        return;
    }

    console.log("mouse moved");

    let bounding_rect = event.target.getBoundingClientRect();
    let mouse_x = event.clientX - bounding_rect.left; //x position within the element.
    let mouse_y = event.clientY - bounding_rect.top;  //y position within the element.

    let currPathElem = document.getElementById(SVG_PATH_ELEM_ID_PREFIX + level_0_local_state.curr_svg_path_index);
    currPathElem.setAttribute('d', "M " + level_0_local_state.curr_path_start_x + " " + level_0_local_state.curr_path_start_y + " L " + mouse_x + " " + mouse_y);
}