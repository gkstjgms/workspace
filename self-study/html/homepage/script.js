function onclickbutton(){
    const list = document.getElementById('list');
    const listbutton = document.getElementById('listbutton');
    
    if (list.style.display === 'block'){
        list.style.display = 'none';
        listbutton.textContent = "Open list ▼";
    } else {
        list.style.display = 'block';
        listbutton.textContent = "Hide list ▼";
    }
}