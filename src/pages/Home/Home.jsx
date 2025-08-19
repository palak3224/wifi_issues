import MinimalContactPopup from "./Components/MinimalContactPopup"
import WiFiHelpCenter from "./Components/WiFiHelpCenter"
import WiFiIssueHero from "./Components/WiFiIssueHero"
import WiFiTroubleshooter from "./Components/WiFiTroubleshooter"

function Home() {
  return (
    <div>
      <h1>
        <WiFiIssueHero />
        <WiFiTroubleshooter />
        <WiFiHelpCenter />
        <MinimalContactPopup />
      </h1>
    </div>
  )
}

export default Home