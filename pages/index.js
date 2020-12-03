import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import years from "./api/years";
import months from "./api/months";

export default function Home() {
  const [kin, setKin] = useState();

  const handleDateChange = (event) => {
    event.preventDefault();
    const date = event.target.value;
    const year = Number(date.substring(0, 4));
    const month = Number(date.substring(5, 7));
    const day = Number(date.substring(8, 10));

    let yearValue;

    for (const key in years) {
      const yearNum = year;
      if (years[key].includes(yearNum)) {
        yearValue = Number(key);
      }
    }

    const sumValues = yearValue + months[month] + day;
    const kin = sumValues > 365 ? sumValues - 260 : sumValues;

    setKin(kin);
  };

  useEffect(() => {
    console.log("get image => ", kin);
  }, [kin]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rotalunar</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem Vindo a Rotalunar!</h1>

        <p className={styles.description}>
          Essa é a calculadora ... voce pode ...
        </p>

        <div className={styles.grid}>
          <input type="date" onChange={handleDateChange}></input>
        </div>

        {kin && (
          <div className={styles.grid}>
            Kin:&nbsp;<span>{kin}</span>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="">
          Powered by NeoSPX - (Or)
        </a>
      </footer>
    </div>
  );
}
