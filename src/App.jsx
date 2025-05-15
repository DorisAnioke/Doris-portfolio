import './App.css'  
import './index.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='App'>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default App;
