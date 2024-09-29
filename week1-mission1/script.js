const todoInput = document.getElementById('todo-input');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const taskText = todoInput.value.trim();
        if (taskText) {
            addTask(taskText);
            todoInput.value = ''; // 입력란 비우기
        }
    }
});

function addTask(taskText) {
    const li = createTaskElement(taskText);
    pendingList.appendChild(li);
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // 완료 버튼 추가
    const completeButton = createButton('완료', function() {
        moveToCompleted(li);
    });

    li.appendChild(completeButton);
    return li;
}

function createButton(buttonText, onClick) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.addEventListener('click', onClick);
    return button;
}

function moveToCompleted(task) {
    task.querySelector('button').remove(); // 완료 버튼 제거

    const deleteButton = createButton('삭제', function() {
        task.remove();
    });

    task.appendChild(deleteButton);
    completedList.appendChild(task);
}
