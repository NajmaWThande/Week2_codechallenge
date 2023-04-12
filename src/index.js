// Your code here

function renderDetails(data){
    characterName.innerText = data.name
    image.src = data.image
};

const votes = document.getElementById("vote-count");

function voteUpdates(){
    document.getElementById('votes-form').addEventListener('submit',
    (event)=>{
        event.preventDefault()
        console.log(event.target.votes.value)
        votes.innerText=event.target.votes.value
    });
};
    
function fetchInfo(){
    fetch("http://localhost:3000/characters")
    .then(respose => respose.json())
    .then(data => {
        data.forEach(data => {
            console.log(data.name)
            const character = document.createElement("span")
            character.innerText = data.name;
            character.addEventListener("click", ()=>{renderDetails(data), voteUpdates(data)})
            const characterBar= document.getElementById("character-bar");
            characterBar.appendChild(character)
        });
    });
};

function intialize(){
    window.addEventListener("load", fetchInfo);
    const characterName = document.getElementById("name");
    const image = document.getElementById("image");
};

intialize();
