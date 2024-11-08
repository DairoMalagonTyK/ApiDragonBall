import React from 'react';
import "./AcercaDe.css";

const AcercaDe = () => {
    return (
        <main id="about-page">
            <h1>Acerca de la API de Dragon Ball</h1>
            <br />
            <hr />
            <section className="about-section">
                <h2>¿Qué es esto?</h2>
                <p>
                    Esta página proporciona información sobre algunos personajes de Dragon Ball, anime creado por Akira Toriyama en 1984, sigue las aventuras de Goku, un guerrero Saiyajin que busca ser el más fuerte del universo. La serie ha evolucionado a través de varias sagas, incluyendo Dragon Ball Z, GT y Super, cada una expandiendo su universo y personajes. Con su mezcla de acción, humor y lecciones sobre la amistad y la perseverancia, Dragon Ball ha dejado una huella imborrable en la cultura pop. Ha inspirado videojuegos, películas y una base de fanáticos global. Su impacto y popularidad continúan creciendo, consolidándolo como un clásico del anime.
                </p> 

                <h2>Agradecimientos</h2>
                <p>
                    Quiero agradecer a mi docente Arley Patiño, a mis incondicionales Dios y ChatGPT, a mis compañeros de cursos, a mi familia y a Beyoncé.
                </p>
            </section>
            <br />
            <hr />
            <footer className="footer">
                <p>© 2024 Dragon Ball API. @Colombia.</p>
                <p> Dairo Malagón Tique</p>
            </footer>
        </main>
    );
};

export default AcercaDe;
