import { useActions } from "../../hooks/useActions";
import { useDebounce } from "../../hooks/useDebounce";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(() => {
    const firstSearch = searchParams.get("search");

    return firstSearch ? firstSearch : "";
  });
  const { changeSearchFilter } = useActions();
  const debounceValue = useDebounce(searchInput, 750);
  const navigate = useNavigate();

  const onChange = (event: any) => {
    const searchValue = event.target.value;
    setSearchInput(event.target.value);
    if (searchValue) {
      return navigate({
        pathname: "/products",
        search: `?search=${searchValue}`,
      });
    }
    navigate({
      pathname: "/",
    });
  };

  useEffect(() => {
    changeSearchFilter(debounceValue);
  }, [changeSearchFilter, debounceValue]);

  return (
    <div className="mr-4 ">
      <input
        name="search"
        type="text"
        className="search"
        value={searchInput}
        onChange={onChange}
      />
    </div>
  );
};

export { SearchInput };
