import React, {Component} from 'react';
import {StyleSheet,Text, View} from 'react-native';


const Styles = StyleSheet.create({
    Card:{
        top:0,
        display: 'flex',
        flexDirection: 'row',
        width:340,
        height:400,
        borderRadius:20,
        padding:10,
        color:'#ffffff',
        borderColor:'black',
        borderWidth:1.5
    },
    TextCard:{
        color:'black',
        fontSize:22
    }
})


export default class Card extends React.Component{

    render(){
        return(
            <View style={Styles.Card}>
                <Text style={Styles.TextCard}>ProductCard</Text>
            </View>
        )
    }

}