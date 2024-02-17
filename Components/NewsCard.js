import React, { useState, useContext, useEffect } from 'react';
import { Image,View,ScrollView} from 'react-native';
import { Box, Text, VStack, useTheme,Pressable } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BookmarkImage from '../assets/bookmark.webp';
import { NewsContext } from '../Api/ContextApi';


const NewsCard = ({ article }) => {
  const [bookmark, setBookmark] = useState(false);
  const { addBookmark, removeBookmark, bookmarks } = useContext(NewsContext);

  const { urlToImage, title, description } = article;
  const theme = useTheme();

  

  useEffect(() => {
    const isBookmarked = bookmarks.some(item => item.title === title);
    setBookmark(isBookmarked);
  }, [bookmarks, title]);

  const handleBookmark = () => {
    bookmark ? removeBookmark(article) : addBookmark(article);
    setBookmark(!bookmark);
  };

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
    <Box  
      bg={theme.colors.background.light}
      my="2"
      borderRadius="md"
      overflow="hidden"
      width=" 100%"
    >
      
      <Box height="2px" bg= "#C0C0C0" width="100%" />

      <VStack space={3}>
      

        {/* Title */}
        <Box px="3" pt="1">
          <Text bold fontSize={16} numberOfLines={2} ellipsizeMode="tail" color={theme.colors.primary[700]}>
            {title}
          </Text>
        </Box>

        {/* Image */}
        <Box>
          <Image source={{ uri: urlToImage }} style={{ width: '95%', height: 160, resizeMode: 'cover',borderRadius: 10,marginLeft:10}} />
        </Box>

        {/* Description */}
        <Box px="3">
          <Text fontSize={14}  numberOfLines={3} ellipsizeMode="tail" color={theme.colors.text.light}>
            {description}
          </Text>
        </Box>

        {/* Bookmark */}
       <Pressable onPress={handleBookmark} alignSelf="flex-end" px="3" pb="2" >
      {bookmark ? (
        <FontAwesome name="bookmark" size={18} color="black" />
      ) : (
        <Image source={BookmarkImage} style={{ width: 20, height: 20}} />
      )}
    </Pressable>

      </VStack>
      
    </Box>
    </ScrollView>
  );
};

export default NewsCard;