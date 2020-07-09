import React from 'react';

export default SearchBar = ({ data, searchData }) => (
  <input
    disabled={data.size === 0}
    onChange={(event) => searchData(event.target.value)}
    placeholder="Search.."
  />
);
