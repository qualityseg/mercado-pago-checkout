import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Clinica() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Sobre a Empresa | Eletro Santa Clara</title>
        <meta
          name="description"
          content="Eletro Santa Clara"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador"
        />
        <meta name="author" content="Eletro Santa Clara" />
         
        <script async src="//static.zotabox.com/b/7/b7502fb6f5f765b9614401000a1c1159/widgets.js"></script>

      </Head>

      <HeaderPage subtitle="Faça um Orçamento conosco"  />

      <main className={`${styles.clinic} mainContainer`}>
        {/* <div data-aos="fade-up">
          <MyImage
            src="/images/loja1.jpg"
            alt="Frente da Loja"
            width="430"
            height="508"
            left
          />
        </div>

       <div className={styles.clinicDescription} data-aos="fade-up">
          <p>
          A Eletro Santa Clara foi fundada em Lençóis Paulista, no interior do estado de São Paulo, há mais de três décadas, com o principal objetivo de servir o cidadão lençoense com a mais completa loja de materiais elétricos da cidade. Essa visão inicial foi transformada com o tempo e o crescimento da loja, principalmente com a abertura de sua primeira filial, na Rodovia Osny Mateus. Pois agora somado aos preços baixos e atendimento de excelência, a facilidade de acesso foi mais um atrativo para clientes de toda a região.
          </p>
          <p>
          Hoje a empresa Eletro Santa Clara, líder no segmento de materiais elétricos na cidade e região, está em processo de melhorias estruturais e organizacionais, visando atender seus clientes, de atacado e varejo, melhor a cada dia. A missão da empresa sempre foi e sempre será levar produtos de qualidade com preço justo e oferecer um atendimento ágil, dinâmico, colaborativo e alegre a todos os seus estimados clientes.
          </p>
          <p>
          Nossa empresa trabalha com materiais de baixa, média e alta tensão. Oferecemos a maior agilidade nos orçamentos e nas entregas para toda a região. Somos distribuidores de produtos de qualidade através das marcas líderes no mercado de materiais elétricos.
          </p>
          <p>
          Caso tenha alguma duvida, sugestão ou simplesmente queira nos conhecer não hesite em nos contactar. Estamos a disposição com uma equipe treinada para melhor atende-lo.  
          </p>
        </div> */}
      </main>

      <section className={`${styles.photos} mainContainer`}>
        <Title subtitle="Algumas marcas" title="Fornecedoras" />

        <div className={styles.photosSlider}>
          <ul>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja2.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja3.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja4.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja5.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja6.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja7.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja8.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja9.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja10.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja11.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja12.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>
            <li data-aos="zoom-in-up">
              <Image
                src="/images/loja13.jpg"
                alt="Foto Loja"
                width="200"
                height="130"
                objectFit="cover"
              />
            </li>

          </ul>

          {/* <div className={styles.btns}>
            <button className={styles.active}></button>
            <button></button>
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
}
