import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Save extends Component{

    render(){

        return(
            <View style={styles.container}>
                <Text>Save page</Text>
            </View>
        )
    }
}

export default Save;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})