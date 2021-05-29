// Unsplash API
const count = 10;
const apiKey = 't1tG0IVHDZFle1Sy96EakLm_FdP73k5wo5kx8ZqGSzs';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
      // Catch Error Here
    }
}

// On Load
getPhotos();
