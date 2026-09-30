import './estilo.css';

const root = document.documentElement;
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const themeToggle = document.querySelector("#theme-toggle");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

function updateThemeButton() {
  const dark = root.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
  themeToggle.innerHTML = `<span aria-hidden="true">${dark ? "☀" : "◐"}</span> ${dark ? "Claro" : "Tema"}`;
}

const savedTheme = localStorage.getItem("frontlab-theme");
if (savedTheme === "dark") root.dataset.theme = "dark";
updateThemeButton();

themeToggle.addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  if (dark) {
    delete root.dataset.theme;
    localStorage.setItem("frontlab-theme", "light");
  } else {
    root.dataset.theme = "dark";
    localStorage.setItem("frontlab-theme", "dark");
  }
  updateThemeButton();
});

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    formStatus.textContent = "Preencha todos os campos corretamente.";
    form.querySelector(":invalid")?.focus();
    return;
  }
  formStatus.textContent = "Mensagem validada com sucesso. Este formulário é demonstrativo.";
  form.reset();
});
