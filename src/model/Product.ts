
export interface Product {
    idProduct: string;
    price: number;
    nameProduct: string;
    image: string;
}

// export const listProduct = [
//     {       
//         id: "1",
//         price: 100,
//         name: "GST-B200B-1ADR",
//         image: "https://gwatch.vn/wp-content/uploads/2021/04/gst-b200b-1adr_b06a8c17abda4529a7b188f489190f57_56e7731ff77c4dd5875e8bc780a57801_master-300x300.png" 
//     },
// ]

// export const getLocalStorage = () => {
//     let dataInLocal = localStorage.getItem('listProduct')
//     let listLocal: Product [] = [] 
//     if (dataInLocal) {
//         let list = JSON.parse(dataInLocal)
//         if (list.length === 0) {
//             listLocal = listProduct
//         }else {
//             listLocal = list
//         }
//     }else {
//         localStorage.setItem('listProduct', JSON.stringify(listProduct) )
//         listLocal = listProduct
//     }
    
//     return listLocal
// }

// [{"idProduct":"1","priceBef":3000,"priceAft":85,"namePro":"Watch1","image":"https://gwatch.vn/wp-content/uploads/2021/04/gst-b200b-1adr_b06a8c17abda4529a7b188f489190f57_56e7731ff77c4dd5875e8bc780a57801_master-300x300.png"},{"idProduct":"2","priceBef":100,"priceAft":64,"namePro":"Watch2","image":"https://gwatch.vn/wp-content/uploads/2021/01/gst-b100rh-1adr_565af9b75ed843a8a6fedd35ea26e4e7_master-300x300.png"},{"idProduct":"3","priceBef":100,"priceAft":60,"namePro":"Watch3","image":"https://gwatch.vn/wp-content/uploads/2021/01/gba-800-2adr_master-300x300.png"},{"idProduct":"4","priceBef":100,"priceAft":60,"namePro":"Watch4","image":"https://gwatch.vn/wp-content/uploads/2021/01/gba-800-4adr_master-300x300.png"},{"idProduct":"e213c609-d972-4d0b-aac1-38a52239b2f9","priceBef":201,"priceAft":151,"namePro":"Watch5","desc":"","image":"https://gwatch.vn/wp-content/uploads/2021/05/gm-110-1adr_bab40ba2fa3a430fb346dea0a95cfb26_master-1-300x300.png"},{"idProduct":"bee5aa07-a686-4a07-a721-82417ed773f6","priceBef":5000,"priceAft":4000,"namePro":"Watch6","desc":"","image":"https://gwatch.vn/wp-content/uploads/2021/01/gba-800-2adr_master-300x300.png"},{"idProduct":"7f480150-b86f-4f99-9e05-8e927fc55357","priceBef":6000,"priceAft":3000,"namePro":"Watch7","desc":"","image":"https://gwatch.vn/wp-content/uploads/2021/01/gba-400-4adr_master-300x300.png"},{"idProduct":"2850497d-884c-4154-af1d-96b14a728376","priceBef":5000,"priceAft":4500,"namePro":"Watch8","desc":"","image":"https://gwatch.vn/wp-content/uploads/2021/01/gba-400-1adr_master-300x300.png"},{"idProduct":"b57a3f70-3b35-4086-a79e-c8acdfd4b02a","priceBef":9000,"priceAft":7500,"namePro":"Watch9","desc":"","image":"https://gwatch.vn/wp-content/uploads/2021/05/gm-5600scm-1dr_144f1811defe48179637925b7fa2f421_master-300x300.png"},{"idProduct":"1c912e21-ab76-463d-9899-606f41ea1dc5","priceBef":5000,"priceAft":2500,"namePro":"Watch10","desc":"","image":"https://gwatch.vn/wp-content/uploads/2021/05/gm-6900sg-9dr_16210922c1274851a50a4c4eb250ab8d_master-300x300.png"}]