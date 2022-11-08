const people = [
  { name: "elon musk" },
  { name: "steve jobs" },
  { name: "bill gates" },
  { name: "javascript" },
  { name: "corejava" },
  { name: "html" },
  { name: "css" },
  { name: "lit" },
  { name: "sai" },
];
var searching = "Searching...";
var resultlist = false;
const searchInput = document.getElementById("search");
const list = document.getElementById("list");
const clearButton = document.getElementById("clear");

function setList(results) {
  clearList();
  for (const person of results) {
    const resultItem = document.createElement("li");
    resultItem.classList.add("result-item");
    const text = document.createTextNode(person.name);
    resultItem.append(text);
    list.append(resultItem);
  }

  if (results.length === 0) {
    noResults();
  }
}
function clearList() {
  list.innerHTML = "";
}
function noResults() {
  const resultItem = document.createElement("li");
  resultItem.classList.add("result-item");
  const text = document.createTextNode("No results found. Sorry!");
  resultItem.append(text);
  list.append(resultItem);
}
searchInput.addEventListener("input", (e) => {
  console.log("input event fired");
  console.log(e.target.value);

  let value = e.target.value;

  if (value && value.trim().length > 2) {
    value = value.trim().toLowerCase();
    document.getElementById("myLink").innerHTML = " ";
    setList(
      people.filter((person) => {
        return person.name.includes(value);
      })
    );
  } else if (value && value.trim().length < 2 && value.trim().length > 0) {
    document.getElementById("myLink").innerHTML = searching;
  } else {
    clearList();
  }
});

clearButton.addEventListener("click", () => {
  clearList();
});
