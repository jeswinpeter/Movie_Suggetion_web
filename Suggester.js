let inputBox = document.getElementById("Userin");
let resultText = document.getElementById("result");
let navSearch = document.getElementById("navSearch");
let moodText = document.getElementById("moodText");

inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        let movieName = inputBox.value.trim();

        if(movieName === "") return;

        let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key='Place Your api key here'&query=${encodeURIComponent(movieName)}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if(data.results.length > 0) {
                    let movie = data.results[0];
                    resultText.innerText = `Found: ${movie.title}`;
                }
                else {
                    resultText.innerText = `No Movie found for "${movieName}"`;
                }
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