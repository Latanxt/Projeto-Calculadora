// VARS
let press_igual = 0
let button_input = document.querySelectorAll(".in-but")
let input = document.getElementById("input")
let igual = document.getElementById("igual")
let reset = document.getElementById("resetar")
let apagar = document.getElementById("apagar")

// RESETAR PÁGINA
window.onload = () => {
    input.value = "";
};

// FUNCS DOS BOTÕES
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
      if (press_igual == 1) {
        input.value = "";
        press_igual = 0;
      }

      input.value += button_class.value;
    });
  });

// BOTÃO (=)
  igual.addEventListener("click", () => {
    press_igual = 1;
    let inp_val = input.value;
    try {
      let solution = eval(inp_val);

      if (Number.isInteger(solution)) {
        input.value = solution;
      } else {
        input.value = solution.toFixed(2);
      }

// ALERTA DE VALOR INVALIDO
    } catch (err) {

      alert("VALOR INVALIDO!!");
    }
  });
  
// BOTÕES DE RESET (C) E APAGAR (DEL)
  reset.addEventListener("click", () => {
    input.value = "";
  });
  apagar.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
  });