var Objects = {
    SicilianPizza: ["Sicilian Pizza","false",950],
    StLouisPizza: ["St. Louis Pizza","false",1000],
    CaliforniaPizza: ["California Pizza","false",1000],
    ChicagoPizza: ["Chicago Pizza","false",900],
    DetroitPizza: ["Detroit Pizza","false",850],
    GreekPizza: ["Greek Pizza","false",950],
    NeapolitanPizza: ["Neapolitan Pizza","false",1000],
    newyork: ["New York-Style Pizza","false",1000]
};
var storeditems = localStorage.getItem("StoredItems");
if(storeditems){

} else{
    localStorage.setItem("StoredItems",Objects);
}