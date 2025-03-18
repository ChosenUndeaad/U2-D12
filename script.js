const nameList = document.getElementById("name");
const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");

saveButton.addEventListener("click", function () {
  const text = nameList.value;
  localStorage.setItem("names", text);
});
