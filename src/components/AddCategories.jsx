import { useState } from 'react'

export const AddCategories = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('')

  const onInputChange =({target})=>{
      setInputValue(target.value)
  }
  const onSumit = (event)=>{
    event.preventDefault();
    if (inputValue.trim().length <= 1)return;

    onNewCategory( inputValue.trim())
    setInputValue('')

}
    return (
        <form onSubmit={onSumit}>
            <input type="text"
                placeholder="Buscar Gif" 
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
        )
    }
