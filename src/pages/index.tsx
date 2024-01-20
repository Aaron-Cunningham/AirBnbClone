import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import React from "react";

// @ts-ignore
export default function Home({ exploreData, cardsData }) {
  return (
      <div>
        <Header/>
        <Banner/>
        <main className="max-w-7xl mx-auto px-8 sm:px-16"> {/* configures spacing left and right */}
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">
              Explore Nearby
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: { img: React.Key | null | undefined; distance: any; location: any }) => (
              <SmallCard 
              key={item.img}
              img={item.img} 
              distance={item.distance} 
              location={item.location}/>
            ))}
            </div>
          </section>
            
          <section className="pt-6">
            <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item: { img: React.Key | null | undefined; title: any }) => (
              <MediumCard
              key={item.img}
              img={item.img}
              title={item.title}
              />
            ))}
            </div>
          </section>

          <LargeCard
              img={'https://wallpapercave.com/wp/wp6475774.jpg'}
              title="The Greatest Outdoors"
              buttonText={'Get Inspired'} description={undefined}          />
        </main>

      </div>

  );
}

export async function getStaticProps(){
  const exploreDataResponse = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await exploreDataResponse.json();

  const cardsDataResponce = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const cardsData = await cardsDataResponce.json();


  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    }
  }
}

