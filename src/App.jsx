import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import RestaurantDetails from "./components/RestaurantDetails";
import Search from "./components/Search";
import Sort_cost from "./components/Sort_cost";
import Rating_filter from "./components/Rating_filter";
import PaymentMethods from "./components/PaymentMethods";
function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(8);
  const [totalItem, setTotalItem] = useState(0);
  const [cost_sort, setCost_sort] = useState("");
  const [rating_filter, setRatingFilter] = useState(0);
  const [cash, setCash] = useState(null);
  const [card, setCard] = useState(null);
  const [upi, setUpi] = useState(null);

  console.log(cost_sort, "cost_sort");
  console.log(rating_filter, "rating_filter");
  useEffect(() => {
    getData({ query, page, per_Page, cost_sort, rating_filter,cash,card,upi });
  }, [query, page, per_Page, cost_sort, rating_filter,cash,card,upi]);

  const getData = async ({
    query,
    page,
    per_Page,
    cost_sort,
    rating_filter,
    cash,
    card,
    upi
  }) => {
    const paramsForPayment = {}
  if(cash) paramsForPayment["payment_methods.cash"] = cash;
  if(card) paramsForPayment["payment_methods.card"] = card;
  if(upi) paramsForPayment["payment_methods.upi"] = upi;
  console.log(paramsForPayment,"para")
    const total = await axios
     


    const res = await axios("http://localhost:8080/restaurantData", {
      method: "GET",
      params: {
        _page: page,
        _limit: per_Page,
        _sort: "cost",
        _order: `${cost_sort}`,
        rating_gte: rating_filter,
        q: query,
        ...paramsForPayment
      },
    });
    console.log(res, "eee");
    setRestaurant(res.data);
    setTotalItem(res.headers["x-total-count"]);
  };

  const handleSearch = (val) => {
    console.log(val, "seach res");
    setQuery(val);
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} setPage={setPage}/>
      <div className="Filters_ratings_wrapper">
        <div className="Filters_ratings">
          <PaymentMethods setCash={setCash} setUpi= {setUpi} setCard={setCard} cash={cash} card={card} upi={upi} setPage={setPage}/>
          <Sort_cost
            className="sort_cost"
            cost_sort={cost_sort}
            setCost_sort={setCost_sort}
            setPage={setPage}
          />
          <Rating_filter
            className="rating_filter"
            setRatingFilter={setRatingFilter}
            rating_filter={rating_filter}
            setPage={setPage}
          />
        </div>
      </div>
      <div className="RestaurantCards">
        {restaurant.map((elem) => {
          return <RestaurantDetails val={elem} key={elem.id} />;
        })}
      </div>
      <div className="pagination">
        <div className="btnDIv">
          <button
            className="prevBtn"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <span className="label">Prev</span>
            <span className="icon">
              <img src="https://img.icons8.com/fluency-systems-filled/18/ffffff/sort-left.png"/>
            </span>
          </button>
          <button
            className="nextBtn"
            disabled={page === Math.ceil(totalItem / per_Page)}
            onClick={() => setPage(page + 1)}
          >
            <span className="label">Next</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="TotalPage">
        <span> {page} </span> / {Math.ceil(totalItem / per_Page)} 
        </div>
      </div>
    </div>
  );
}

export default App;
