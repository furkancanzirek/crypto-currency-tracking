import axios from "axios";


export const getAllCryptoDetailsUSD = async () =>{
 const response =await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h')

return response.data
}

export const getAllCryptoDetailsEUR = async () =>{
    const response =await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h')
   
   return response.data
   }