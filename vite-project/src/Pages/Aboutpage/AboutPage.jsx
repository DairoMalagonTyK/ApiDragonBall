import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "../../Componentes/ChardCard/CharCardOnly";

const AboutPage = () => {
  const [data, setData] = useState({});
  
  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters/${id}`)
      .then(char => setData(char.data));
  }, [id]);

  return (
    <main id='character-page'>
      <h1 id="title-character">{data.name}</h1>    
      <div className="character-info">
        <div className="image-container">
          <CharCard img={data.image} />
        </div>
        <div className="description">
          <p>{data.description}</p>
        </div>
      </div>
    </main>
  )
}

export default AboutPage;
