function update_level(level){
        
    $(function() {
       $("#m").load("level_" + level+".html");
    });

}

function fail_level(){
    let level_body = document.getElementById("m");
    level_body.style.pointerEvents = false;
}

update_level(0);