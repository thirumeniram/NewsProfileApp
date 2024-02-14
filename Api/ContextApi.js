import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI,getHeadlinesApi} from "./API";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [PostedArticles,setPostedArticles]=useState([]);
  const [country, setCountry] = useState("in");
  const [postCategory,setPostCategory]=useState("cricket")
  const [darkTheme, setDarkTheme] = useState(true);
  const [bookmarks, setBookmarks] = useState([]); // State to manage bookmarks


  const fetchNews = async (reset = country) => {
    const { data } = await axios.get(getHeadlinesApi(reset));
    
    setNews(data);
    
    
  };

  const fetchPostedArticles = async (reset = postCategory) => {
    const { data } = await axios.get(getNewsAPI(reset));
    setPostedArticles(data);
    console.log(data);
  };

  

  


  // Function to add a news item to bookmarks
  const addBookmark = (newsItem) => {
    setBookmarks((prevBookmarks) => {
      // Check if the item is already bookmarked to avoid duplicates
      const isBookmarked = prevBookmarks.some((item) => item.title === newsItem.title);
      if (!isBookmarked) {
        return [ newsItem,...prevBookmarks];
      }
      return prevBookmarks;
    });
  };

  // Function to remove a news item from bookmarks
  const removeBookmark = (newsItem) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((item) => item.title !== newsItem.title)
    );
  };

  useEffect(() => {
    fetchNews();
  }, [country]);

  useEffect(()=>{
    fetchPostedArticles()
  },[postCategory])

  

return (
    <NewsContext.Provider
      value={{
        news,
        PostedArticles,
      
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
