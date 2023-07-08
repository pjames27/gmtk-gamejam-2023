move()
function move() {
    let elem = document.getElementById("myBar");
    let width = 1;
    let intervalId = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(intervalId);
            alert("test");
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}