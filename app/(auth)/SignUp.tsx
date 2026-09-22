import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/SignIn">Go to SignIn</Link>
    </View>
  );
};

export default SignUp;
