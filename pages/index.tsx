import Head from "next/head";

import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import EveryoneWins from "../components/everyoneWins";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import NavbarMobile from "../components/navbarMobile";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import Testimonials from "../components/testimonials";
import Video from "../components/video";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>pixl. | Earn web3 Rewards at your favorite web2 retailers</title>
        <meta
          name="description"
          content="Competitive web3 rewards for shopping at retailers across the web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <section id="benefits" className="">
        <SectionTitle
          pretitle="pixl. Benefits"
          title="Benefits for all!">
          Pixl. unlocks competitive web3 rewards for users shopping at their favorite retailers across the web.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <EveryoneWins />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle
          pretitle="How it works"
          title="Earning is easy!">
          Get pixl. for free and add pixl. to your favorite browser in seconds. Shop your favorite retails and earn points redeemable for rewards.
        </SectionTitle>
      </section>
      
      <Video />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="We're loved">
        Kind words from our awesome customers and retailers. 
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Our FAQ&rsquo;s is updated regularly based on customer feedback.<br/>Can&rsquo;t find what you need here? Contact us using the chat icon.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
