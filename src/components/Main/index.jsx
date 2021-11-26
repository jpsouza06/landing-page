import './main.scss'
import '../../styles/button.scss'
import '../../styles/arrow-animation.scss'

export default function Main() {
  return (
    <main className="main">
        
        <h1 className="title">Você pode estar se perguntando, esse método é para mim?</h1>

        <div className="box">
          <h2>Imagine uma pessoa que tenta de tudo para emagrecer mas não consegue.</h2>
          <p>Ela tenta dietas mirabolantes, faz jejum, tenta mudar completamente de vida do dia para noite, mas mesmo assim, 
            ela sempre volta para o mesmo lugar. 
            Um abismo que suga sempre para o pior momento, ganhar mais peso do que tinha antes.<br/><br/>

            Você já se sentiu assim?<br/> 
            Parece que tenta de tudo mas nada dá certo?
          </p>
        </div>
        <div className="box">
          <h2>Pois é, eu também era assim! </h2>
          <p>Antes de me formar como profissional sempre tentei emagrecer, 
            parava de beber, cortava açúcar, fazia jejum intermitente, 
            sempre me martirizando e tirando tudo o que me trazia prazer e alegria. 
            <br/><br/>
            Chegava a um ponto que eu ficara sempre com uma sensação 
            de “por qual motivo eu estou fazendo isso?”, o que gerava mais sentimento 
            de falta de sentido naquilo tudo e me levava a episódios de compulsão. 
            Comia tudo o que via pela frente e no final, estava lá pesando mais 
            do que quando comecei a tentar todas essas dietas malucas.
          </p>
        </div>

        <div className="photo-title">
          <img src="/images/perfil.png" alt="perfil" />
          <h1>E é aí que comecei a <strong>ENTENDER TUDO</strong></h1>
        </div>
        <div className="box box-content">
          <p>
          Eu não estava errada em querer comer de tudo, a questão é que eu não conseguia 
          (e nem sabia como) alinhar minha alimentação com exercícios físicos de forma que me 
          ajudassem a perder peso enquanto conseguia fazer atividades do dia a dia e comer diversos 
          alimentos.<br/><br/>

          E é desta forma <span>MARAVILHOSA</span> que quero te mostrar o caminho.<br/><br/> 

          Neste método você entende que a comida não é a vilã e te mostro como alinhar sua mente e 
          corpo para o caminho do emagrecimento saudável, de forma que facilite seu desenvolvimento 
          e sua queima de gordura. 
          </p>
        </div>

        <div className="outside-square-box">
          <div className="square-box">
            <p>Vou disponibilizar para você vídeos de treino em casa e fichas para quem 
              treina em academia.<br/><br/>Também te apresentar formas de mudar alguns pequenos pontos 
              em sua rotina adicionando pílulas diárias para melhorar seu desenvolvimento.</p>
          </div>

          <div className="square-box">
            <p>	Desta forma você você irá ter os   seguintes benefícios:</p>
            <ul>
              <li>Melhorar sua saúde física;</li>
              <li>Melhorar sua saúde mental com relação a compulsão alimentar;</li>
              <li>Aprimorar suas capacidades diárias de produzir;</li>
              <li>Adquirir novos hábitos com o uso das pílulas diárias.</li>
            </ul>
          </div>


        </div>

        <div className="title-image">
          <h1>Aqui abaixo uma pesquisa que aponta que, muitas pessoas que tentam emagrecer muitas vezes fazem de forma ineficaz e acabam ganhando peso ao invés de perderem:</h1>
          <img src="/images/news.png" alt="news" />
          <a 
            className="button pulsate-fwd" 
            href="https://google.com.br/" 
            target="blank"
          >
            QUERO SAIR DAS ESTATÍSTICAS
          </a>

          
        </div>
        
        <section className="section-title-arrow">
          <h1 className="first-title">Agora quero te apresentar <strong>DIRETAMENTE O PRODUTO</strong></h1>
          <h1 className="second-title">Neste método você receberá os seguintes produtos:</h1>
          <img className="shake-vertical" src="/images/arrow.png" alt="arrow" />
        </section>

        <div className="outside-square-box list">
          <div className="square-box">
              <ul>
                <li>Mini curso para entender o processo de emagrecimento - <span>R$197,00</span></li>
                <li>Vídeos de treino em casa, para 6 dias (segunda a sexta) – <span>R$40,00</span></li>
                <li>4 fichas de treino para academia – <span>160,00</span></li>
                <li>Pílulas diárias, como mudar de hábitos – <span>49,99</span></li>
              </ul>
          </div>
        </div>
        
        <h1 className="last-title">Todo este conteúdo em um só lugar pelo <strong>VALOR PROMOCIONAL</strong> de:</h1>

        
      </main>
  );
}