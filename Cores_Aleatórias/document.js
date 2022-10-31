const btn = document.querySelector(".btn");
const hexadecimal = document.querySelectorAll(".hexadecimal_box");

// GERAR A COR

function generateColor() {
  const letter_number = "0123456789ABCDEF";
  let color = "#";

  let letter_number_length = letter_number.length;

  for (let i = 0; i < 6; i++) {
    color += letter_number.charAt(
      Math.floor(Math.random() * letter_number_length)
    );
  }

  return color;
}

// MUDAR COR ALEATÓRIA

btn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    let color = generateColor();
    let html_color = document.querySelector(`#cor-${i + 1}`);
    html_color.style.backgroundColor = color;
    let txt_color = document.querySelector(`#color_value-${i + 1}`);
    txt_color.textContent = `${color}`;
  }
});

// COPIAR COR HEXADECIMAL

hexadecimal.forEach((copiar) => {
  copiar.addEventListener("click", () => {
    if (!copiar) {
      return;
    }

    let text = copiar.innerText;

    let textCreate = document.createElement("input");
    textCreate.setAttribute("value", text);
    document.body.appendChild(textCreate);

    textCreate.select();
    document.execCommand("copy");
    textCreate.parentNode.removeChild(textCreate);

    alert(`${text} copiado com sucesso!`);
  });
});
