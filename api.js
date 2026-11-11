const latitude = 52.37;
const longitude = 4.90;

export const haalTemperatuurOp = async () => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("De api gaf geen data");
  }

  const data = await response.json();
  return data.current.temperature_2m;
};
