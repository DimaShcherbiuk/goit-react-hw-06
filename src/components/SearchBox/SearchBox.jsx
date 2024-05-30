import css from "./SearchBox.module.css";

function SearchBox({ value, onSearch }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="searche"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
