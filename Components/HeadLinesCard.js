import { View, Text, Dimensions, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { FlatList, Box, useTheme } from 'native-base';
import { NewsContext } from '../Api/ContextApi';

export default function HeadLinesCard({articles}) {
    const theme = useTheme();
    const {news} = useContext(NewsContext);
    
    
 

    // Filter out the articles that have an image
    
    return (
        <View style={{ marginTop: 15, marginLeft: 15 }}>
            <FlatList
                data={news.articles}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Box style={{ marginTop: 10 }}>
                        <Box style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 15 }}>
                            <Image 
                                source={{ uri: item.urlToImage }}
                                style={{ height: Dimensions.get('screen').width * 0.75, borderRadius: 10 }}
                            />
                            <Text numberOfLines={2} style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            
                        </Box>
                    </Box>
                )}
            />
            
           
        </View>
    );
}
