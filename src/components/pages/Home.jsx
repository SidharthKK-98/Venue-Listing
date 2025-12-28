import { useEffect, useState } from "react"
import VenueCard from "../VenueCard"
import axios from 'axios'
import { sortByDistance } from "../../utils/sortByDistance"
import Pagination from "../Pagination"

function Home() {

    const [venueData,setVenueData]= useState([])
    const [activePage,setActivePage]=useState(1)

    const fromHome = true 


    const fetchVenue=async()=>{
        try{
            
            const response = await axios.get("https://phtest.demosoftfruit.com/venue-api/") 
            setVenueData(response.data)

        }
        catch(err){
            console.log(err);
            
        }

    }

    useEffect(()=>{
        fetchVenue()
    }
    ,[])

   const sortedData = sortByDistance(venueData)

   const PAGE_SIZE = 6

   let start = (activePage-1)*PAGE_SIZE
   let end = start + PAGE_SIZE

   
   

  return (
    <div className="min-h-screen flex flex-col">
        
         <div className="flex justify-evenly items-center ">
                <div className=" m-4  grid grid-cols-1 lg:grid-cols-3  ">
                    {
                        sortedData?.slice(start,end).map((venue)=>(
                            < VenueCard  key={venue.id} venue={venue} fromHome={fromHome} />
                        ))
                    }



                </div>

        </div>

       
                <div className="flex justify-center py-4">
                    <Pagination sortedData={sortedData} activePage={activePage} setActivePage={setActivePage} />
                </div>
        

       

    </div>
   
  )
}

export default Home