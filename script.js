const JokeContainer=document.getElementById("joke")
const btn=document.getElementById("btn")
const url="https://v2.jokeapi.dev/joke/Dark?type=single"

let getJoke=() =>{
    JokeContainer.classList.remove("fade")
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        JokeContainer.textContent=`${item.joke}`;
        JokeContainer.classList.add("fade")
    })
}
btn.addEventListener("click",getJoke)
getJoke()