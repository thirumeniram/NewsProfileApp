import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

const ProfileNavigationTabs = ({ selected, setSelected, GridIcon, BookmarkIcon }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
      <View
        style={{
          height: 45.36,
          width: 196.36,
          paddingBottom: 15,
          borderBottomWidth: selected === 1 ? 1 : 0,
        }}>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <Image
            style={{ tintColor: 'black', alignSelf: 'center', height: 25, width: 25 }}
            source={GridIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 45.36,
          width: 196.36,
          paddingBottom: 15,
          borderBottomWidth: selected === 2 ? 1 : 0,
        }}>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <Image
            style={{ tintColor: 'black', alignSelf: 'center', height: 40, width: 45, marginTop: -5 }}
            source={BookmarkIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileNavigationTabs;