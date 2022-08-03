import { defineStore } from "pinia";

const initialSelectedCoin={

};

export const useSelectedCoinStore=defineStore("SelectedCoinStore",{
    state:()=>({
        selectedCoin:localStorage.getItem("selectedCoin") || initialSelectedCoin
    }),
    getters:{
        getSelectedCoin(){
            return this.selectedCoin;
        }
    },
    actions:{
        setSelectedCoin(selectedCoin){
            this.selectedCoin=selectedCoin;
          
        }
    }
})
export const useUSDCoinStore=defineStore("USDCoinStore",{
    state:()=>({
        USDCoins:localStorage.getItem("USDCoins") || initialSelectedCoin
    }),
    getters:{
        getUSDCoins(){
            return this.USDCoins;
        }
    },
    actions:{
        setUSDCoins(USDCoins){
            this.USDCoins=USDCoins;
        }
    }
})
export const useEURCoinStore=defineStore("EURCoinStore",{
    state:()=>({
        EURCoins:localStorage.getItem("EURCoins") || initialSelectedCoin
    }),
    getters:{
        getEURCoins(){
            return this.EURCoins;
        }
    },
    actions:{
        setEURCoins(EURCoins){
            this.EURCoins=EURCoins;
        }
    }
})