
import React, { useContext, useEffect } from 'react';

import { Box,FlatList  } from 'native-base';
import { NewsContext } from '../Api/ContextApi';
import Card from '../Components/card';

const HomeScreen = () => {
  const { news } = useContext(NewsContext);

  useEffect(() => {
    // Optionally log news data
  }, [news]);

  return (
    // Using Box as the outer container component from NativeBase
    // <Box flex={1} px="4" widht="120%"> {/* Apply horizontal padding directly */}
    //   <FlatList
    //     data={news.articles}
    //     keyExtractor={(item, index) => String(index)}
    //     renderItem={({ item }) => (
    //       <Card article={item} />
    //     )}
    //     // Apply padding at the bottom of the FlatList content container
    //     // contentContainerStyle={{ paddingBottom: 50 }}
    //     _contentContainerStyle={{ px: "12", py: "4" }} 
    //   />
    // </Box>
    <FlatList
            data={news.articles}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
                // Use the Card component to render each news item
                <Card article={item} />
            )}
            _contentContainerStyle={{ px: "12", py: "4" }} // Use padding from the theme, e.g., 12 for x-axis and 4 for y-axis
        />
  );
};


export default HomeScreen;

