
const PAGE_SIZE=6
function Pagination({sortedData,setActivePage,activePage}) {

    const pages = Math.ceil((sortedData?.length??0)/PAGE_SIZE)
    const currentPage = activePage
    const pageSelect=(key)=>{

        setActivePage(key)
    }

  return (
    <div>
        {
            [...Array(pages).keys()].map((key)=>(
                <button key={key} onClick={()=>pageSelect(key+1)} className={`${currentPage==key+1?"bg-gray-500 text-white shadow-md" : "bg-white text-black"}border m-2 text-black p-2 rounded`}>{key+1}</button>
            ))
        }
    </div>
  )
}

export default Pagination