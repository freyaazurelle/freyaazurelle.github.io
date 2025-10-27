function toggleTheme() {
  const html = document.documentElement;
  const button = document.querySelector(".theme-toggle");
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.removeAttribute("data-theme");
    button.textContent = "🌙 Dark";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    button.textContent = "☀️ Light";
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  document.querySelector(".theme-toggle").textContent = "☀️ Light";
}
