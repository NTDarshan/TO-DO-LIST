const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addList() {
  if (inputBox.value === "") {
    alert("you must type something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showList() {
//   localStorage.innerHTML = localStorage.getItem("data");
// }
// showList();

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  if (localStorage.getItem("data")) {
    listContainer.innerHTML = localStorage.getItem("data");
  }
}

showList();
