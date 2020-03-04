import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

// Icon
import Icon from "react-native-vector-icons/Ionicons";
// Screens
import Explore from "./src/screens/Explore";
import Trip from "./src/screens/Trip";
import Save from "./src/screens/Save";
import Inbox from "./src/screens/Inbox";
import Profile from "./src/screens/Profile";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "EXPLORE",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Save: {
    screen: Save,
    navigationOptions: {
      tabBarLabel: "SAVE",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Trip: {
    screen: Trip,
    navigationOptions: {
      tabBarLabel: "TRIP",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-add" color={tintColor} size={24} />
      )
    }
  }
}, {
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColir:'gray',
    style:{
      backgroundColor:"white",
      borderTopWidth:0,
      shadowOffset:{ width:5, height:3},
      shadowColor:'black',
      shadowOpacity:0.5,
      elevation:5,
    }
  }
});
// export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
