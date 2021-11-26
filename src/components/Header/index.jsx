import {useState} from 'react'

import './header.scss'
import '../../styles/button.scss'

export default function Header() {
  const [videoActive, setVideoActive] = useState(false)

  return (
    <div className="header">
        <h1>Como, FINALMENTE, queimar gordura <strong>SEM SE TORTURAR</strong></h1>
        
        <div 
          className="image-video" 
          onClick={() => {
            return (
              setVideoActive(true),
              alert("Este video é somente um exemplo")
            )
          }}
        >
            <img src="./images/play.png" alt="image-play" />
            {videoActive && (
              <iframe 
                    name="youtube-player"
                    className="video-player"
                    src="https://www.youtube.com/embed/lpcpsCY4Mco"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen="1">
                  
              </iframe>
            )}
          </div>
        

      
        <a 
          className="button pulsate-fwd" 
          href="https://google.com.br/" 
          target="blank"
        >
          QUERO MUDAR DE VIDA
        </a>
      </div>
  );
}