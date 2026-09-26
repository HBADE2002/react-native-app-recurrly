import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      {/* 
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        <Text className="text-lg text-white">Go to onboarding</Text>
      </Link> */}
      <Link
        href="/(auth)/SignIn"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to SignIn
      </Link>

      <Link
        href="/(auth)/SignUp"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to SignUp
      </Link>
    </SafeAreaView>
  );
}
