let count = document.getElementById("count");
let saved = document.getElementById("saved");
let savedCount = "";
let counter = 0;

function inc() {
  counter += 1;
  count.textContent = "" + counter;
}

function save() {
  savedCount = counter + " - ";
  saved.textContent += savedCount;
  
  count.textContent = "0";
  counter = 0;
}
