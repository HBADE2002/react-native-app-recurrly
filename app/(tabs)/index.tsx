import { HOME_BALANCE, HOME_USER } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View className="home-header flex-row items-center gap-3">
        <View className="home-user flex-row items-center gap-3">
          <Image
            source={images.avatar}
            className="home-avatar"
            style={{ width: 64, height: 64 }}
          />

          <Text
            className="home-balance-label"
            style={{ fontSize: 16, color: "black" }}
          >
            {HOME_USER.name}
          </Text>
        </View>

        <Image
          source={icons.add}
          className="home-add-icon"
          style={{ width: 24, height: 24 }}
        />
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount ">
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>
          <Text className="home-balance-date ">
            {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
