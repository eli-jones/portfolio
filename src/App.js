import './App.css';

import whiteStar from './assets/images/white-star.png'
import goldStar from './assets/images/gold-star.png'
import purpleStar from './assets/images/purple-star.png'

import { Projects } from './components/projects'

function App() {
  return (
   <body>
  <header>
      <h1>Elizabeth Jones</h1>
  </header>

  <section className="home">
      <img src={whiteStar} className="star white one" alt=''/>
      <img src={whiteStar} className="star white two" alt=''/>
      <img src={whiteStar} className="star white three" alt=''/>
      <img src={purpleStar} className="star purple" alt=''/>
      <img src={goldStar} className="star gold" alt=''/>
      <h2>Welcome</h2>
      <p>My name is Elizabeth. I'm a front end web developer based in Colorado. I love solving problems and making your dreams real.</p>
  </section>

  <section className="ph">
      <p>Coming Soon.</p>
  </section>
    
  <section className="work">
      <Projects />
  </section>
    
  <section className="contact">
      <h2>Contact</h2>
      <form method="post" action="https://forms.un-static.com/forms/0bb0aaa270a6ad697c25925285cf46e08584b008">
          <label name="name">Name</label>
          <input type="text" name="name" className="name" />
          <label name="email">Email</label>
          <input type="email" name="email" className="email" />
          <label name="message">Your Message</label>
          <textarea name="message" className="message"></textarea>
          <input type="submit" name="submit" className="submit" value="Send" />
          <p className="small"><small>(Powered by <a rel="nofollow" href="Un-static Forms">Un-static Forms</a>)</small></p>
      </form>
  </section>
    
</body>
  );
}

export default App;
