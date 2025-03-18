saveName = function () {
  let name = document.getElementById("name-input");
  localStorage.setItem("name:", name);
};

removeName = function () {
  if (localStorage.getItem("name")) {
    localStorage.removeItem("name");
  }
};
