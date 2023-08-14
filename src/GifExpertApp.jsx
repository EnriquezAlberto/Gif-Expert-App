import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

const onAddCategory = ( newCategory) => {
console.log(newCategory)
//   setCategories( [NewCategory, ...categories])
}

    
  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    // setCategories={ setCategories }
    onNewCategory={ value => onAddCategory(value) }
    />


    {/* listado de Gift */}


<ol>
     { categories.map( category => {
        return <li key={ category }>{ category }</li>
     })}
    <li>XYZ</li>
</ol>

          {/* Gif Item */}
    </>
  )
}
