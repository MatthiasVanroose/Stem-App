// Simuleer een lijst van genres
const genres = ["House", "Techno", "Disco", "Hip-Hop", "Trance"];
const genresContainer = document.getElementById("genres-container");

// Genereer dynamische knoppen voor elk genre
function loadGenres() {
    genresContainer.innerHTML = ""; // Reset de container
    genres.forEach((genre) => {
        const genreDiv = document.createElement("div");
        genreDiv.className = "genre";
        genreDiv.textContent = genre;

        // Voeg klikfunctionaliteit toe
        genreDiv.onclick = () => voteForGenre(genre);

        genresContainer.appendChild(genreDiv);
    });
}

// Verzamel stemmen (simulatie)
function voteForGenre(genre) {
    alert(`Je hebt gestemd op: ${genre}`);
    // In een echte app stuur je de stem naar de backend met fetch()
}

// Timer (simulatie)
function startTimer(durationInMinutes) {
    let timer = durationInMinutes * 60; // seconden
    const timerElement = document.getElementById("timer");

    setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        if (timer > 0) {
            timer--;
        }
    }, 1000);
}

// Laad genres en start timer bij pagina laden
loadGenres();
startTimer(30); // 30 minuten timer
