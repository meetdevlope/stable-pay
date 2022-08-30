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