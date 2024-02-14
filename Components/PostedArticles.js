
import React from 'react';
import {  Box, VStack, Text ,useTheme, } from 'native-base'; // Import from NativeBase instead of react-native
import { Image} from 'react-native';


const PostedArticles = ({article}) => {
  
    const { urlToImage, title, description }=article
    const theme = useTheme();

    return (
      <Box
        borderWidth="1"
        borderColor={theme.colors.primary[500]}
        bg={theme.colors.background.light}
        my="2"
        borderRadius="md"
        overflow="hidden"
        width="90%"
        marginLeft="5"
       >
         <VStack space={2}>
         <Box px="3" py="2">
           <Text bold fontSize={18} numberOfLines={2} ellipsizeMode="tail" color={theme.colors.primary[700]}>
             {title}
           </Text>
         </Box>
         <Box>
           <Image source={{ uri: urlToImage }} style={{ width: '100%', height: 160, resizeMode: 'cover'}} />
         </Box>
         <Box px="3" py="3" >
           <Text fontSize={15} numberOfLines={3} ellipsizeMode="tail" color={theme.colors.text.light}>
             {description}
           </Text>
         </Box>
         </VStack>
       </Box>
     
    );
};

export default PostedArticles;