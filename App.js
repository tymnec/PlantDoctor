import { Text, Platform, View } from "react-native";
import { Home, Prices, About, Settings, Main } from "./screens/index";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

// Thanks for watching
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: '#fffff',
    margin: 5,
    borderRadius: 25,
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#79AC78" : "#111"}
                  />
                  <Text style={{ color: "#79AC78" }}>HOME</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#79AC78",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                  }}
                >
                  <FontAwesome name="leaf" size={24} color="#fff" />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Ionicons
                    name="information-circle"
                    size={24}
                    color={focused ? "#79AC78" : "#111"}
                  />
                  <Text style={{ color: "#79AC78" }}>ABOUT</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Ionicons
                    name="settings"
                    size={24}
                    color={focused ? "#79AC78" : "#111"}
                  />
                  <Text style={{ color: "#79AC78" }}>
                    SETTINGS
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
