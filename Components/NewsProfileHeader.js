import React from 'react';
import { Box, Avatar, Text } from 'native-base';

const NewsProfileHeader = ({ initials, posts, followers, following, name, profession, organization }) => {
  return (
    <Box px="4">
    <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={25} marginLeft={0}>
      <Avatar
        size="xl" // can be xs, sm, md, lg, xl, 2xl
        bg="green.900"
        _text={{
          fontSize: "5xl", // Increase the font size of the fallback text
          color: "white", // Optional: Change text color if needed
        }}
      >
        {initials}
      </Avatar>
      <Box width={75} alignItems="center">
        <Text fontSize="24" fontWeight="500" color="black">
          {posts}
        </Text>
        <Text fontSize="16" color="black">Posts</Text>
      </Box>
      <Box width={75} alignItems="center">
        <Text fontSize="24" fontWeight="500" color="black">
          {followers}
        </Text>
        <Text fontSize="16" color="black">Followers</Text>
      </Box>
      <Box width={75} alignItems="center">
        <Text fontSize="24" fontWeight="500" color="black">
          {following}
        </Text>
        <Text fontSize="16" color="black">Following</Text>
      </Box>
    </Box>
    <Text fontSize="18" color="black" fontWeight="600" mt="2.5">{name}</Text>
    <Text fontSize="16" color="black" fontWeight="500" mt="2.5">{profession}</Text>
    <Text fontSize="16" color="black" fontWeight="500" mt="2.5">{organization}</Text>
    
     </Box>
  );
};

export default NewsProfileHeader;
