import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Indie_Flower } from "@next/font/google";

const indie = Indie_Flower({
  subsets: ["latin"],
  variable: "--font-indie",
  weight: "400",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${indie.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
