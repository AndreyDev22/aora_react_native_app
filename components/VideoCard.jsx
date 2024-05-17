import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="items-center justify-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              resizeMode="cover"
              className="w-full h-full rounded-lg"
            />
          </View>
          <View className="flex-1 justify-center ml-3 gap-y-1">
            <Text className="text-white font-psemibold" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-gray-100 text-xs" numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="h-5 w-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{
              uri: 'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-valerian-i-gorod-tisyachi-planet-oboi-40.jpg',
              //   uri: thumbnail,
            }}
            resizeMode="cover"
            className="w-full h-full rounded-xl mt-3"
          />
          <Image source={icons.play} resizeMode="contain" className="w-12 h-12 absolute" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
