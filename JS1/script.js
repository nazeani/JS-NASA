const apiKey = 'z7TKVoQwB5P60xDwC5IOK6wJhbabIFOPphVhSmLl';

const container = document.querySelector(".container")
const imageContainer = document.querySelector(".image-container")
const button = document.querySelector(".button1")
const dataInput = document.querySelector('.dateInput');

button.addEventListener('click', () => {
    const selectedDate = dataInput.value;
    while (imageContainer.firstChild) {
        imageContainer.firstChild.remove();
    }
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const image = document.createElement('img');
        image.src = data.hdurl;
        image.style.maxWidth = '1200px'; // Boyutunu buradan ayarlayabilirsiniz
        imageContainer.style.position = 'relative';
        imageContainer.style.textAlign = 'center';
        imageContainer.appendChild(image);
    })
    .catch(error => {
        alert("Seçilen tarixte sekil tapilmadi.");
    });
});

 



