
export const sortByDistance=(arr)=>{

    if(arr.length <= 1) return arr

    const lastElem =arr[arr.length-1]
    const dist = lastElem.kilometres
    const left = []
    const right = []

    for(let i=0 ; i<arr.length-1 ; i++ ){

        if(arr[i].kilometres<dist){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }

    }

    return[
        ...sortByDistance(left),lastElem,...sortByDistance(right)
    ]

}