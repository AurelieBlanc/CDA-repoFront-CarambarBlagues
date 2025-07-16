// Import des modules nécessaires pour ce composant :  ----------------------//
import "./JokeDisplay.css"; 
import { useState } from "react"





export default function JokeDisplay() {
// Déclaration  des states : 
const [jokeRandomly, setJokeRandomly] = useState({
  id:null, 
  question:"", 
  answer:""
}); 


// Fonction qui se déclenchera à chaque fois que l'on cliquera sur le bouton 
  async function displayJoke() {



    try {

      const response = await fetch("http://localhost:3000/api/v1/jokes/random")

      if(!response.ok) {
        throw new Error (`erreur HTTP: ${response.status}`)
      }

      const data = await response.json(); 
      console.log("data retour en front", data)
      setJokeRandomly(data); 

    } catch(error) {
      console.error("Erreur API : ", error.message)
    }

  }

  return (
    <div className="jokeDisplay">
      
        <div className="containerButtonAndJoke">
            <button onClick={displayJoke}>
                Teste-moi si tu l'oses ! 
            </button>
         
    {jokeRandomly?.id !== null && (
      <div className="jokeContainer">
            <p>
               {jokeRandomly?.question}
            </p>
            <p>
               {jokeRandomly?.answer}
            </p>
      
      </div>
    )}  

    </div>
  
       
    </div>
  )
}