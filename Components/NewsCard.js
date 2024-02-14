import React, { useState, useContext, useEffect } from 'react';
import { Image} from 'react-native';
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
    <Box  
      borderWidth="1"
      borderColor={theme.colors.primary[500]}
      bg={theme.colors.background.light}
      my="2"
      borderRadius="md"
      overflow="hidden"
      width="90%"
      
      marginLeft="6"
    >
      {/* Adjust flexDirection to column for vertical layout */}
      <VStack space={3}>

        {/* Title */}
        <Box px="3" pt="2">
          <Text bold fontSize="sm" numberOfLines={2} ellipsizeMode="tail" color={theme.colors.primary[700]}>
            {title}
          </Text>
        </Box>

        {/* Image */}
        <Box>
          <Image source={{ uri: urlToImage }} style={{ width: '100%', height: 160, resizeMode: 'cover' }} />
        </Box>

        {/* Description */}
        <Box px="3">
          <Text fontSize="xs" numberOfLines={4} ellipsizeMode="tail" color={theme.colors.text.light}>
            {description}
          </Text>
        </Box>

        {/* Bookmark */}
       <Pressable onPress={handleBookmark} alignSelf="flex-end" px="3" pb="2" pt="-2" marginTop={-3}>
      {bookmark ? (
        <FontAwesome name="bookmark" size={20} color="black" />
      ) : (
        <Image source={BookmarkImage} style={{ width: 20, height: 20}} />
      )}
    </Pressable>

      </VStack>
    </Box>
  );
};

export default NewsCard;