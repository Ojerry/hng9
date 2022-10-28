import './App.css';
import Sidebar from './components/Footer';
import BodyBtn from './components/BodyBtn';


function App(){
  return (
    <div>
      <div>
        <img id='profile-img' src='./assets/Onotu_Prof.jpg' alt='my pic'/>
        <p className='name'>Umoru Onotu Jerry</p>
        <p className='hide' id='slack' hidden>Ojerry</p>
      </div>
      <div>
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://twitter.com/" text="Twitter Link" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://training.zuri.team/" text="Zuri Team" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://books.zuri.team/" text="Zuri Books" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://books.zuri.team/python-for-beginners/" text="Python Books" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://background.zuri.team/" text="Background Check for Coders" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://books.zuri.team/design-rules" text="Design Books" />
      </div>



      <footer>

      </footer>
    </div>
  )
}

export default App;
