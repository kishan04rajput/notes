import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { buyBook, sellBook } from "./redux/bookAction.js";

function App() {
  const dispatch = useDispatch();
  const noOfBooks = useSelector((state) => state.noOfBooks);
  return (
    <div>
      <h1>Book Store</h1>
      <p>No of total books remaining: {noOfBooks}</p>
      <button
        onClick={() => {
          dispatch(sellBook());
        }}
      >
        Sell Book
      </button>
      <button
        onClick={() => {
          dispatch(buyBook());
        }}
      >
        Buy Book
      </button>
    </div>
  );
}

export default App;
