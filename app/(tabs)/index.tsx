import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}
