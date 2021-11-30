import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialIcons, Feather, Ionicons} from "react-native-vector-icons";
import { colors, fontFamily, fontSize } from '../../commonStyle';
import TransactionTab from './TransactionTab';
import Svg, {Path, G} from "react-native-svg"


const TransactionHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.view1}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../assets/logo.png")}
                    style={{resizeMode:"contain", height:30, width:30}}
                    />
                    <Text style={{marginHorizontal:5,fontSize:23, color:"#1A1A1A", fontFamily: fontFamily.primaryBold}}>worldref</Text>
                    <Image
                    source={require("../../assets/dealx.png")}
                    style={{resizeMode:"contain", height:70, width:70, marginTop:5}}
                    />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Svg fill="#000000" xmlns="http://www.w3.org/2000Ssvg" 
                    viewBox="0 0 50 50" width={25} height={25}>
                        <Path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                    <Ionicons
                    name="notifications-outline"
                    size={30}
                    color="#000000"
                    />
                    <View style={{position:"absolute",right:0,backgroundColor:"#FA0000", width:15, height:15, borderRadius:10, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{fontFamily: fontFamily.primaryRegular, fontSize:14, color:"#FFFFFF"}}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                    source={require("../../assets/Avatar.png")}
                    style={{height:30, width:30, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems:"flex-start"}}>
            <TransactionTab
            text1="Buying"
            Tab1="TransactionBuying"
            text2="Selling"
            Tab2="TransactionSelling"
            />
            </View>
        </View>
    )
}

export default TransactionHeader

const styles = StyleSheet.create({
    header:{
        backgroundColor:"white",
        padding:22,
        width:"100%" ,
        marginTop:-20
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
    // filter:{
    //     backgroundColor:"#F3F3F3",
    //     borderRadius:3,
    //     flexDirection:"row",
    //     alignItems:"center",
    //     paddingVertical:14,
    //     paddingHorizontal:15,
    //     marginLeft:23,
    // }
})
