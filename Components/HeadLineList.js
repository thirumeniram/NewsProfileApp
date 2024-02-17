
import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Text, ScrollView, Pressable,FlatList} from 'react-native';
import { Box} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import BookmarkIcon from '../assets/bookmark.webp'; 


import { NewsContext } from '../Api/ContextApi';

export default function HeadLineList({ article }) {
    const [bookmark, setBookmark] = useState(false);
    const { addBookmark, removeBookmark, bookmarks,news} = useContext(NewsContext);
    
    const { urlToImage, title, } = article;
   
    useEffect(() => {
        const isBookmarked = bookmarks.some(item => item.title === title);
        setBookmark(isBookmarked);
       
      }, [bookmarks,title]); 
   
      const handleBookmark = (article) => {
        bookmark ? removeBookmark(article) : addBookmark(article);
        setBookmark(!bookmark);
      };

    return (
     
        <View style={{ marginTop: 15, marginLeft: 15 }}>
          <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10, marginLeft: -20 }} />
          <Box style={{ marginTop: 15, flexDirection: 'row' }}>
            <Image
              source={{ uri: urlToImage}}
              style={{ height: 130, width: 130, borderRadius: 10 }}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text numberOfLines={4} style={{ marginTop: 1, fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
              <Pressable onPress={() => handleBookmark(article)} 
                style={{ alignSelf: 'center', padding: 15, height: 20,marginTop: 20}}
              >
             
              {bookmark ? (
    
                <Ionicons name="bookmark-sharp" size={25} color="#000000" style={{ height:50,marginLeft:110 }}/>
                ) : (
               
                <Image source={BookmarkIcon} style={{ width: 30, height: 30,marginLeft:120}} />
                )}
              </Pressable>
            </View>
          </Box>
        </View>
   
    );
    
}

{/* <Pressable onPress={handleBookmark} 
style={{ alignSelf: 'flex-end', padding: 15, height: 30, marginRight: 30, marginTop: 30 }}
>
<FontAwesome name="heart" size={18} color={isBookmarked ? "blue" : "black"} style={{ marginLeft: 50 }}/>
</Pressable> */}
   {/* <Image source={BookmarkImage} style={{ width: 20, height: 30}} /> */}

//    <View style={{ marginTop: 15, marginLeft: 15 }}>
//    <View style={{ height: 1, backgroundColor: 'grey', marginTop: 10, marginLeft: -20 }} />
//    <Box style={{ marginTop: 15, flexDirection: 'row' }}>
//        <Image
//            source={{ uri: article.urlToImage }}
//            style={{ height: 130, width: 130, borderRadius: 10 }}
//        />
//        <View style={{ marginLeft: 10, flex: 1 }}>
//            <Text numberOfLines={4} style={{ marginTop: 1, fontSize: 16, fontWeight: 'bold' }}>{article.title}</Text>
//            <Pressable onPress={handleBookmark} 
//                style={{ alignSelf: 'flex-end', padding: 15, height: 30, marginRight: 30, marginTop: 30 }}
//            >
//                <FontAwesome name="heart" size={18} color={isBookmarked ? "blue" : "black"} style={{ marginLeft: 50 }}/>
//            </Pressable>
//        </View>
//    </Box>
// </View>