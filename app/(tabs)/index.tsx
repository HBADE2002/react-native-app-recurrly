import { HOME_USER } from "@/constants/data";
import images from "@/constants/images";
import "@/global.css";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View className="home-header">
        <View className="home-user flex-row items-center gap-3">
          <Image
            source={images.avatar}
            className="home-avatar"
            style={{ width: 64, height: 64 }}
          />

          <Text className="home-user-name font-sans-extrabold">
            {HOME_USER.name}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
