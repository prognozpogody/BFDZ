import { Input, Space } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchFilter } from "../../Redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = (event) => {
    setSearchInput(event);
    dispatch(changeSearchFilter(event));
    navigate({
      pathname: "/search",
      search: `?search=${event}`,
    });
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="Поиск по товарам"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        defaultValue={searchInput}
      />
    </Space>
  );
};

export { SearchInput };
