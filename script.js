"use strict";

// Función para realizar un GET request usando Promises
const fetchDataWithPromise = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
};

// Función para realizar un GET request usando Async/Await
const fetchDataWithAsyncAwait = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

// Procesamiento de la respuesta
const processResponse = (data, option) => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (data.media_type === 'image') {
        if (option === '2' || option === '4') {
            // Mostrar solo la imagen para las opciones 2 y 4
            const img = new Image();
            img.src = data.url;
            img.alt = data.title;
            img.style.maxWidth = '100%';
            resultDiv.appendChild(img);
        } else if (option === '1' || option === '3') {
            // Mostrar solo texto para las opciones 1 y 3
            const description = document.createElement('p');
            description.textContent = data.explanation;
            resultDiv.appendChild(description);
        }
    } else {
        resultDiv.textContent = 'La respuesta no es una imagen o no está disponible para esta fecha.';
    }
};

// Manejador de eventos para el botón de búsqueda
document.getElementById('fetchButton').addEventListener('click', async () => {
    const apiSelection = document.getElementById('apiSelection').value;
    const searchQuery = document.getElementById('searchQuery').value.trim();
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${searchQuery}`;

    try {
        let data;
        if (apiSelection === '1' || apiSelection === '2') {
            data = await fetchDataWithPromise(apiUrl);
        } else {
            data = await fetchDataWithAsyncAwait(apiUrl);
        }
        
        processResponse(data, apiSelection);
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
});
