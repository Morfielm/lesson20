import { getRandomColor } from "./utils";

const initApp = () => {
  console.log("Hello world");
  const button = createButton();
  button.addEventListener("click", () => {
    const body = document.querySelector("body");
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
  });
};

const createButton = () => {
  const button = document.createElement("button");
  button.className = "button";
  button.innerText = "Изменить цвет страницы";

  const body = document.querySelector("body");
  body.append(button);

  return button;
};

export default initApp;
