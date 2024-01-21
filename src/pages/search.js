import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import {format} from "date-fns"
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";


function Search({searchResults}) {

    const router = useRouter();

    // Data pulled in from header
    const {location, startDate, endDate, guests} = router.query;

    const formatteStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formatteStartDate} - ${formattedEndDate}`


  return (
    <div className="">
        <Header
        placeholder={`${location} | ${range} | ${guests} guests`} />

        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">300+ Stays - {range} - for {guests}  Guests</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms and beds</p>
                    <p className="button">More Filters</p>
                </div>
                <div className="flex flex-col">

                    {searchResults?.map(items => (
                        <InfoCard
                        key={items.img}
                        img={items.img}
                        location={items.location}
                        title={items.title}
                        description={items.description}
                        star={items.star}
                        price={items.price}
                        total={items.total}
                        />

                    ))}

                </div>

            </section>

            <section className="hidden xl:inline-flex xl:min-w-[600px]">
                <MapBox searchResults={searchResults}/>
            </section>

        </main>
        <Footer/>
        
    </div>
  )
}

export default Search


// Server side rendering

export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json())
    return{
        props:{
            searchResults: searchResults
        }
    }
}


