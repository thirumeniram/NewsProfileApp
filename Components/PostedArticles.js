
import React from 'react';
import { ScrollView } from 'react-native';
import {  Box, VStack, Text ,useTheme,Dimensions} from 'native-base'; // Import from NativeBase instead of react-native
import { Image} from 'react-native';


const PostedArticles = ({article}) => {
  
    const { urlToImage, title, description }=article
    const theme = useTheme();

    return (
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      
      <Box
        bg={theme.colors.background.light}
        my="2"
        borderRadius="md"
        overflow="hidden"
        width="100%"
        
       >
       <Box height="2px" bg= "#C0C0C0" width="100%" />

         <VStack space={2}>
         <Box px="3" py="2">
           <Text bold fontSize={16} numberOfLines={2} ellipsizeMode="tail" color={theme.colors.primary[700]}>
             {title}
           </Text>
         </Box>
         <Box style={{marginLeft:10}}>
           <Image source={{ uri: urlToImage }} style={{ width: '95%', height: 160, resizeMode: 'cover',borderRadius: 10 }} />
         </Box>
         <Box px="3" py="2" >
           <Text fontSize={14} numberOfLines={3} ellipsizeMode="tail" color={theme.colors.text.light}>
             {description}
           </Text>
         </Box>
         </VStack>
       </Box>
      

                
       </ScrollView>
    );
};

export default PostedArticles;


