// Import des modules necessaires pour ce composant : ---------------------------- //
import "./Banner.css"

export default function Banner() {
  return (
    <div class="banner">
        <img src={`${import.meta.env.BASE_URL}/Logo_Carambar.png`} alt="logo Carambar" />
    
    </div>
  )
}
