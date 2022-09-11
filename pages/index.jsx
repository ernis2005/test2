import Head from "next/head";
import Image from "next/image";
import s from "../styles/Home.module.css";
import axios from "axios";
import React from 'react'
import Tabss from "../content/Tabs";


export default function Home({ data, children }) {
  if(!data){
    return <p>Загрузка ...</p>
   }
  if (data.id > 15 ) {
    data.break
  }

  return (
    <div className={s.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={s.h1}>Таблица</h1>
        <header className={s.header}>
          <div className={s.block_1}>
            <div className={s.content}>
              {data.map((res) => {
                return (<><p className={s.name}>{res.name}</p> <hr/></>) ;
              })}
            </div>
          </div>
          <div>
            <div className={s.content}>
              {data.map((res) => {
                return (<><p className={s.name}>{res.languages[0].name}</p> <hr /></>);
              })}
            </div>
          </div>
          <div className="div">
       <Tabss data={data}/>
          </div>
        </header>
      </div>
    
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://restcountries.com/v2/all?populate=*");

  let data = res.data;

  return {
    props: {
      data,
    },
    revalidate: 200,
  };
}
