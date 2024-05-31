import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="searche"
        value={filter}
        onChange={handleFilter}
      ></input>
    </div>
  );
}

export default SearchBox;
