import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import heroImg from "../../public/assets/hero.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma facil</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo tarefas+"
            src={heroImg}
            priority
          />
          <h1 className={styles.title}>
            Sistema feito para você organizar seus <br/> 
            estudos e tarefas
          </h1>
        </div>
      </main>
    </div>
  );
}
