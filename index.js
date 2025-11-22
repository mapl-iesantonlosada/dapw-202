import axios from 'axios';

const latitude = 42.88;
const longitude = -8.54;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;

axios.get(url)
    .then(response => {
        const datos = response.data.current_weather;
        console.log(`Cidade: Santiago de Compostela`);
        console.log(`Temperatura: ${datos.temperature} °C`);
        console.log(`Vento: ${datos.windspeed} km/h`);
        console.log(`Dirección do vento: ${datos.winddirection}°`);
        console.log(`Hora da medición: ${datos.time}`);
    })
    .catch(error => {
        console.error('Erro ao facer a petición:', error.message);
    });