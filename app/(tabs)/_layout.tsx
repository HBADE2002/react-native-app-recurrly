import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TAB_SIZE = 48;
const ICON_SIZE = 24;

const TabIcon = ({ focused, icon }: { focused: boolean; icon: any }) => {
  return (
    <View style={styles.iconContainer}>
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: focused ? "#EA7A53" : "transparent",
          },
        ]}
      >
        <Image source={icon} style={styles.icon} contentFit="contain" />
      </View>
    </View>
  );
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",

          left: tabBar.horizontalInset,
          right: tabBar.horizontalInset,

          height: tabBar.height,

          borderRadius: tabBar.radius,

          backgroundColor: colors.primary,

          borderTopWidth: 0,
          elevation: 0,

          bottom: Math.max(insets.bottom, tabBar.horizontalInset),

          // Important for web
          display: "flex",
          flexDirection: "row",
        },

        tabBarItemStyle: {
          flex: 1,
          flexGrow: 1,
          flexBasis: 0,

          alignItems: "center",
          justifyContent: "center",

          padding: 0,
          margin: 0,
        },

        tabBarIconStyle: {
          width: TAB_SIZE,
          height: TAB_SIZE,

          alignItems: "center",
          justifyContent: "center",

          margin: 0,
          padding: 0,
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,

            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: TAB_SIZE,
    height: TAB_SIZE,

    alignItems: "center",
    justifyContent: "center",
  },

  iconCircle: {
    width: TAB_SIZE,
    height: TAB_SIZE,

    borderRadius: TAB_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});

export default TabLayout;
