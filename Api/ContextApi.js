import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI} from "./API";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [PostedArticles,setPostedArticles]=useState([]);

  const [bookmarks, setBookmarks] = useState([]); 

  const fetchNews = async () => {
    
    const { data } = await axios.get(getNewsAPI("sports"));
    setPostedArticles(data);

  };

  const fetchGeneralNews = async () => {
   
      const { data } = await axios.get(getNewsAPI("general"));
      setNews(data)
     
    
  };

  useEffect(() => {
    fetchNews();
  }, [PostedArticles]);

  useEffect(() => {
    fetchGeneralNews();
  }, [news]);


  


  
  const addBookmark = (newsItem) => {
    setBookmarks((prevBookmarks) => {
           const isBookmarked = prevBookmarks.some((item) => item.title === newsItem.title);
      if (!isBookmarked) {
        return [ newsItem,...prevBookmarks];
      }
      return prevBookmarks;
    });
  };

  
  const removeBookmark = (newsItem) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((item) => item.title !== newsItem.title)
    );
  };

  
  

return (
    <NewsContext.Provider
      value={{
        news,
        PostedArticles,
        bookmarks,
        fetchNews,
        fetchGeneralNews,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
