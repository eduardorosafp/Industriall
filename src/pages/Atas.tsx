import Head from 'next/head'
import {Header} from '../components/Header' 
import styles from '../../styles/atas.module.scss'
import {Input, TextArea} from '../components/ui/Input'
import  api from '../services/api'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'



export default function Atas() {

   
    const [reunião, setReuniao] = useState([]);


    useEffect(()=> {
        async function loadReuniao(){
            const response = await api.get("https://desafio-iall.azurewebsites.net/api/swagger/v1/swagger.json/api/TiposReuniao")

         //   console.log(response.data.results);
         setReuniao(response.data.results)
      
        }

        
    }, [])











//    async function loadReuniao(){
//     const response = await api.get('/api/TiposReuniao')

//     console.log(response.data);
//    }
   
   
  
   
   
   
   
   
   
    // const [reunião, setReuniao] = useState([]);

    // useEffect(()=>{
    //     async function loadReuniao(){
    //         const response = await api.get("/api/TiposReuniao/{id}", {
    //             params:{
    //                 integer: 13
    //             }
    //         });
    //     }

    // }, [])
    
   
    
    return (


        

        <>

        
            <Head>
                <title>Cadastro de atas</title>
            </Head>
            <Header/>
            <div className= {styles.divtitulo}>
                <h1>Nova ata de reunião</h1>
                
                <h2>Os campos obrigatórios estão marcados com um asterisco (*)</h2>
            </div>
               
                <body className={styles.body}> 
                <h1 className={styles.h1}><br/>Identificação</h1>
                <form className= {styles.form1}>
                    <Input
                    placeholder="Titulo*"
                    />
                    <Input
                    placeholder="Local *"
                    />
                </form>

                <div >
                    
                        <legend className={styles.legend}>
                            Data e hora de inicio
                            <div >
                                <label >
                                <input className={styles.input} type="date" id="txtData" name="data" />
                                <input className={styles.input2} type="time" id="txtTime" name="time" />
                                </label>
                                
                            </div>
                        </legend>

                        <form className={styles.form}>

                            <select>
{/*                                 
                                {reunião.map((reunião) => {
                                    return(
                                       <option>{reunião}</option>
                                    )

                                })} */}
                                <option>
                                    Resumida
                                </option>
                                <option>
                                    Daily Scrum
                                </option>
                                <option>
                                    Sprint Retrospective
                                </option>
                                <option>
                                    Acompanhamento de OKRs(Objectives and Key Result)
                                </option>

                                
                            </select>

                            <div className= {styles.titulo}>
                                <h1>
                                    Conteudo da reunião
                                </h1>
                            </div>

                            <TextArea>
                               
                            </TextArea>


                        </form>
                        
                        <Link href= "/">
                        <button className={styles.buttoncan} type='submit'>
                           <a>CANCELAR</a> 
                        </button>
                        </Link>

                        <button className={styles.buttonsave} type='submit'> SALVAR ATA </button>
                   
                </div>
                </body>

                
               
        </>



    )

}

