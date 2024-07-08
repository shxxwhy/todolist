let input = document.querySelector('#taskInput');
let ul = document.querySelector('#taskList');
let addBtn = document.querySelector('#addButton');

let arr = JSON.parse(localStorage.getItem('tasks')) || [];

// Функция для создания элемента списка и добавления его в массив
function createLi(text) {
    arr.push(text);
    saveToLocalStorage();
    return generateLiHTML(text);
}

// Функция для создания HTML элемента списка без добавления в массив
function generateLiHTML(text) {
    return `<li class="task-item">
                ${text}
                <button onclick="deleteLi(this.parentElement)">Delete</button>
            </li>`;
}

// Функция для удаления элемента списка
function deleteLi(el) {
    const text = el.firstChild.textContent.trim();
    arr = arr.filter(item => item !== text);
    saveToLocalStorage();
    el.remove();
}

// Сохранение массива задач в localStorage
function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

// Загрузка задач из localStorage и их отображение
function loadFromLocalStorage() {
    ul.innerHTML = ''; // Очищаем список перед загрузкой
    arr.forEach(task => {
        ul.innerHTML += generateLiHTML(task);
    });
}

// Добавление новой задачи по клику на кнопку
addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        ul.innerHTML += createLi(input.value);
        input.value = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if (input.value.trim() !== '') {
            ul.innerHTML += createLi(input.value);
            input.value = '';
        }
    }
})

// Загрузка задач при загрузке страницы
window.addEventListener('load', () => {
    loadFromLocalStorage();
});
