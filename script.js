const nameList = document.getElementById("name");
const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");
const list = document.getElementById("list");

let storedNames = [];
try {
  storedNames = JSON.parse(localStorage.getItem("names"));
} catch (err) {} //se c'è un errore nel blocco try entri nel catch
//C'è il blocco finally che viene eseguito ogni volta dopo try e catch anche dopo un catch

const append = function (name) {
  let p = document.createElement("p");
  p.innerText = name;
  list.appendChild(p);
};

storedNames.forEach((name) => {
  append(name);
});

saveButton.addEventListener("click", function () {
  storedNames.push(nameList.value);
  localStorage.setItem("names", JSON.stringify(storedNames));
  append(nameList.value);
});

deleteButton.addEventListener("click", function () {
  storedNames.pop();
  localStorage.setItem("names", JSON.stringify(storedNames));
  list.removeChild(list.lastElementChild);
});
