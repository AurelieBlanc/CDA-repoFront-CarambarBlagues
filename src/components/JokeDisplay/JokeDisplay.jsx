// Import des modules nécessaires pour ce composant :  ----------------------//
import "./JokeDisplay.css"; 
import { useState } from "react"
import { PiEyesFill } from "react-icons/pi"; // icone : <PiEyesFill />






export default function JokeDisplay() {
// Déclaration  des states : 
const [jokeRandomly, setJokeRandomly] = useState({
  id:null, 
  question:"", 
  answer:""
}); 

const [display, setDisplay] = useState(false); 


// Fonction qui se déclenchera à chaque fois que l'on cliquera sur le bouton 
  async function displayJoke() {



    try {  

      const response = await fetch("https://cda-repoback-carambarblagues.onrender.com/api/v1/jokes/random")

      if(!response.ok) {
        throw new Error (`erreur HTTP: ${response.status}`)
      }

      const data = await response.json(); 
      setDisplay(false); 
      setJokeRandomly(data); 
      

    } catch(error) {
      console.error("Erreur API : ", error.message)
    }

  }

  function displayAnswer() {
    console.log("ca marche"); 
    setDisplay (prev => !prev)
    
  }; 


  return (
    <div className="jokeDisplay">
      
        <div className="containerButtonAndJoke">
            <button onClick={displayJoke}>
                Teste-moi si tu l'oses ! 
            </button>
         
         <div className="jokeContainer">

    {jokeRandomly?.id !== null ? (
     
            <p>
               {jokeRandomly?.question}
            </p>
            ) : (
              <p>
               En cours de chargement ...
            </p>
    )}




    {display ? (
            <p className="answer">
               {jokeRandomly?.answer}
            </p>
    ) : (
          <p>
              <button className="buttonAnswer"
              onClick={displayAnswer}>
                  <PiEyesFill className="iconeEye" size={22}
                  /> 
                  Voir la réponse
              </button>
          </p>
    )}



    </div>

    </div>
  
       
    </div>
  )
}