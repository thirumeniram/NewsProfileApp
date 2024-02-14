// // Example for HomeScreen.js
// import React from 'react';
// import { View, Text ,Box} from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';

// const SettingScreen= () => {
//   // return (
//   //   <View style={{flex:1}}>
//   //   <View style={{marginLeft:15,marginBottom:18}}>
//   //    <Text Text fontSize={19} >Thirumeni Ram</Text>
//   //   </View>
//   //     <Text fontSize={20} marginTop="20">
//   //       Dark Mode
//   //     </Text>
//   //     <FontAwesome name="toggle-on"/>
//   //     <FontAwesome name="toggle-off"/>
//   //   </View>
//   // );
//   return (
    
//     <View flex={1} marginLeft={14} fontSize={30}>
//       <View marginLeft={4} marginBottom={1}>
//         <Text fontSize={40}>Thirumeni Ram</Text>
//       </View>
//       {/* fontSize={30} marginTop={5} */}
//       <Text style={{fontSize:"30"}}>
//         Dark Mode
//       </Text>
//       <FontAwesome name="toggle-on" size={30} color="#000" />
//       <FontAwesome name="toggle-off" size={30} color="#000" />
//     </View>

//   );
// };

// export default SettingScreen;
import React,{useState} from 'react';
import { View, Text,Pressable } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

const SettingScreen = () => {
  const [toggle,setToggle]=useState(false)

  const handleToggle= () => {
    
       setToggle(!toggle);
    
  };

  return (
    <View flex={1} marginLeft={15}>
      
      <Text fontSize="2xl" marginTop={5}>
        Dark Mode
      </Text>
      <Pressable onPress={handleToggle}>
      {
        toggle?(
          <FontAwesome name="toggle-on" size={30} color="#000" />
        )
        :(
          <FontAwesome name="toggle-off" size={30} color="#000" />
        )
      }
      </Pressable>
    
    </View>
  );
};

export default SettingScreen;

