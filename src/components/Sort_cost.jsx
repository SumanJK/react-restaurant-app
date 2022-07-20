import React from "react";
import "./sort_filter.css"
const Sort_cost = ({ setCost_sort, cost_sort ,setPage}) => {
  return (
    <div>
      <select className="sort_rating"
        name="sort_cost"
        id=""
        onChange={(e) => {setCost_sort(e.target.value),setPage(1)}}
      >
        <option value="null">sort by cost</option>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </div>
  );
};

export default Sort_cost;
