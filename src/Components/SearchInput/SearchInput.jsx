import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSearchFilter } from "../../Redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState();
  const debounceValue = useDebounce(searchInput, 750);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (value) => {
    setSearchInput(value.target.value);
    navigate({
      pathname: "/products",
      search: `?search=${value.target.value}`,
    });
  };

  useEffect(() => {
    if (debounceValue) dispatch(changeSearchFilter(debounceValue));
  }, [debounceValue, dispatch]);


  return (
    <div className="header__center search">
      <input
        name="search"
        label="Поиск продуктов?"
        type="text"
        className="search"
        onChange={onChange}
      />
    </div>
  );
};

export { SearchInput };
