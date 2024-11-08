import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';

import CharCard from '../../Componentes/ChardCard/ChardCard';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios("https://dragonball-api.com/api/characters?limit=100")      
      .then(char=>setData(char.data.items))
    },[]);

    return (
      <main id='home-page'>
        <div>
          <h1 id="home-title">DRAGON HOME</h1>
        </div>        
        <div id='characters'>
          {
            data.map((element) => (
              <div key={element.id}>
                <Link to={"/details/"+element.id}>
                  <CharCard 
                    img={element.image} 
                    nombre={element.name} 
                    especie={element.race} 
                    genero={element.gender} 
                    baseKi={element.ki} 
                    totalKi={element.maxKi} 
                    affiliation={element.affiliation} 
                  />
                </Link>             
              </div>
            ))                
          }
        </div>
      </main>
    )
  }
  
  export default HomePage;