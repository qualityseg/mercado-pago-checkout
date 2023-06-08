import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";


export const Footer = ({ children, link = "/" }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`mainContainer ${styles.footerWrap}`}>
          <Link href="/" legacyBehavior> 
            <a className={styles.logo}>
              <Image
                src="/icons/logo_transparente.png"
                alt="Logo"
                width="353"
                height="86"
              />
            </a>
          </Link>
        
          <div>
            <h3>QualitySeg Lençóis Paulista - Matriz</h3>
            <ul>
              <li>(14) 3264-3737</li>
              <li>vendas1@qualitysegconsultoria.com.br</li>
              <li>Rua XV de Novembro, 127</li>
              <li>Lençóis Paulista - SP</li>
              <li className={styles.social}>
                <Link href="https://www.instagram.com/qualitysegconsultoria/" legacyBehavior>
                  <a target="_blank">
                    <Image
                      src="/icons/instaFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/QualitySegConsultoriaa" legacyBehavior>
                  <a target="_blank">
                    <Image
                      src="/icons/faceFooter.svg"
                      alt="Logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
                {/* <Link href="/">
                  <a>
                    <Image
                      src="/icons/youtubeFooter.svg"
                      alt="Logo"
                      width="32"
                      height="27"
                    />
                  </a>
                </Link> */}
              </li>
            </ul>
          </div>

          <div>
            <h3>QualitySeg Ribas do Rio Pardo</h3>
            <p> Rua Pastor Natalino Paulino, nº. 260, Vila Santa Cecília</p>
            <p>Fone 14 3269.1717 - 14 98118.8248</p>
          </div>

          <div>
            <h3>Atendimento</h3>
            <p>Seg - Sex: 07:00 - 18:00</p>
            <p>Sáb: até 12h - Dom: Fechado</p>
            <p><Link href="" legacyBehavior>
                  <a target="_blank">
                  Política de Privacidade  
                  </a>
                </Link> </p>
          </div>
        </div>
      </footer>

      <p className={`${styles.copy}`}>
        2023 © QualitySeg Consultoria - Todos os direitos reservados.  <Link href="https://agenciasetfocus.vercel.app/" legacyBehavior>
                  <a target="_blank">
                  Desenvolvido por 
                  </a>
                </Link> 
      </p>
    </>
  );
};
