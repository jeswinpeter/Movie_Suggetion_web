let inputBox = document.getElementById("Userin");
let resultText = document.getElementById("result");
let navSearch = document.getElementById("navSearch");
let moodText = document.getElementById("moodText");

inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        let movieName = inputBox.value.trim();

        if(movieName === "") return;

        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=ed507b779fc1ae8e24b7f99587efec8b&query=${encodeURIComponent(movieName)}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if(data.results.length > 0) {
                    let movie = data.results[0];
                    let detailsBox = document.getElementById("movieDetails");

                    document.querySelector(".bubble").classList.add("expanded");

                    detailsBox.innerHTML = `
                    <p><strong>Title:</strong> ${movie.title}</p>
                    <p><strong>Release date:</strong> ${movie.release_date}</p>
                    <p><strong>Rating:</strong> ${movie.vote_average}</p>
                    <p><strong>Summary:</strong> ${movie.overview}</p>
                    `;

                    detailsBox.style.display = "block";
                    // detailsBox.scrollIntoView({behavior: "smooth"})
                }
                else {
                    resultText.innerText = `No Movie found for "${movieName}"`;
                }
            })
        .catch(error => {
            console.error("Error fetching movie:", error);
            resultText.innerText = "Something went wrong. Try again."
        })
    }
});

navSearch.addEventListener("click", function(event) {
    event.preventDefault();
    moodText.style.display = "none";
    inputBox.focus();
})

inputBox.addEventListener("click", ()=> {
    moodText.style.display = "none";
})