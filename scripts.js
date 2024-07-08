if (localStorage.getItem('bajariladigan')) {
    let browserXorita = localStorage.getItem('bajariladigan');
    document.querySelector('#taskList').innerHTML = browserXorita;
}

function elementQosh(el) {
    const li = document.createElement('li');
    const liText  = document.createTextNode(el);
    li.classList = 'task-item';
    li.innerHTML = `${el} <button onclick='deleteItem(this)'>Delete</button`;

    document.querySelector('#taskList').appendChild(li);
    let toDoInfo = document.querySelector('#taskList').innerHTML;
    let storage = localStorage.setItem('bajariladigan', toDoInfo);
}


function deleteItem(el) {
    el.parentElement.remove();
    let ekraQiymati = document.querySelector('#taskList').innerHTML;
    localStorage.setItem('bajariladigan', ekraQiymati);
}
