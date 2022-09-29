import React, { useContext, useEffect, useState } from 'react';



const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

// const initialState = {}
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);

  const getNews = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const promise = response.json();
    promise.then((data) => {
      console.log(data);
      setData(data.hits);
      setTotalPages(data.nbPages);
    });
    setIsLoading(false);

    // console.log(data);
  };
  useEffect(() => {
    getNews(`${API_ENDPOINT}query=${query}&page=${page}`);
  }, [query, page]);
  const removeStory = (id) => {
    const newData = data.filter((data) => data.objectID !== id);
    setData(newData);
  };
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        data,
        page,
        setPage,
        totalPages,
        isLoading,
        removeStory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
