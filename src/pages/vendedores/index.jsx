import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Vendedores | Eletro Santa Clara</title>
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

      <div>
        <HeaderPage subtitle="Contatos" />
      </div>
      <main className={`${styles.treatments} mainContainer`}>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="Felipe"
            width="350"
            height="279"
            left
          />
          <h3>Vendas - Felipe</h3>
          <div className={styles.description}>
            <p>           
            vendas@eletrosantaclara.com.br 
            </p>
         </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/dione.png"
            alt="Compras"
            width="350"
            height="279"
            left
          />
          <h3>Compras - Dione</h3>
          <div className={styles.description}>
            <p>
            compras@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato2.png"
            alt="Financeiro"
            width="350"
            height="279"
            left
          />
          <h3>Financeiro - Silvone</h3>
          <div className={styles.description}>
            <p>
            contasareceber@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="Vendas - Gabriel"
            width="350"
            height="279"
          />
          <h3>Vendas - Gabriel</h3>
          <div className={styles.description}>
            <p>
            vendas01@eletrosantaclara.com.br  
            </p>
           </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="vendas03@eletrosantaclara.com.br"
            width="350"
            height="279"
            left
          />
          <h3>Vendas - Mario </h3>
          <div className={styles.description}>
            <p>
            vendas03@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato2.png"
            alt="Contas a Receber"
            width="350"
            height="279"
            left
          />
          <h3>Financeiro - João</h3>
          <div className={styles.description}>
            <p>
            contasareceber2@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="vendas04@eletrosantaclara.com.br"
            width="350"
            height="279"
          />
          <h3>Vendas - Guilherme</h3>
          <div className={styles.description}>
            <p>
            vendas04@eletrosantaclara.com.br  
            </p>
            </div>
        </div>        

        

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt=" vendas05@eletrosantaclara.com.br"
            width="350"
            height="279"
            left
          />
          <h3>Vendas - José Evandro</h3>
          <div className={styles.description}>
            <p>
            vendas05@eletrosantaclara.com.br
            </p>
          </div>
        </div>
      <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/lucas.png"
            alt="Botulinica"
            width="350"
            height="279"
            left
          />
          <h3>Financeiro - Lucas</h3>
          <div className={styles.description}>
            <p>
            contasapagar@eletrosantaclara.com.br
            </p>
          </div>
        </div>
        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="Vendas"
            width="350"
            height="279"
            left
          />
          <h3>Vendas - Gian</h3>
          <div className={styles.description}>
            <p>
            vendas08@eletrosantaclara.com.br
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="Vendas"
            width="350"
            height="279"
            left
          />
          <h3>Vendas - Leonardo</h3>
          <div className={styles.description}>
            <p>
            vendas09@eletrosantaclara.com.br
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="Financeiro"
            width="350"
            height="279"
            left
          />
          <h3>Financeiro - Flávia</h3>
          <div className={styles.description}>
            <p>
            cobranca3@eletrosantaclara.com.br
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage
            src="/images/contato1.png"
            alt="Vendas"
            width="350"
            height="279"
            left
          />
          <h3>Vendas - Alexandre</h3>
          <div className={styles.description}>
            <p>
            vendas10@eletrosantaclara.com.br
            </p>
          </div>
        </div>

        <div className={styles.treatmentsItem} data-aos="fade-up">
          <MyImage src="/images/contato1.png" alt="Vendas" width="350" height="279" left />
          <h3>Vendas - João </h3>
          <div className={styles.description}>
            <p>
            vendas06@eletrosantaclara.com.br
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
          <MyImage src="/images/contato1.png" alt="Vendas" width="350" height="279" left />
          <h3>Vendas - Juno</h3>
          <div className={styles.description}>
            <p>
            vendas07@eletrosantaclara.com.br
            </p>
          </div>
        </div>

      </main>

      {/* <section className={styles.images}>
        <Title title="Fotos" subtitle="Resultado dos Tratamentos" />

        <ul className={`${styles.imagesContainer} mainContainer`}>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado1.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado2.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado3.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado4.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado5.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/resultado6.jpeg"
              alt="Resultado dos Tratamentos"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
        </ul>
      </section> */}

      <Footer />
    </>
  );
}
