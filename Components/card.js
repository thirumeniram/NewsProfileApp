

import React, { useState, useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { Box, Text, VStack, Pressable,useTheme  } from 'native-base';
import { NewsContext } from '../Api/ContextApi';
import { FontAwesome } from '@expo/vector-icons';
import  Bookmark from '../assets/bookmark.webp';

const Card = ({ article }) => {
  const [bookmark, setBookmark] = useState(false);
  const { addBookmark, removeBookmark, bookmarks } = useContext(NewsContext);

  const { urlToImage, title, description } = article;
  const theme = useTheme();

  useEffect(() => {
    const isBookmarked = bookmarks.some((item) => item.title === title);
    setBookmark(isBookmarked);
  }, [bookmarks, title]);

  const handleBookmark = () => {
    if (bookmark) {
      removeBookmark(article);
    } else {
      addBookmark(article);
    }
    setBookmark(!bookmark);
  };

  return (
    <Box  
    borderWidth="1"  
    borderColor={theme.colors.primary[500]}
    bg={theme.colors.background.light} 
    flexDirection="row" 
    my="2" 
    borderRadius="md" 
    overflow="hidden" 
    height={160} 
    width="100%" 
    marginLeft="1"
    >

      <Image source={{ uri: urlToImage }} style={{ width: '35%', height: 160}} />
      <VStack flex="1" p="3" space={2} justifyContent={'space-around'}  >
  
        <Text bold fontSize="sm" numberOfLines={2} ellipsizeMode="tail" color={theme.colors.primary[700]}>{title}</Text>
        <Text fontSize="xs" numberOfLines={4} ellipsizeMode="tail" color={theme.colors.text.light}>{description}</Text>

    {/* <Pressable onPress={handleBookmark} alignSelf="flex-end" >
         {
          {bookmark? 
        (
        <FontAwesome name="bookmark" size={24}/>
        ) : (
        <Image source={Bookmark} style={{ width: 24, height: 24 }} />
        )}
         }
        </Pressable> */}
        <Pressable onPress={handleBookmark} alignSelf="flex-end" >
            {bookmark ? (
             <FontAwesome name="bookmark" size={18}  /> // Added color for visibility
              ) : (
              <Image source={Bookmark} style={{ width: 25, height: 23 }} />
            )}
        </Pressable>

      </VStack>
    </Box>
  );
};

{/* <Box
      borderWidth="1"
      borderColor={theme.colors.primary[500]} // Use theme color for border
      bg={theme.colors.background.light} // Use theme color for background
      flexDirection="row"
      my="2"
      borderRadius="md"
      overflow="hidden"
      height={160}
      width="100%"
    >
      <Image source={{ uri: urlToImage }} style={{ width: '35%', height: 160}} />
      <VStack flex="1" p="3" space={2} justifyContent={'space-around'}>
        <Text bold fontSize="sm" numberOfLines={2} ellipsizeMode="tail" color={theme.colors.primary[700]}>{title}</Text> // Use theme color for text
        <Text fontSize="xs" numberOfLines={4} ellipsizeMode="tail" color={theme.colors.text.light}>{description}</Text> // Use theme color for text
        <Pressable onPress={handleBookmark} alignSelf="flex-end">
          <Text fontSize="xs" color={theme.colors.accent[400]}>{bookmark ? 'Bookmarked' : 'Bookmark'}</Text> // Use theme color for text
        </Pressable>
      </VStack>
    </Box> */}




export default Card;

