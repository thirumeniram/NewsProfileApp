


import React, { useState,useContext, useEffect } from 'react';

import { Box,FlatList  } from 'native-base';
import { NewsContext } from '../Api/ContextApi';
import HeadLineList from '../Components/HeadLineList';
import { ScrollView } from 'react-native';
import HeadLinesCard from '../Components/HeadLinesCard';


const HomeScreen = () => {
  const { news,PostedArticles,  
   bookmarks
    } = useContext(NewsContext);

     

   
 return (
    <ScrollView > 
                
                 <HeadLinesCard/>
  
                
                
                <FlatList
                horizontal={false} 
                showsVerticalScrollIndicator={false}
                data={news.articles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                <HeadLineList  article={item}/>
                )}
                />
          </ScrollView>
 )
   }

export default HomeScreen;
 