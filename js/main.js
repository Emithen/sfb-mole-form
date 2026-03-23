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

  // 입력창 비우기
  todoForm.reset();
})