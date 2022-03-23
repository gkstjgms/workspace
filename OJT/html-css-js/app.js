let mouseCursor = document.querySelector(".cursor");
let menu = document.querySelector(".menu");
let main = document.getElementById("main");

// 커서
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";
}

// routes
function updateRoute(templateId) {
  const template = document.getElementById(templateId); // instantiate the template with the id
  const view = template.content.cloneNode(true); // put its cloned content within app
  const app = document.getElementById('app');
  app.innerHTML = "";
  app.appendChild(view);
}

updateRoute('main');
