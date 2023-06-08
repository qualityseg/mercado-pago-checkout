import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Controle de Frota</title>
        <meta
          name="description"
          content="Central de Controle BI"
        />
        <meta
          name="keywords"
          content=" "
        />
        <meta name="author" content=" Quality Seg" />
      </Head>

      <div>
        <HeaderPage subtitle="Analytics Quality Seg" title=" " />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
        <Link href="https://app.powerbi.com/view?r=eyJrIjoiYjg5OTRlY2ItMjI3Yy00MDQ5LWIzZjYtN2EyZjAzOTVjZTEzIiwidCI6IjBhZDFmNWJiLWU3NGItNDdiYi04YmU5LTBkNGUxYzNlZjljZiJ9" legacyBehavior>
        <a target="_blank">
          <MyImage
            src="/images/controlefrota.jpg"
            alt="Controle de uso da frota"
            width="350"
            height="279"
            left
          />
            </a>
          </Link>
          
          <h3>ORDEM DE SERVIÇO - BAIXAR EM EXCEL </h3>

          <h2>ORDEM DE SERVIÇO - CONSULTA BI</h2>
          <div className={styles.description}>
            <p>
            
                      
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_2.png"
            alt="Fios e Cabos"
            width="350"
            height="279"
          />
          <h3>CHECKLIST PARA ABERTURA DE CAT (S2210)</h3>
          <div className={styles.description}>
            <p>
            
            </p>
            <p>
             
            </p>
          </div>
        </div>


        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_3.png"
            alt="Toda linha de conduletes e acessórios."
            width="350"
            height="279"
            left
          />
          <h3>Relatório de envio de Ordem de Serviço</h3>
          <div className={styles.description}>
            <p>
            
            </p>
          </div>
        </div>




        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_4.png"
            alt="disjuntores"
            width="350"
            height="279"
          />
          <h3>Dados para elaboração dos programas PRG - PCMSO</h3>
          <div className={styles.description}>
            <p>
            ...
            </p>
            <p>
              
            </p>
          </div>
        </div>        

        

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_5.png"
            alt="ELETROCALHAS E PERFILADOS"
            width="350"
            height="279"
            left
          />
          <h3>PPP Perfil Profissiográfico Previdenciário</h3>
          <div className={styles.description}>
            <p>
            
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_12.png"
            alt="MÉDIA E ALTA TENSÃO"
            width="350"
            height="279"
            left
          />
          <h3>Formulário para Envio do E-Social</h3>
          <div className={styles.description}>
            <p>
            
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_6.png"
            alt="Diversos modelos de interruptores e tomadas."
            width="350"
            height="279"
            left
          />
          <h3>Pedido de Compra</h3>
          <div className={styles.description}>
            <p>
            
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_7.png"
            alt="Toda linha de lâmpadas e acessórios em LED e demais."
            width="350"
            height="279"
            left
          />
          <h3> Formulário de ... </h3>
          <div className={styles.description}>
            <p>
            ...
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_8.png"
            alt="Toda linha de luminárias e plafons."
            width="350"
            height="279"
            left
          />
          <h3>Formulário de ...</h3>
          <div className={styles.description}>
            <p>
            ...
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_9.png"
            alt="Grande variedade de lustres e pendentes."
            width="350"
            height="279"
            left
          />
          <h3>Formulário de ...</h3>
          <div className={styles.description}>
            <p>
            ...
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/prod_10.png"
            alt="Painéis de montagem e acessórios."
            width="350"
            height="279"
            left
          />
          <h3>Formulário de ...</h3>
          <div className={styles.description}>
            <p>
            ...
            </p>
          </div>
        </div>

        {/* <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/"
            alt="Fios de PDO"
            width="350"
            height="279"
            left
          />
          <h3>Fios de PDO</h3>
          <div className={styles.description}>
            <p>São inseridos na derme com o intuito de estimular o colágeno.</p>
          </div>
        </div> */}

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/prod_11.png" alt="Toda linha de plugs e tomadas industriais." width="350" height="279" left />
          <h3>Formulário de ...</h3>
          <div className={styles.description}>
            <p>
            ...
            </p>
          </div>
        </div>
      </main>

      
      <Footer />
    </>
  );
}
