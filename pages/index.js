import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile Card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.top}>
      <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stop-color="#0989B4" stop-opacity="0" offset="0%"/><stop stop-color="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="rotate(-135 489 489)" cx="489" cy="489" rx="489" ry="488" fill-rule="evenodd" opacity=".5"/></svg>
        </div>  

        <div  className={styles.card}>
        <img src='/bg-pattern-card.svg' alt='next' />
        </div>
        <div className={styles.botton}>
      <svg width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stop-color="#0989B4" stop-opacity="0" offset="0%"/><stop stop-color="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="scale(1 -1) rotate(45 1669.55 0)" cx="489" cy="489" rx="489" ry="488" fill-rule="evenodd" opacity=".25"/></svg>

        </div>
      </main>

      
    </div>
  )
}
