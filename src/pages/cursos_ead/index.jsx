import { useEffect } from "react";
import Head from "next/head";

import Image from "next/image";
import Link from 'next/link';
import { Header } from "../../components/Header";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";
import CursosEad from "../../components/SearchBar";

export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      
      <Header/>
      <section className={styles.images} >
        <Title title="QualitySEG Cursos EAD" subtitle="Qualidade é Nosso Destaque" />

        
        
      </section>
    
      <CursosEad/>

      

      <Footer />
    </>
  );
}
