import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Explore/Category";
import Home from "../components/Explore/Home";
import Tag from "../components/Explore/Tag";
const { height, width } = Dimensions.get("window");
class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;

    this.scrollY = new Animated.Value(0);

    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
        inputRange: [this.endHeaderHeight, this.startHeaderHeight],
        outputRange: [-30, 5],
        extrapolate: "clamp"
      });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                marginHorizontal: 20,
                backgroundColor: "white",
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS === "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                placeholder="Try New York"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                underlineColorAndroid="transparent"
              />
            </View>

            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tag name="Guest" />

              <Tag name="Date" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                {" "}
                What can we help you find, Varun?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    name="first"
                    imageUri={require("../../assets/travel1.jpg")}
                  />
                  <Category
                    name="Experience"
                    imageUri={require("../../assets/travel1.jpg")}
                  />
                  <Category
                    name="Restaurant"
                    imageUri={require("../../assets/travel1.jpg")}
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Introducing AirBnb
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  A New Selection of homes verified for quality & comfort
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd"
                    }}
                    source={require("../../assets/travel1.jpg")}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                {" "}
                Homes around the world
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  imageUri={require("../../assets/travel1.jpg")}
                  rating={3}
                  name="Room 1"
                  type="The Cozy Place"
                  price="80"
                />
                <Home
                  width={width}
                  imageUri={require("../../assets/travel1.jpg")}
                  rating={5}
                  name="Room 2"
                  type="The Cozy Place"
                  price="410"
                />
                <Home
                  width={width}
                  imageUri={require("../../assets/travel1.jpg")}
                  rating={4}
                  name="Room 3"
                  type="The Cozy Place"
                  price="180"
                />
                <Home
                  width={width}
                  imageUri={require("../../assets/travel1.jpg")}
                  rating={2}
                  name="Room 4"
                  type="The Cozy Place"
                  price="30"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
