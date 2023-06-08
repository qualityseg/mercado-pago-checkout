import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const HeaderPage = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div
          style={{
            width: 500,
            marginTop: 145,
            marginRight: 5,
            backgroundColor: '#0C251F',
            borderRadius: 5,
          }}
        >
          <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
            <div>
              <img src="images/background-1.jpg" alt="Carousel Image 1" />
            </div>
            <div>
              <img src="images/background-2.jpg" alt="Carousel Image 2" />
            </div>
            <div>
              <img src="images/background-3.jpg" alt="Carousel Image 3" />
            </div>
          </Carousel>
        </div>
        <div
          style={{
            width: 500,
            textAlign: 'center',
            backgroundColor: '#0C251F',
            marginTop: 145,
            borderRadius: 5,
          }}
        >
          <p>QUEM SOMOS</p>
          <p>
            A Quality Seg é uma empresa especializada em Engenharia de Segurança e Medicina do trabalho com atuação desde o ano de 2008, trabalhando e desenvolvendo política sustentável em gestão ocupacional.

Disponibilizamos de uma estrutura completa e com equipe altamente qualificada de médicos do trabalho e especialistas para cuidar e zelar pela saúde integridade dos colaboradores.

Oferecemos também gestão de segurança e capacitação profissional com implementações de programas de treinamento com a missão de orientar a maneira mais segura de trabalho para cada função a ser exercida.

A Quality Seg conta com unidades próprias e credencias em todo o território nacional, com capacidade atual de 200 atendimentos diários, recentemente atingiu a marca de 300.000 capacitações.

No ano de 2019 foi vencedora do Prêmio Empreendedores destacando ainda mais a atuação latente na comunidade lençoense.
          </p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          div :global(.carousel) {
            width: 100% !important;
            margin-right: 0 !important;
          }
          div :global(.column) {
            width: 100% !important;
            margin-top: 5px !important;
          }
        }
      `}</style>
    </>
  );
};
