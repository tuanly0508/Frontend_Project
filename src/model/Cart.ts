
// export interface Cart {
//     id: string
//     price: number
//     name: string
//     image: string
//     quantity: number
// }
export interface Cart {
    idCart: string
    idUser: string
    idProduct: string
    quantity: number
}

export const getLocalStorage = () => {
    let dataInLocal = localStorage.getItem('list-cart')
    let listLocal: Cart [] = [] 
    if (dataInLocal) {
        let list = JSON.parse(dataInLocal)
        if (list.length === 0) {
            localStorage.setItem('list-cart', JSON.stringify([]) )
            listLocal = []
        }else {
            listLocal = list
        }
    }else {
        localStorage.setItem('list-cart', JSON.stringify([]) )
        listLocal = []
    }
    
    return listLocal
}