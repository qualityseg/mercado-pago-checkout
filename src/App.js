import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { MyImage } from "./components/MyImage";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";
import { depositions } from "./data/depositions.js";
import * as gtag from "./lib/gtag";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles/Home.module.scss";

function App() {
  const history = useHistory();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    history.listen(handleRouteChange);
    return () => {
      history.unlisten(handleRouteChange);
    };
  }, [history]);

  useEffect(() => {
    history.replace("/cursos_ead");
  }, [history]);

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta",
      category: "marcar_consulta_whatsapp",
      label: "Faça um Orçamento",
      value: "Orçamento",
    });
  }

  return (
    <>
      <head>
        <title>
          Home | QualitySeg Consultoria - Engenharia de Segurança e Medicina do
          Trabalho
        </title>
        <meta
          name="description"
          content="QualitySeg Consultoria - Engenharia de Segurança e Medicinal do Trabalho"
        />
        <meta
          name="keywords"
          content="medicina ocupacional,medicina do trabalho,e-social,exames admissionais"
        />
        <meta name="author" content="QualitySeg" />
      </head>

      {/* <div className={styles.schedule}>
        <p>
          Aberto: Seg - Sex: 08:00 - 18:00 | Av. Principal, 999 - Lençóis
          Paulista -SP
        </p>
      </div> */}

      <main className={styles.hero}>
        <div className={`mainContainer ${styles.heroWrap}`}>
          <section className={styles.leftContent}>
            <h1 className="title" data-aos="fade-up">
              Medicina e segurança do <strong>Trabalho</strong>
            </h1>

            <p data-aos="fade-up" data-aos-delay="200">
              Equipe preparada e qualificada para atender as necessidades da
              sua empresa e colaboradores.
            </p>

            <div
              className={styles.btnWrap}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button
                onClick={agendarConsulta}
                link="https://wa.me/5514981189197"
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com nossos Vendedores
              </Button>
              {/* <span>
                Ou nos ligue: <strong>(14) 3264-9999</strong>
              </span> */}
            </div>
          </section>

          <div
            className={styles.imgHero}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MyImage
              src="/images/hero.jpg"
              alt="Paciente Sorrindo na clínica"
              width="440"
              height="510"
            />
          </div>
        </div>
      </main>

      <section className={`${styles.about} mainContainer`}>
        {/*<div data-aos="fade-down">
          <Title color="blue" title="junior" subtitle="Conheça nossas Lojas" />
         <p><strong>Conheça nossas Lojas</strong></p>  
        </div> */}

        <div className={styles.aboutContent}>
          <div className={styles.imgAbout} data-aos="fade-up">
            <MyImage
              src="/images/fachada.jpg"
              alt="Clientes sendo atendido"
              width="540"
              height="500"
              left
            />
          </div>

          <div className={styles.aboutRightContent} data-aos="fade-up">
            <h3>
              <strong2>Atuamos desde o ano de 2008,</strong2>{" "}
              <strong>trabalhando e desenvolvendo política sustentável em gestão ocupacional.</strong>
            </h3>
            <p></p>
            <Button link="/empresa" target="_self">
              Ver Mais
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
