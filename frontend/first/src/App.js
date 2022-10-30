import './App.css';
import BodyBtn from './components/BodyBtn';
import pic from "./assets/Onotu_Prof.jpg"
import github from "./assets/githublogo.png";
import ingressive from "./assets/Ingressive.jpg";
import slack from "./assets/slack.png";
import zuri from "./assets/zuri.jpg";



function App(){
  return (
    <div>
      <div>
      <div className='profile-img-container'>
         <img className='profile-img' src={pic} alt='my pic'/>
      </div>
       <p className='name'>Umoru Onotu Jerry</p>
        <p className='hide' id='slack' hidden>Ojerry</p>
      </div>
      <div>
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://twitter.com/" text="Twitter Link" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://training.zuri.team/" text="Zuri Team" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://books.zuri.team/" text="Zuri Books" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://books.zuri.team/python-for-beginners?ref_id=<Ojerry>" text="Python Books" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://background.zuri.team/" text="Background Check for Coders" />
        <BodyBtn id="btn_zuri" className="lg-btn" target="_blank" href="https://books.zuri.team/design-rules" text="Design Books" />
      </div>
      <div className='blw-btn-img'>
        <a><img className='slacklogo' src={slack} /></a>
        <a><img className='githublogo' src={github} /></a>
      </div>
      <hr></hr>
      <footer>
      
      <img src={zuri}/>
      <p>HNG Internship 9 Frontend Task</p>
      <img src={ingressive}/>

      </footer>
    </div>
  )
}

export default App;
