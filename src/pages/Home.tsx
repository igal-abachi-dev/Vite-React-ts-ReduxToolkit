import React,{ useEffect } from 'react';
import styles from "@/App.module.scss";
import logo from "@/logo.svg";
import {Counter} from "@/components/counter/Counter";
import {Helmet} from 'react-helmet-async';


export function HomePage() {

  return (
      <header className={styles.App_header}>
            <Helmet>
                <title>home</title>
            </Helmet>
        <img src={logo} className={styles.App_logo} alt="logo"/>
        <p>Hello Vite + React!</p>

        <Counter/>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
              className={styles.App_link}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
              className={styles.App_link}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
  );
}

export default HomePage;
