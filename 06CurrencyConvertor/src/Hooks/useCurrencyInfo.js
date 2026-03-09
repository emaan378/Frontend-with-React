import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
const [data, setdata] = useState({}) 
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/c43ebf0dbadcc43eb5aade7f/latest/${currency}`)
            .then((res)=>res.json())
            .then((res)=>setdata(res.conversion_rates[currency]))
        
    },[currency])
    return data;
}
export default useCurrencyInfo;