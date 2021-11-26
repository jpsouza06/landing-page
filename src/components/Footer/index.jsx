import { useEffect, useRef, useState} from 'react'

import './footer.scss'
import '../../styles/button.scss'
import '../../styles/arrow-animation.scss'

export default function Footer() {
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Jan 01, 2025 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime(); 
      const distance = countdownDate - now;

      const hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance %(1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })

  return (
    <footer className="footer">
        <div className="outside-promotion-box">
            <div className="promotion-box">
              <h2 className="price"><span>R$446,99</span> por R$197,00</h2>
              <h2 className="bonus">E RECEBA DE BÔNUS:</h2>
              <h2 className="ebook">Meu e-book “Comece de dentro”</h2>
              <div className="red-box">
                <img src="/images/stopwatch.png" alt="stopwatch" />
                <h2>Essa <strong>oferta</strong> se encerra em:</h2>
                <h3 className="timer">{timerHours} <span>Hrs</span> {timerMinutes} <span>Mins</span> {timerSeconds} <span>Segs</span></h3>
              </div>

              <div className="button-container">
                <a 
                  className="button pulsate-fwd" 
                  href="https://google.com.br/" 
                  target="blank"
                >
                  GARANTIR ESTA PROMOÇÃO
                </a>

              </div>
            </div>
        </div>
        
        <section className="stamp-text">
          <img src="/images/selo-garantia.png" alt="selo" />
          <p>Compre agora e tenha 15 dias para decidir se o método é para você! O código de 
            defesa do consumidor(Art.49) garante 7 dias para solicitar reembolso em caso de 
            insatisfação com o produto. Eu confio tanto no meu método que lhe garanto o <span>DOBRO 
            DE GARANTIA</span>. Você realiza a inscrição agora, e tem acesso imediato e irrestrito a 
            todo o conteúdo. E se até 15 dias corridos não gostar do que vê, poderá aplicar a 
            garantia INCONDICIONAL.</p>
        </section>

        
        <section className="about">
          <h1><strong>SOBRE NAYARA MARTINS</strong></h1>
          <section className="about-content">
            <img src="/images/about-photo.png" alt="about" />
            <p>Sou professora de educação física há 6 anos. Amante da vida, amo estudar e estou sempre em busca do autoconhecimento.<br/>
              Trabalho com pessoas há mais de 10 anos e, com toda experiência, elaborei este método que consiste em ensinar quem quer começar a fazer isso do jeito certo, e as que não conseguem, encontrar o caminho..<br/>
              As coisas funcionaram tão bem que criei um livro chamado “Comece de Dentro” objetivo e claro, ditando o caminho, passo a passo.<br/>
              Através do livro eu e minha equipe resolvemos criar um mini curso, onde existe uma aproximação maior e mais profunda, alavancando os seus resultados.</p>
          </section>
        </section>

        <section className="arrow-button">
          <img className="shake-vertical" src="/images/arrow.png" alt="arrow" />
          <a 
            className="button pulsate-fwd" 
            href="https://google.com.br/" 
            target="blank"
          >
            QUERO SAIR DAS ESTATÍSTICAS
          </a>

        </section>

        <section className="doubts-container">
          <section className="doubts-content">
            <h1>Dúvidas Frequentes</h1>
            <div>
              <h2>1. Como vou receber o curso?​</h2>
              <p>Quando a compra é aprovada pela hotmart, você recebe acesso, dentro da plataforma, ao método completo.</p>
            </div>
            <div>
              <h2>2. É garantido que vou ter resultado?​</h2>
              <p>Te garanto que se tudo o que te mostro for feito, você terá resultados!</p>
            </div>
            <div>
              <h2>3. Como funciona o suporte?​</h2>
              <p>Via whatshapp durante todo o dia, onde minha equipe tirará todas as suas dúvidas.</p>
            </div>
            <div>
              <h2>4. O que é a hotmart?</h2>
              <p>Hotmart é uma plataforma de distribuição de conteúdos digitais. Hoje, a plataforma mais segura do mundo que proporciona segurança para quem paga recebe os produtos.</p>
            </div>
            <div>
              <h2>5. Qualquer um pode fazer o método?​</h2>
              <p>Sim. Esse método é indicado para TODAS as pessoas e idades.</p>
            </div>
            <div>
              <h2>6. Tenho problema cardiovascular, mesmo assim posso fazer o método?</h2>
              <p>Sim, no meu método todas as pessoas conseguem se desenvolver de forma que não afete o seu bem estar físico.</p>
            </div>
            <div>
              <h2>7. E se eu desistir da compra?</h2>
              <p>Como dito anteriormente, disponibilizo para você 15 dias para avaliar se meu produto é para você, caso ache que não, você pode solicitar reembolso através da própria plataforma.</p>
            </div>
          </section>
        </section>
        

        <div className="policy-terms">
          <a href="https://metodom7.com/politica-privacidade/" target="_blank" >Política de privacidade</a>
          <a href="https://metodom7.com/termos-de-uso/" target="_blank">Termos de uso</a>
        </div>
      </footer>
  );
}