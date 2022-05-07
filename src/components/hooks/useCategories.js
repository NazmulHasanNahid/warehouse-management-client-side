import { useEffect, useState } from "react"

const useCategories = () =>{
     const [categories , setCategories] = useState([])
     useEffect(()=>{
          fetch('https://limitless-springs-85910.herokuapp.com/categories')
          .then(res => res.json())
          .then(data => setCategories(data))
     },[])
     return[categories , setCategories]
}
export default useCategories;