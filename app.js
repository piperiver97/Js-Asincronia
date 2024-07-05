const data = {
    "results": [
      {
        "title": "Estudiar Js",
        "priority": "alta",
        "isDone": false
      },
      {
        "title": "Estudiar CSS",
        "priority": "alta",
        "isDone": true
      },
      {
        "title": "Estudiar OOP",
        "priority": "media",
        "isDone": false
      },
      {
        "title": "Estudiar IA",
        "priority": "baja",
        "isDone": false
      }
    ]
  };
  
  data.results.forEach(todo => {
    console.log(todo.title);
  });
  

    const tableBody = document.getElementById('todos-table-body');

    data.results.forEach(todo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.priority}</td>
            <td>${todo.isDone ? 'Sí' : 'No'}</td>
        `;
        tableBody.appendChild(row);
    });
