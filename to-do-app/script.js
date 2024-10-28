function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
  
    if (task) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${task}</span>
                      <button class="delete-btn" onclick="deleteTodo(this)">X</button>`;
      document.getElementById('todo-list').appendChild(li);
      input.value = '';
    }
  }
  
  function deleteTodo(button) {
    const li = button.parentElement;
    document.getElementById('todo-list').removeChild(li);
  }  