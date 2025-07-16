// Import des modules nécessaires pour ce composant :  ----------------------//
import "./JokeDisplay.css"; 
import { useState } from "react"





export default function JokeDisplay() {
// Déclaration  des states : 
const [jokeRandomly, setJokeRandomly] = useState(""); 


// Fonction qui se déclenchera à chaque fois que l'on cliquera sur le bouton 
  async function displayJoke() {



    try {

      const response = await fetch("http://localhost:3000/api/v1/jokes/random")

      if(!response.ok) {
        throw new Error (`erreur HTTP: ${response.status}`)
      }

      const data = await response.json(); 
      console.log("data retour en front", data)

    } catch(error) {
      console.error("Erreur API : ", error.message)
    }

  }

  return (
    <div class="jokeDisplay">
      
        <div class="containerJD">
            <button onClick={displayJoke}>
                Teste-moi si tu l'oses ! 
            </button>

            <p>
                Affichage de la blague aléatoire ici !
            </p>
        </div>
    </div>
  )
}