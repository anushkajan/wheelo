import { defineStore } from 'pinia'

export const useVehicleStore = defineStore('vehicles', {

state:()=>({

vehicles:[

{
id:1,
name:"Mercedes",
model:"Automatic",
price:25,
category:"car",
luxury:true,
image:"/cars/benz.png"
},

{
id:2,
name:"Royal Enfield",
model:"Classic 350",
price:18,
category:"bike",
luxury:false,
image:"/bikes/re.png"
}

]

})

})