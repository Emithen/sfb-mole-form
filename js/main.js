const todoForm = document.querySelector('#todo-form');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 폼 제출 시 새로고침 방지

  // 입력값 가져오기
  const task = document.querySelector('#todo-input').value;
  const priority = document.querySelector('#todo-priority').value;

  // 데이터 객체화
  const todoObject = {
    id: Date.now(),
    task: task,
    priority: priority,
    completed: false,
  };

  console.log("생성된 객체: ", todoObject);

  // todo list 에 추가
  addTodo(todoObject);

  // 입력창 비우기
  todoForm.reset();
})

// ul 가져오기
const todoList = document.querySelector('#todo-list');

// list 에 아이템 추가
function addTodo(todo) {
  // <li> 생성
  const li = document.createElement('li');

  // 내용 채우기
  li.innerHTML = `
  <span>${todo.task}</span>
  <small>${todo.priority}</small>
  <button class="delete-btn">X</button>
  `;

  // <ul> 의 자식으로 편입
  todoList.appendChild(li);
}