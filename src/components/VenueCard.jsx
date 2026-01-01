import { Heart } from 'lucide-react'
import { useFavorites } from '../context/FavoriteContext'
import { MapPin } from 'lucide-react'
import { IndianRupee } from 'lucide-react'
import { Star } from 'lucide-react'

function VenueCard({venue,fromHome}) {
    const {name,kilometres,logo,id,address,rating,sports,price}=venue
    const {toggleFavorites,isFavorite}= useFavorites()

   
    
  return (
    <div className='bg-neutral-primary-soft block  w-sm max-w-sm h-80 p-6 border bg-green-50  rounded-lg  m-2 overflow-auto no-scrollbar shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
     <div className='flex justify-between items-center'>
        <img className='rounded-full w-15 h-15 bg-cover ' src={logo} alt="logo" />
        {
            fromHome&&(
                <button className='cursor-pointer' onClick={()=>toggleFavorites(venue)}>
                        <Heart
                            className={`transition-colors duration-300 ${
                                isFavorite(id)?"fill-pink-500" : "fill-none stroke-gray-400"
                            }`}            
                        />
                </button>
            )
        }
        
        </div>  
        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{name}</h5>
        <div className='flex gap-2'>
          <MapPin className='font-semibold text-gray-500 '/>
           <p class="text-body mb-6 font-semibold text-gray-500">{address}</p>
        </div>
       
       <div className='flex justify-between m-4'>
            
            <p  className='flex items-center bg-green-200 p-1 px-3 rounded-3xl
              font-semibold  shadow-md text-gray-600'>Rating : {rating}    <Star className='w-3.5 h-3.5 fill-orange-400 ' /></p>

            <p className='bg-pink-100 p-1 px-2 rounded-2xl shadow font-semibold text-gray-500'>Distance : {kilometres} KM</p>


       </div>

        <div className='font-semibold text- flex flex-nowrap gap-3 bg-green-200 p-4 rounded-xl
         overflow-x-auto whitespace-nowrap max-w-full no-scrollbar  shadow-md text-gray-700'>{

           sports.map((item,index)=>(
             <span className='flex items-center justify-between ' key={index}>{item} :  <IndianRupee className="w-3 h-3" /> {price[item]}  </span>
           ))
        }
        </div>

    </div>
  )
}

export default VenueCard