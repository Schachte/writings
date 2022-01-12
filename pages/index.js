import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AllPosts from "@/components/AllPosts";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <Navigation />
        <Hero />
        <AllPosts />
        <Footer>Site Built &amp; Maintained By: Ryan Schachte // Logo Design By: Alyssa Sopanarat</Footer>
      </div>
    </div>
  );
}
