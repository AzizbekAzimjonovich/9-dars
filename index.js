async function weather(shaxar) {
    const url = `https://open-weather13.p.rapidapi.com/city/${shaxar}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5729361896msh338361719c968e7p1ae79djsn5bac4e79d7d7',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function showWeather() {
    const shaharEl = document.getElementById('hudud');
    const shaxar = shaharEl.value;

    
        const block = await weather(shaxar);

        console.log(block);

        const obHavoMaLumotlariDiv = document.getElementById('block');

        if (block) {
            obHavoMaLumotlariDiv.innerHTML += `
                <p>${block.name}</p>
                <p>${block.sys.country}</p>
                <p>${block.weather[0].description}</p>
                <p>${block.main.temp}°C</p>
                <p>${block.main.humidity}% humidity</p>
                <hr>
            `;
        } else {
            obHavoMaLumotlariDiv.innerHTML = 'xato';
            
        }
    }

