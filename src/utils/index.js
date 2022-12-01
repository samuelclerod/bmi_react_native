export const getSituation = (imc) => {
  if (imc < 18.5) {
    return {
      text: "Abaixo do peso",
      styles: {
        backgroundColor: "#264653",
        color: "#fff",
      },
    };
  } else if (imc >= 18.5 && imc < 25) {
    return {
      text: "Peso normal",
      styles: {
        backgroundColor: "#2a9d8f",
        color: "#fff",
      },
    };
  } else if (imc >= 25 && imc < 30) {
    return {
      text: "Sobrepeso",
      styles: {
        backgroundColor: "#e9c46a",
        color: "#000",
      },
    };
  } else if (imc >= 30 && imc < 35) {
    return {
      text: "Obesidade grau 1",
      styles: {
        backgroundColor: "#f4a261",
        color: "#000",
      },
    };
  } else if (imc >= 35 && imc < 40) {
    return {
      text: "Obesidade grau 2",
      styles: {
        backgroundColor: "#e76f51",
        color: "#fff",
      },
    };
  } else if (imc >= 40) {
    return {
      text: "Obesidade grau 3",
      styles: {
        backgroundColor: "#bc4749",
        color: "#fff",
      },
    };
  }
};
