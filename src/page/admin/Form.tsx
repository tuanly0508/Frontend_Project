import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa';
import { Product } from '../../model/Product'
interface State {
    nameErr: string,
    priceErr: string,
    imageErr: string,
    data: Product,
    closeModal: boolean
}
export interface Props {
    onAdd:  (product: Product) => void
    onUpdate: Product
    closeModal: (close:Boolean) => void
}

export function Form(props: Props) {
    //state
    const [state, setState] = useState<State>({
        nameErr: '', priceErr: '', imageErr: '',
        data: props.onUpdate,
        closeModal: false
    });

    //validation
    const formValidation = () => {
        let isValid = true
        if(state.data.nameProduct.length<5) {
            isValid = false
            setState({...state,nameErr: 'Name product is too short'})
        }
        if(state.data.nameProduct === '') {
            isValid = false
            setState({...state,nameErr: 'Name product is not empty'})
        }
        if(state.data.price === 0) {
            isValid = false
            setState({...state,priceErr: 'Price must be grater than 0'})
        }
        if(state.data.image === '') {
            isValid = false
            setState({...state,imageErr: 'Image is not empty'})
        }
        return isValid
    }

    //on submit
    const handleSubmit = (e: any) => {
        e.preventDefault()
        let isValid = formValidation()
        if(isValid === true) {
            props.onAdd(state.data)
        }
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} >
                <div className='icon-form-x'><i onClick={()=>props.closeModal(false)} ><FaTimes/></i></div>
                <div className='input'>
                    <label className='label'>Product Name</label>
                    <input onChange={e => {setState({...state,data:({...state.data,nameProduct: String(e.target.value)})})}} value={state.data.nameProduct} name='name' type="text" placeholder='Name' />
                    <label className='labelErr'><p>{state.nameErr}</p></label>
                </div>
                
                <div className='input'>
                    <label className='label'>Price</label>
                    <input onChange={e => {setState({...state,data:({...state.data,price: Number(e.target.value)})})}} value={state.data.price} name='price' type="number" placeholder='Price'/>
                    <label className='labelErr'><p>{state.priceErr}</p></label>
                </div>

                <div className='input'>
                    <label className='label'>Image</label>
                    <input onChange={e => {setState({...state,data:({...state.data,image: String(e.target.value)})})}} value={state.data.image} name='image' type="text" placeholder='Image'/>
                    <label className='labelErr'><p>{state.imageErr}</p></label>
                </div>

                <div className='form-button'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}
