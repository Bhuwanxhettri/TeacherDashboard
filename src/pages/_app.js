import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import Head from "next/head";
import SignIn from "./SignIn";
import { getToken } from "@/helper/token";
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  if (!isLoggedIn) {
    // Redirect to the dashboard if the user is logged in
    return (
      <>
        <Provider store={store}>
          <Head>
            <title>School Sphare</title>
            <meta name="description" content="This is my page description" />
            <link
              rel="icon"
              href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Book-icon-bible.png/800px-Book-icon-bible.png"
            />
          </Head>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
  if (!isLoggedIn) {
    return (
      <>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </>
    );
  }
}
