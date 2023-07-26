import '../App.css';
import '../components/NavBar.css';
import Navbar from '../components/NavBar'

const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <p>
            Welcome to Dawn's Cards of Fantasy!
          </p>
        </header>
        <div class="Select-box">
          <p>MENU</p>
            <Navbar />
          {/* <button class="Select-options">Talk to Dawn</button>
          <button class="Select-options">Think Like an Astrologian</button>
          <button class="Select-options">FFXIV</button> */}
  
        </div>
      </div>
    )
}

export default Home;