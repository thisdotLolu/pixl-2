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

      <div className='how_it_works_container_ll'>
      <h2>
            Pixl.  &nbsp; How it works
        </h2>
        <div className='how_it_works_inner_ll'>
          
          <div className='how_it_works_section_1'>
          <div className='box_container_ll'>
            <div className='box_inner_ll'>
              <h3>Pixl. partners</h3>
              <p>Pixl partners with retailers that want us to direct their web3 users to their online stores</p>
              <li>
                Web3 users are online retailers&rsquo;   ideal demographic: high-spending internet power users
              </li>
            </div>
          </div>
          
          <div className='box_container_ll'>
            <div className='box_inner_ll'>
              <h3>Share</h3>
              <p>Pixl takes a nominal fee and distributes the remaining commission to the users in form of web3 rewards</p>
            </div>
          </div>
          </div>

          <div className='how_it_works_middle_section'>
          <img
          className='hiw_image_ll'
          src='/howitWorks.png'
          alt='bg'
          />
         
          </div>
          
          <div className='how_it_works_section_2'>
          <div className='box_container_ll'>
            <div className='box_inner_ll'>
              <h3>Redeem</h3>
              <p>Users redeem web3 rewards for their favourite NFTS, Solana or USDC</p>
            </div>
          </div>
          
          <div className='box_container_ll'>
            <div className='box_inner_ll'>
              <h3>Commission</h3>
              <p>Affliate retailers pay Pixl a comission for sales generated from our users</p>
            </div>
          </div>


          </div>

          
        </div>
      </div>

      <section id="benefits" className="">
        
        <Benefits data={benefitOne} />
        <EveryoneWins />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>
      
      {/* <Video /> */}
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
