const todoForm = ...
const todoInput = ...
const todoItemsList = ...

let todos = [];

todoForm.addEventListener(..., function (....) {
  ....preventDefault();
  addTodo(todoInput.value);
});

function addTodo(item) {
  //   simpan todo jika tidak kosong
  if (item !== "") {
    // buat object todo
    const todo = {
      id: Date.now(),
      name: ...,
      completed: ...
    };

    // tambahkan object todo ke list todos
    // tambahkan todo ke localstorage
    addToLocalStorage(...);
    // setelah todo ditambah ke localstorage maka inputan di bersihkan
    todoInput.value = "";
  }
}

function renderTodos(todos) {
  // clear apapun yang ada dalam <ul> pada class class=todo-items
  ...
  //   looping todos untuk dirender ke <li>
  todos.forEach(function (...) {
    // cek apakah todo statusnya complete
    const checked = 
    // buat element <li>
    const li = ...
    // tambahkan class item pada <li>
    li.setAttribute("class", "item");
    // tambahkan atribut data-key dengan id todo
    li.setAttribute("data-key", ...);
    
    // jika status todo, maka tambahkan class ke <li> yaitu => 'checked'
    // agar memdapat style coretan
    if (item.completed === true) {
      li.classList.add("checked");
    }

    // tambahkan iput checkbox dengan class checkbox pada li
    // juga tambahkan button dengan class delete-button
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      ...
    `;
    // masukkan atau append element li ke todo item list
    ...
  });
}

// func utk menambahkan data ke local storage
function addToLocalStorage(todos) {
  // ubah data ke string sebelum disimpan ke local storage
  localStorage.setItem("todos", JSON.stringify(todos));
  // panggil func renderTodos
  ...
}

// func utk mengambil data dari localstorage
function getFromLocalStorage() {
  const reference = ...
  if (reference) {
    // ubah data string dari localstorage ke array
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle nilai complete dan tidak complete
function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = ...;
    }
  });
  // tambahkan todos ke localStorage
  addToLocalStorage(...);
}

// hapus data dari array todos kemudian update localstorage 
//sehingga rendernya terupdate
function deleteTodo(id) {
  // filter data todos pada <li> sesuai id
  todos = todos.filter(function (item) {
    return item.id != ...;
  });
  // update localStorage
  addToLocalStorage(todos);
}

// awali data dengan data yang ada pada localStorage
getFromLocalStorage();

// tambahkan <ul> dengan class todoItems untuk diklik
todoItemsList.addEventListener("click", function (event) {
  // cek apakah event pada checkbox
  if (event.target.type === "checkbox") {
    // jika berada pada checkbox maka lakukan toggle
    toggle(event.target.parentElement.getAttribute("data-key"));
  }
  // cek apakah event pada tombol
  if (event.target.classList.contains("delete-button")) {
    // jika true, maka hapus data todo sesuai id yang ada pada attribute data-key di <li>
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});
