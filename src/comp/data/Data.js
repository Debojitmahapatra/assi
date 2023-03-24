import React, { useState } from 'react'

function Data() {
    let [product,setProducts]=useState("")
    const getproducts = async () => {
       
        let result = await fetch("https://admin.gifinfinity.com/products/api/client/v1/products-list/", {
    
          headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
    
        })
        result = await result.json();
    
   console.log(result)
        // if (result.data) { setProducts(result.data); }
        
        
      };
  return (
    <div>
      <button onClick={()=>getproducts()}>get all data</button>
    </div>
  )
}

export default Data
