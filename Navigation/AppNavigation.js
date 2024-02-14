import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileStack from './ProfileStack';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Image } from 'react-native';
import BharathLogo from '../assets/Bharath_News_logo.jpg'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="THE BHARATH NEWS" component={HomeScreen} 
      options={{
        headerTitle: "THE BHARATH NEWS",
        headerTitleAlign: 'center', // Center the title
        headerLeft: () => (
          <Image 
            source={BharathLogo} 
            style={{ width: 45, height: 35, marginLeft: 15 }} 
            resizeMode="contain" // Adjust how your image fits, if necessary
          />
       ),
        tabBarIcon: ({ color, size }) => (
          //  <FontAwesome  name="home" color="black" size={30} />
            <Ionicons  name="home-sharp" color="black" size={30} />
         ),
         headerTitleStyle: {
        fontSize: 22,
    }
    }}
    />
    <Tab.Screen name="Profile" component={ProfileStack} 
    options={{headerShown:false,
      tabBarIcon: ({ color, size }) => (
        //    <FontAwesome  name="user" color="black" size={30} />
           <Ionicons  name="person-sharp" color="black" size={30} />
        ),
        
    }}
    
    />
 
  </Tab.Navigator>
  );
};

export default AppNavigation;
