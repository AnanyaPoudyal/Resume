import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Project from './components/project/Project';
import Certification from './components/certification/Certification';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <section id="home">
                  <Home />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="certification">
          <Certification />
        </section>
      </header>
      <Footer />
    </div>
  );
}

export default App;
