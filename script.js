
const menuItems = ["Latte", "Espresso", "Drip Coffee", "Muffin", "Iced Coffee"];

const menuList = document.getElementById("menu-list");

menuItems.forEach(function(item) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  menuList.appendChild(listItem);
});

const toggleButton = document.getElementById("toggle-mode");

toggleButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
