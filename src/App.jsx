import styles from"./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Education } from "./components/Education/Education";

function App(){
  return(<div className={styles.App}>
    <Navbar/>
    <Hero/>
  <Education/>
  
  </div>
  );
}

export  default App;
