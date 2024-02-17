import React, { useState, useContext } from 'react';
import { Box, Divider, FlatList, useTheme,Text} from 'native-base';
import { View,ScrollView, } from 'react-native';
import { NewsContext } from '../Api/ContextApi';
import GridIcon from '../assets/GridIcon.png'; // Adjust according to your assets
import BookmarkIcon from '../assets/bookmark.webp'; // Adjust according to your assets
import NewsCard from '../Components/NewsCard';
import PostedArticleCard from '../Components/PostedArticles'
import NewsProfileHeader from '../Components/NewsProfileHeader'
import ProfileNavigationTabs from '../Components/ProfileNaviagationTabs';


const ProfileScreen = () => {
  const [selected, setSelected] = useState(1);
  const { bookmarks, PostedArticles } = useContext(NewsContext);
  const theme = useTheme();



  return (
    <ScrollView>
    <Box flex={1} backgroundColor="white">
      <NewsProfileHeader 
        initials="T"
        posts="60"
        followers="2K"
        following="200"
        name="Thirumeniram"
        profession="Sport Journalist"
        organization="THE BHARATH NEWS"
      />
      
      <Divider my="2" />

      <ProfileNavigationTabs
        selected={selected}
        setSelected={setSelected}
        GridIcon={GridIcon}
        BookmarkIcon={BookmarkIcon}
      />

      {selected === 1 ? (
        <View style={{ marginTop: 15}}>
      <FlatList
        
        data={PostedArticles.articles
             .filter(item => item.urlToImage) // Filter to include only items with urlToImage
            .slice(0, 60)} 
            keyExtractor={(item, index) => String(index)}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
              <PostedArticleCard article={item}/>
            }
            numColumns={1}
        />
        </View>
      ) : (
        <View style={{ marginTop: 15}}>
        <FlatList
         horizontal={false} 
                showsVerticalScrollIndicator={false}
          data={bookmarks}
          renderItem={({ item }) => <NewsCard article={item} />}
          keyExtractor={item => item.name}
          numColumns={1}
        />
        </View>
      )}
    </Box>
    </ScrollView>
  );
};

export default ProfileScreen;


