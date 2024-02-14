import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Make sure it's imported
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from '../Screens/ProfileScreen';
import Settings from '../Screens/SettingScreen';
import BharathLogo from '../assets/Bharath_News_logo.jpg'; // Adjust the path as necessary

const Stack = createNativeStackNavigator();

// New component to use the useNavigation hook
const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('THE BHARATH NEWS')}>
      <Image 
        source={BharathLogo} 
        style={{ width: 45, height: 35, marginLeft: 15 }} 
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
const HeaderRight = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        
        <FontAwesome name="gear" size={30} color="black"  />
      </TouchableOpacity>
    );
  };

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{
        headerTitle: "Profile",
        headerTitleAlign: 'center',
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight/>,
        headerTitleStyle: {
      fontSize: 28,
    }
      }} />
   
      <Stack.Screen name="Settings" component={Settings} />
     
    </Stack.Navigator>
  );
};

export default ProfileStack;

