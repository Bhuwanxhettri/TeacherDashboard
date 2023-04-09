import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import Head from "next/head";
import { getToken, getLoginState } from "@/helper/token";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const isLogin = getLoginState();
    if (!isLogin) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, []);
  return (
    <>
      <Head>
        <title>School Sphare</title>
        <meta name="description" content="This is my page description" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Book-icon-bible.png/800px-Book-icon-bible.png"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
