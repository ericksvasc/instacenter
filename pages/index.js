import styles from "../styles/Instapage.module.css";
import Image from 'next/image';
import Head from 'next/head';
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.Container}>
        <div className={styles.Foto}>
          <Image className={styles.Logo} src='/inves.jpeg' width='100' height='100' />
        </div>
        <div className={styles.Name}>
          <p>@investcenterbrasil</p>
        </div>
        <div className={styles.Bio}>
          <p>Tudo sobre Investimentos 💵💰📊</p>
        </div>
        <div className="links">
          <Button link='https://bit.ly/3qVWuHz' linkLogo='/whatsapp.svg' text='WhatsApp'/>
          <Button mg='0rem' link='https://bit.ly/3s38sjM' linkLogo='/promocao.svg' text='Venda na internet' />
        </div>
        <div className={styles.Cc}>
          <p>Criado por <span> @seuinstamilionario </span></p>
        </div>
      </div>
    </>
    
  )
}
