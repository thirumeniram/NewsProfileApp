import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI} from "./API";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [PostedArticles,setPostedArticles]=useState([]);
  const [category, setCategory] = useState("general");
  const [postCategory,setPostCategory]=useState("sports")
  const [source, setSource] = useState("cnn");
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  const [bookmarks, setBookmarks] = useState([]); // State to manage bookmarks

  const fetchNews = async (reset = category) => {
    const { data } = await axios.get(getNewsAPI(reset));
    setNews(data);
    setIndex(1);
  };

  const fetchPostedArticles = async (reset = postCategory) => {
    const { data } = await axios.get(getNewsAPI(reset));
    setPostedArticles(data);
    setIndex(1);
  };

  // const fetchNewsfromSource = async () => {
  //   try {
  //     const { data } = await axios.get(getSourceAPI(source));
  //     setNews(data);
  //     setIndex(1);
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

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
  }, [category]);

  useEffect(()=>{
    fetchPostedArticles()
  },[postCategory])

  // useEffect(() => {
  //   fetchNewsfromSource();
  // }, [source]);

  


  return (
    <NewsContext.Provider
      value={{
        news,
        PostedArticles,
        setCategory,
        index,
        setIndex,
        setSource,
        darkTheme,
        setDarkTheme,
        fetchNews,
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
