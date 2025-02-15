const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("WRITE SOMETHING");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  listContainer.appendChild(li);

  span.addEventListener("click", () => {
    li.remove();
    saveData();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("checked");
    saveData();
  });

  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";

  listContainer.querySelectorAll("li").forEach((li) => {
    let span = li.querySelector("span");

    span.addEventListener("click", () => {
      li.remove();
      saveData();
    });

    li.addEventListener("click", () => {
      li.classList.toggle("checked");
      saveData();
    });
  });
}

showTask();
