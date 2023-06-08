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
        <title>Política de Privacdade | Eletro Santa Clara</title>
        <meta
          name="description"
          content="Eletro Santa Clara"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador"
        />
        <meta name="author" content="Eletro Santa Clara" />
      </Head>

      <HeaderPage subtitle="Política de Privacidade" />

      <main className={`${styles.clinic} mainContainer`}>
       {/* <div data-aos="fade-up">
          <MyImage
            src="/images/loja1.jpg"
            alt="Política de Privacidade"
            width="430"
            height="508"
            left
            top
          />
          </div>  */}

        <div className={styles.clinicDescription} data-aos="fade-up">
          <p>
          As suas informações de navegação no nosso site (www.eletrosantaclara.com.br) e de uso são coletadas via “cookie”, inserido no seu navegador web, para podermos saber quantas vezes você retorna ao nosso endereço, por meio do Google Analytics. Dados como IP, geolocalização, tempo de visita, páginas visitadas e a fonte pela qual você chegou até a Eletro Santa Clara são os dados que coletamos de forma anônima.Um dos maiores compromissos da Eletro Santa Clara é garantir que a privacidade e os dados de nossos clientes estejam protegidos.
          </p>
          <p>
          Esses dados serão utilizados única e exclusivamente de maneira interna pela Eletro Santa Clara, para fins de melhoria no sistema, correção de erros e otimização da experiência do usuário de nosso site. Hoje a empresa Eletro Santa Clara, líder no segmento de materiais elétricos na cidade e região, está em processo de melhorias estruturais e organizacionais, visando atender seus clientes, de atacado e varejo, melhor a cada dia. A missão da empresa sempre foi e sempre será levar produtos de qualidade com preço justo e oferecer um atendimento Ágil, dinâmico, colaborativo e alegre a todos os seus estimados clientes.
          </p>
          <p>
          Este termo permite que a Eletro Santa Clara colete seus dados pessoais para fins exclusivos de aprimoramento de software. Utilizaremos seus dados de contato apenas para contatá-lo quando alguma situação nos leve a tal, seja operacional ou judicial.
          </p>
          <p>
          Seu endereço de e-mail será utilizado para e-mail marketing e comunicados de atualização somente mediante sua autorização. Jamais iremos compartilhar seus dados pessoais com qualquer outra parte, salvo sob ordem judicial.
          </p>
          <p>Não iremos, em hipótese alguma, publicar ou compartilhar conteúdos utilizando seus perfis pessoais e empresarias de redes sociais.</p>
          <p>A Eletro Santa Clara utiliza servidores de alta tecnologia, os mais seguros do mundo. Utilizamos ainda uma das principais plataformas de segurança online do mundo, a Let’s Encrypt, que realiza inspeções diárias na Eletro Santa Clara para validar continuamente a segurança do sistema. Mesmo sabendo que não é possível garantir 100% de segurança contra eventuais invasores, trabalhamos diariamente para que isso jamais ocorra.</p>
          <p>Caso você queira cancelar o recebimento de nossos e-mails marketing, favor responder para o mesmo endereço que lhe enviou, solicitando o cancelamento.</p>
          <p>Para esclarecimento de dúvidas sobre este termo, você pode nos contatar pelo telefone +55 14 3269-1057, e pelo e-mail suporte@eletrosantaclara.com.br. Atendemos de 2ª a 6ª feira das 7h às 18h. A Eletro Santa Clara está localizada na Avenida Brasil 589 – Centro – Lençóis Paulista, SP</p>



        </div>
      </main>

    {/*   <section className={`${styles.photos} mainContainer`}>
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

         
        </div>
      </section> */}

      <Footer />
    </>
  );
}
