function update_level(level){
        
    $(function() {
       $("#level_body").load("level_" + level+".html");
    });

}

function fail_level(){
    let level_body = document.getElementById("level_body");
    level_body.style.pointerEvents = false;
}

update_level(0);