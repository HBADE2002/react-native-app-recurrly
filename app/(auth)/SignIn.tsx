import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/SignUp">Go to SignUp</Link>
    </View>
  );
};

export default SignIn;
