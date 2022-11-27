import Head from 'next/head'
import logoImg from '../../public/logo.svg'
// import Image from 'next/image'
import styles from '../../styles/home.module.scss'

import Link from 'next/link'
import {useContext, useEffect, useState} from 'react'
import {Header} from '../components/Header' 

export default function Home() {
 
 return (
    <>
      <Head>
        <title>Atas de reunião!</title>
      </Head>

      <Header/>
      
      <div className={styles.containerCenter}>
       <h1>Atas de reunião</h1>
       <h2> Estas são as atas das ultimas reuniões</h2>
        
        <Link href= "/Atas">
        <button type = "submit" className={styles.button}> 
        <a className={styles.buttontext}> + NOVA ATA</a>
        </button>

        


        </Link>
        <body>
        <div className={styles.div1}>
          <h1> Acompanhamento de OKRs (Objectives and key Results)</h1>

          <button className={styles.buttondel1}>delete</button>
        </div>

        <div className={styles.div2}>
          <h1>
            Dayly Scrum
          </h1>
        </div>

        <div className={styles.div3}>
          <h1>
            Resumida
          </h1>
        </div>

        <div className={styles.div4}>
          <h1>
            Sprint Retrospective
          </h1>
        </div>
        </body>
      </div>
      


      

      
    </>
  )
}
