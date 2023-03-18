function listDisplay(event) {
  event.stopPropagation();
  var listItem = event.currentTarget;
  var icon = listItem.querySelector(".icon")
  var box = listItem.querySelector(".toShow");
  if (box.style.display === "none") {
    box.style.display = "block";
    icon.style.display = "none";
  } else {
    box.style.display = "none";
    icon.style.display = "block";
  }
}
