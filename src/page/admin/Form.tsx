import React, {useState} from 'react'
import { Product } from '../../model/Product'

interface State {
    nameButton: string,
    nameErr: string,
    priceErr: string,
    imageErr: string,
    data: Product
}

export interface Props {
    onAdd:  (product: Product) => void
    onEdit: Product 
    onName: string
}

export function Form(props: Props) {
    //state
    const [state, setState] = useState<State>({
        nameButton: 'Add',nameErr: '', priceErr: '', imageErr: '',
        data: props.onEdit
    });

    //validation
    const formValidation = () => {
        let isValid = true
        
        if(state.data.name.length<5) {
            isValid = false
            setState({...state,nameErr: 'Name product is too short'})
        }
        if(state.data.name === '') {
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
        let name = state.nameButton
        e.preventDefault()
        let isValid = formValidation()
        if(isValid === true) {
            props.onAdd(state.data)
            name = 'Add'
        }
        setState({...state,nameButton: name})
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit} >
                <div className='input'>
                    <label className='label'>Product Name</label>
                    <input onChange={e => {setState({...state,data:({...state.data,name: String(e.target.value)})})}} value={state.data.name} name='name' type="text" placeholder='Name' />
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
                    <button type='submit'>{state.nameButton}</button>
                </div>
            </form>
        </div>
    )
}
