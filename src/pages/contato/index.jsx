/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeaderPage } from "../../components/HeaderPage";
import { Footer } from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { sendContactMail } from "../../lib/sendMail.js";
import styles from "./styles.module.scss";

export default function Contato() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage(true);
      setEmail("");
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage(false);
      setSubmitted(true);
    } catch (error) {
      alert("Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contato | Eletro Santa Clara</title>
        <meta
          name="description"
          content="Eletro Santa Clara"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador
          "
        />
        <meta name="author" content="Eletro Santa Clara" />
        <script async src="//static.zotabox.com/b/7/b7502fb6f5f765b9614401000a1c1159/widgets.js"></script>
      </Head>

      <HeaderPage subtitle="Entre em contato conosco" title="Nosso Contato." />

      <main className={`${styles.contact}`}>
        <section className="mainContainer">
          <div className={styles.contactLeft}>
            <ul>
              <li>
                <p>
                  <img src="/icons/localizacaoIcon.svg" alt="Localização" />
                  Av. Brasil, 583 - Centro
                </p>
                <p>Lençóis Paulista - SP</p>
              </li>
              <li></li>
              <li className={styles.separador}>
                <p>
                  <img src="/icons/emailIcon.svg" alt="email" />
                  vendas@eletrosantaclara.com.br
                </p>
              </li>
              <li>
                <p>
                  <img src="/icons/telefoneIcon.svg" alt="Telefone" />
                  +55 (14) 3269-1057
                </p>
                {/* <p>+55 (14) 99123-4567</p> */}
              </li>
              <li className={styles.separador}>
                <p>
                  <img src="/icons/horarioIcon.svg" alt="Horários" />
                  08-18h de seg à sex
                </p>
                <p>08-12h sáb</p>
              </li>
              <li className={styles.social}>
                <Link href="https://www.instagram.com/eletrosantaclara "legacyBehavior>
                  <a target="_blank">
                    <img src="/icons/instaContato.svg" alt="Instagram" />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/eletrosantaclara"legacyBehavior>
                  <a target="_blank">
                    <img src="/icons/faceContato.svg" alt="Facebook" />
                  </a>
                </Link>
                {/* <Link href="/">
                  <a>
                    <img src="/icons/youtubeContato.svg" alt="Youtube" />
                  </a>
                </Link> */}
              </li>
            </ul>
          </div>



          

             <form className={styles.contactRight} onSubmit={handleSubmit}>
            {!!submitted && (
              <span className={styles.successMessage}>
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </span>
            )}

            {!!errorMessage && (
              <span className={styles.errorMessage}>
                Email Inválido. Necessário preencher um email Válido!
              </span>
            )}

            <div className={styles.inputWrap}>
                <div className={styles.input}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.input}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                rows="6"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {!!loading ? (
              <button className={styles.button} disabled>
                ENVIANDO...
              </button>
            ) : (
              <button className={styles.button} type="submit">
                ENVIAR MENSAGEM
              </button>
            )}
          </form> 
        </section>
      </main>

      <section className={`${styles.loc} mainContainer`} data-aos="fade-up">
        <div>
          <h2>Localização</h2>
          <p>
            Prédio azul com janela e porta espelhadas. Local climatizado e
            aconchegante, fácil de chegar, ao lado do 1° Tabelionato de Notas e
            Protestos de Lençóis Paulista.
          </p>
        </div>
        <Image
          src="/images/localizacao.jpg"
          alt="Localização"
          width="750"
          height="350"
          objectFit="cover"
        />
      </section>

      <Footer />
    </>
  );
}
