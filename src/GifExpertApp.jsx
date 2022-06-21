import {  useState } from 'react';
import { AddCategories,GifGrid } from './components';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Simpson'])

const onAddCategory = (newCategory)=>{
  if(categories.includes(newCategory)) return
 setCategories([newCategory, ...categories])
}

  return (
    <>

       <h1>Gift Expert App</h1>

       < AddCategories 
       onNewCategory= {value =>onAddCategory(value)}
       />

        {
          categories.map((category) =>(
            <GifGrid 
                key={ category } 
                category={category}/>
          ))
        }
       </>
    )
}
