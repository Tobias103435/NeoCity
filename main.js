import { haalTemperatuurOp } from "./api.js";

const klok = document.getElementById("klok");
const weer = document.getElementById("weer");

const toonTijd = () => {
  const nu = new Date();
  klok.textContent = nu.toLocaleTimeString("nl-NL");
};

const startKlok = () => {
  toonTijd();
  setInterval(toonTijd, 1000);
};

const toonWeer = async () => {
  try {
    const temperatuur = await haalTemperatuurOp();
    weer.textContent = `${temperatuur} graden`;
  } catch (fout) {
    weer.textContent = "Er ging iets mis met de API";
  }
};

startKlok();
toonWeer();
