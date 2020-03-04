import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import StartRating from "react-native-star-rating"
class Home extends Component{

    render(){

        return(
            <View
                  style={{
                    width: this.props.width / 2 -30,
                    height: this.props.width / 2 -30,
                    borderColor: "#dddddd",
                    borderWidth: 0.5
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Image
                      style={{
                        flex: 1,
                        height: null,
                        width: null,
                        resizeMode: "cover"
                        //   borderRadius: 5,
                        //   borderWidth: 1,
                        //   borderColor: "#dddddd"
                      }}
                      source={this.props.imageUri}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems:'flex-start', justifyContent:'space-evenly', paddingLeft:10}}>
                    <Text style={{ fontSize: 12, color: "#b63838" }}>
                      {this.props.name}
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                      {this.props.type}
                    </Text>
                    <Text style={{ fontSize: 10 }}>${this.props.price}</Text>
                    <StartRating disabled={true} maxStars={5} starSize={15} rating={this.props.rating}/>
                  </View>
                </View>
        )
    }
}

export default Home;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})