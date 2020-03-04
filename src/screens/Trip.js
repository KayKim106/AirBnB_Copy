import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Trip extends Component{

    render(){

        return(
            <View style={styles.container}>
                <Text>Trip Page</Text>
            </View>
        )
    }
}

export default Trip;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})