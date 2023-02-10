import localFont from "@next/font/local";
import "@/styles/globals.css";

const surt = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeue.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

console.log(surt.className);

export default function App({ Component, pageProps }) {
  return (
    <main className={surt.className}>
      <Component {...pageProps} />
    </main>
  );
}
