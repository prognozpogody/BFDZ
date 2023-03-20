import { useActions } from "../../hooks/useActions";
import { useDebounce } from "../../hooks/useDebounce";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const { changeSearchFilter } = useActions();
  const debounceValue = useDebounce(searchInput, 750);
  const navigate = useNavigate();

  const onChange = (value: any) => {
    setSearchInput(value.target.value);
    navigate({
      pathname: "/products",
      search: `?search=${value.target.value}`,
    });
  };

  useEffect(() => {
    if (debounceValue) changeSearchFilter(debounceValue);
  }, [changeSearchFilter, debounceValue]);

  return (
    <div className="mr-4 ">
      <input name="search" type="text" className="search" onChange={onChange} />
    </div>
  );
};

export { SearchInput };
