const API = "1a224494";
const overlay_window = document.querySelector(".searched-movie-overlay");
let cache = []
function createMovieCard(poster,title,more)
{
    let img = document.createElement("img")
    let div = document.createElement("div")
    div.classList.add("movie-card")
    let p = document.createElement("p")
    let morebutton = document.createElement("button")
    morebutton.classList.add("more-btn")
    morebutton.id = "more_info"
    morebutton.innerHTML = "More"
    p.innerHTML = title
    p.classList.add("movie-title")
    div.classList.add("popular-movies-div")
    img.src = poster;
    img.classList.add("popular-movies")
    div.appendChild(img)
    div.appendChild(p)
    if(more)
    {
        div.appendChild(morebutton)
    }    
    document.querySelector(".popular").appendChild(div)
}

function findMovie(title)
{
    let arr = []
    try
    {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API}`)
    .then((resp) =>{
        return resp.json()
    })
    .then((resp)=>{
        createMovieCard(resp.Poster,title)
        arr.push([resp.Poster,title])
    })
    }
    catch(err)
    {
        console.log(err)
    }
    return arr;
}

function displayAllMovies()
{
let movies = ["Deadpool","Joker","Sultan","The legend of bhagat singh","Avengers","The Shallows","Fighter"]
for(let i =0; i<movies.length; i++)
{
    let data = findMovie(movies[i])
    cache.push(data)
}

}

function searchMovie(title)
{
    try{
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API}`)
        .then(resp => resp.json())
        .then((resp)=>{
            document.querySelector(".popular").innerHTML = null;
            createMovieCard(resp.Poster,title,true)
            console.log(resp)
            let {Title,Plot,Actors,Director,Poster,Ratings} = resp;
            more_info.addEventListener("click",()=>{
                document.querySelector(".searched-movie-overlay").style.display="flex"
                s_img.src = Poster;
                m_title.innerHTML = Title;
                m_plot.innerHTML = Plot;
                m_actors.innerHTML = Actors;
                m_directors.innerHTML = Director;
                m_ratings.innerHTML = Ratings[0].Value+"(IMDB)"
                rating.innerHTML = Ratings[0].Value+"(IMDB)"
                document.querySelector(".searched-movie").style.display="flex"
            })            
        })
        .catch(err=>console.log(err))
    }
    catch(err)
    {
        console.log(err)
    }
}

search_key.addEventListener("keyup",(e)=>{
    if(e.keyCode===13)
    searchMovie(e.target.value)
})



window.addEventListener("click",(e)=>{
    if(e.target == overlay_window)
    {
        overlay_window.style.display = "none"
    }
    console.log("window")
})

search_btn.addEventListener("click",()=>{
    search_key.value!==""?searchMovie(search_key.value):console.log("Enter a movie name")
})

displayAllMovies()