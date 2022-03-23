function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const plants = document.querySelectorAll(".plant");
    const index = 2;
	terrariumElement.onpointerdown = pointerDrag;
	terrariumElement.ondblclick = doubleclick;
    // 참고 사이트: https://heodolf.tistory.com/105
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

    function doubleclick(){
        const maxPriority = (
            plants.length > 0 ? Math.max.apply(null, Array.from(plants).map(plant=>plant.getAttribute("z-index"))) : 9999) + 2; // +값이 기본값?
        terrariumElement.setAttribute("z-index", maxPriority);
        terrariumElement.style.zIndex = maxPriority;
    }
}

const createEvent = () => {
    dragElement(document.getElementById('plant1'));
    dragElement(document.getElementById('plant2'));
    dragElement(document.getElementById('plant3'));
    dragElement(document.getElementById('plant4'));
    dragElement(document.getElementById('plant5'));
    dragElement(document.getElementById('plant6'));
    dragElement(document.getElementById('plant7'));
    dragElement(document.getElementById('plant8'));
    dragElement(document.getElementById('plant9'));
    dragElement(document.getElementById('plant10'));
    dragElement(document.getElementById('plant11'));
    dragElement(document.getElementById('plant12'));
    dragElement(document.getElementById('plant13'));
    dragElement(document.getElementById('plant14'));
}

createEvent();
