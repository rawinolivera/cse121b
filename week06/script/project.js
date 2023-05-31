
let movieList = [];

function displayMovies(movieList){
    movieList.forEach(movie => {
        let frame = document.createElement('div');
        let movieName = document.createElement('h3');
        movieName.textContent = movie.Title;
        let moviePoster = document.createElement('img');
        moviePoster.setAttribute('src', movie.Poster);
        moviePoster.setAttribute('alt', movie.Title);
        let movieYear = document.createElement('h4');
        movieYear.textContent = movie.Year;

        frame.appendChild(movieName);
        frame.appendChild(moviePoster);
        frame.appendChild(movieYear);
        document.querySelector("#space").appendChild(frame);
        console.log("pasando");
    });
    
}

async function getMovieList(){

    const moviesUrl = "https://rawinolivera.github.io/cse121b/data/movies.json";
    const response = await fetch(moviesUrl);

    if(response.ok){
        const data = await response.json();
        movieList = data;
    }

    displayMovies(movieList);
    console.log("aqui estoy");
}

getMovieList();