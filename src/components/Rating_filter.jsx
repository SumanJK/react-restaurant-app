import React from 'react'
import "./sort_filter.css"
const Rating_filter = ({setRatingFilter,setPage}) => {
  return (
    <div>
         <select className="sort_rating" name="filter_rating" id="" onChange={(e) =>{setRatingFilter(e.target.value),setPage(1)}}>
          <option value="0" >filter by ratings</option>
          <option value="4" >greater than 4</option>
          <option value="3" >greater than 3</option>
          <option value="2" >greater than 2</option>
          <option value="1" >greater than 1</option>
         </select>
    </div>
  )
}

export default Rating_filter