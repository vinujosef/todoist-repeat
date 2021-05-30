const btn = document.querySelector('.btn-toggle');

const theme = document.querySelector('#theme-link');

btn.addEventListener("click", () => {
  console.log(theme.getAttribute("href"));
  if(theme.getAttribute("href") == "/stylesheets/dark.css") {
    theme.href = "/stylesheets/light.css";
  }

  else {
    theme.href = "/stylesheets/dark.css"
  }
})