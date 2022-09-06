import Head from 'next/head';
import Script from 'next/script';
import React from 'react'
import ComparisonCardSection from '../components/ComparisonCardSection';
import Hero from '../components/Hero'
import LastSection from '../components/LastSection';
import LongTextSection from '../components/LongTextSection';
import NoChargesSection from '../components/NoChargesSection';
import VideoCard from '../components/VideoCard';


const index = () => {
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Head>
        <title>Stable Pay</title>
        <meta name='We are building a future of globla remittance' />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-027CTY2L8J"></Script>
      <Script id='google-analytics' >{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-027CTY2L8J');`}
      </Script>
      <Hero />
      {/* <VideoCard /> */}
      <ComparisonCardSection />
      <NoChargesSection />
      <LongTextSection />
      <LastSection />
    </div>
  )
}

export default index