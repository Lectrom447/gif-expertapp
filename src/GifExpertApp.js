import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState(['Dragon Ball'])

   // const hundleAdd = () => setCategories([...categories , 'TEST']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map((category) =>{
                        return <GiftGrid 
                                    key = {category}
                                    category={category} 
                                 />
                    })
                }
            </ol>

        </>
    );
}

export default GifExpertApp;