// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
const item = document.querySelectorAll(".grocery-item");

// edit option
let editElement;
let editFlag = false;
let editId = "";
let prevValue;

// ****** EVENT LISTENERS **********
window.addEventListener("DOMContentLoaded", function (e) {
  list.innerHTML = "";
  let items = JSON.parse(localStorage.getItem("list"));
  items.forEach(function (item) {
    const element = document.createElement("article");
    element.innerHTML = ` <p class="title">${item.value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    element.classList.add("grocery-item");
    element.id = `${item.id}`;
    list.insertBefore(element, list.firstChild);
    container.classList.add("show-container");
  });
  runEditbtns();
  runDelBtns();
});
clearBtn.addEventListener("click", function (e) {
  list.innerHTML = "";
  container.classList.remove("show-container");
  alert.innerHTML = "empty list";
  alert.style.backgroundColor = "#f8d7da";
  alert.style.color = "#721c24";
  setTimeout(addClass, 1000);
  emptyLocalStorage();
});
// submit form
form.addEventListener("submit", addItem);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  let value = grocery.value;
  const id = new Date().getTime().toString();
  if (value !== "" && editFlag === false) {
    addToLocalStorage(id, value);
    const element = document.createElement("article");
    element.innerHTML = ` <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    element.classList.add("grocery-item");
    element.id = `${id}`;
    list.insertBefore(element, list.firstChild);
    container.classList.add("show-container");
    grocery.value = "";
    // alert
    alert.innerHTML = `${value} added successfully`;
    alert.style.backgroundColor = "#d4edda";
    alert.style.color = "#155724";
    setTimeout(addClass, 1000);
  } else if (editFlag === true && value !== "") {
    console.log("editing");
    const editItem = document.getElementById(editId);
    // edit
    const editLocalId = editId;
    editLocalStorage(editLocalId, value);
    console.log(editItem);
    editItem.firstChild.nextSibling.innerHTML = value;
    grocery.value = "";
    editFlag = false;
    // alert
    alert.innerHTML = `${prevValue} changed to ${value}`;
    alert.style.backgroundColor = "#d4edda";
    alert.style.color = "#155724";
    setTimeout(addClass, 1000);
  } else {
    console.log("empty");
    // alert
    alert.innerHTML = "please enter item";
    alert.style.backgroundColor = "#f8d7da";
    alert.style.color = "#721c24";
    setTimeout(addClass, 1000);
  }

  // const editBtns = document.querySelectorAll(".edit-btn");
  runEditbtns();

  // const delBtns = document.querySelectorAll(".delete-btn");
  runDelBtns();
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  let grocery = { id, value };
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = JSON.parse(localStorage.getItem("list"));

  for (i = 0; i < items.length; i++) {
    // console.log(items[i]);
    if (items[i].id === id) {
      items.splice(i, 1);
    }
  }
  console.log(items);

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = JSON.parse(localStorage.getItem("list"));
  for (i = 0; i < items.length; i++) {
    // console.log(items[i]);
    if (items[i].id === id) {
      items[i].value = value;
    }
  }
  localStorage.setItem("list", JSON.stringify(items));
}
function emptyLocalStorage() {
  let items = JSON.parse(localStorage.getItem("list"));
  items = [];
  localStorage.setItem("list", JSON.stringify(items));
}
// ****** SETUP ITEMS **********
function addClass() {
  alert.innerHTML = "";
  alert.style.backgroundColor = "white";
}
function runEditbtns() {
  const editBtns = document.querySelectorAll(".edit-btn");
  editBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const value =
        e.target.parentNode.parentNode.parentNode.firstChild.nextSibling
          .innerText;

      editFlag = true;
      grocery.value = value;
      prevValue = value;
      grocery.focus();
      editId = e.target.parentNode.parentNode.parentNode.id;
      console.log(editId);
    });
  });
}
function runDelBtns() {
  const delBtns = document.querySelectorAll(".delete-btn");
  delBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const delId = e.target.parentNode.parentNode.parentNode;
      // edit
      const delLocalId = delId.id;
      removeFromLocalStorage(delLocalId);
      delId.remove();

      alert.innerHTML = `${e.target.parentNode.parentNode.parentNode.firstChild.nextSibling.innerHTML} deleted`;
      alert.style.backgroundColor = "#f8d7da";
      alert.style.color = "#721c24";
      setTimeout(addClass, 1000);
      console.log(delId);
    });
  });
}
