
let level_4_local_state = {
    won_or_lost: ""
}

function progress_bar_completed_callback() {
    console.log("PROGRESS BAR COMPLETED CALLBACK - LEVEL 4")
}

function level_exit_callback() {

    level_4_local_state.won_or_lost = "";
}