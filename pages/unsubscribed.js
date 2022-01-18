import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";


export default function HomePage({ postFrontMatter }) {
  return (
    <>
      <Head>
        <title>Schachte&apos;s Playground</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ryan Schachte" />
        <meta
          name="description"
          content="A blog covering engineering, finance, algorithms, computer science and technology. Ryan Schachte is an avid learner, teacher and engineer. Articles covering interview prep, leetcode, programming and design."
        />
      </Head>
      <div className="wrapper">
        <div className="content-wrapper">
          <Navigation />
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4rem", fontSize: "2rem"}}>
            You've been unsubscribed from my newsletter, I'm sad to see you go!
          </div>
          <Footer>
            Site Built &amp; Maintained By: Ryan Schachte // Logo Design By:
            Alyssa Sopanarat
          </Footer>
        </div>
      </div>
    </>
  );
}
