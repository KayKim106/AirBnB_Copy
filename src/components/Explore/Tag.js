import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Tag extends Component{

    render(){

        return(
            <View
            style={{
              minHeight: 20,
              minWidth: 40,
              padding: 5,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#dddddd",
              borderRadius: 2,
              marginRight:5
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "700" }}>{this.props.name}</Text>
          </View>
        )
    }
}

export default Tag;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})