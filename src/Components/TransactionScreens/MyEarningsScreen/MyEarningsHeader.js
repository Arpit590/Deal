import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../../commonStyle'
import {AntDesign, MaterialIcons, Ionicons} from "react-native-vector-icons";
import { useNavigation} from '@react-navigation/core';
import { useSelector } from 'react-redux';
import Svg,{Path} from "react-native-svg"

const MyEarningsHeader = () => {

    const [{text, filterText}] = useSelector((state)=> state.transaction.transaction)
    const navigation = useNavigation();
    
    return (
    <View style={{width:"100%"}}>
        <View style={styles.header}>
            <View style={styles.view1}>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>navigation.goBack()}
                style={styles.view}>
                    <AntDesign
                    name="left"
                    color="#007AFF"
                    size={25}
                    />
                    <Text style={{color: "#000000", fontSize:fontSize.text, marginLeft:5, fontWeight:"bold"}}>My Earnings</Text>
                </TouchableOpacity>
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
                    source={require("../../../assets/Avatar.png")}
                    style={{height:30, width:30, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.view2}>
            <View>
                <View style={styles.filter1}>
                    <Text style={{fontSize:fontSize.h1, fontFamily: fontFamily.primary, color: colors.secondary, marginRight:15, fontWeight:"900"}}>{filterText}</Text>
                    <AntDesign
                    name="close"
                    size={15}
                    color="#FFFFFF"
                    />
                </View>
                <View style={styles.filter2}>
                    <Text style={{fontSize:fontSize.h1, fontFamily: fontFamily.primary, color: colors.secondary, marginRight:15, fontWeight:"900"}}>{text}</Text>
                    <AntDesign
                    name="close"
                    size={15}
                    color="#FFFFFF"
                    />
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.filter}>
                <Image
                source={require("../../../assets/filter.png")}
                />
                <Text style={{color: "#000000", fontWeight:"900", fontFamily:fontFamily.secondaryMd, fontSize:fontSize.h5, marginLeft:10,}}>Filters</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default MyEarningsHeader

const styles = StyleSheet.create({
    header:{
        alignItems:"flex-start",
        backgroundColor:colors.secondary,
        width:"100%",
        justifyContent:"space-between",
        padding:20,
    },
    view1:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        width:"100%"
    },
    view:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:26
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        marginTop:15,
        paddingHorizontal:20
    },
    text:{
        fontSize: fontSize.text,
        color: colors.textPrimary,
        fontFamily: fontFamily.secondaryMd,
        fontWeight:"bold"

    },
    headerRight:{
    },
    icon:{
        backgroundColor:colors.primary,
        borderRadius:30,
        padding:6
    },
    filter:{
        backgroundColor:colors.secondary,
        borderRadius:3,
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:14,
        paddingHorizontal:15,
        marginLeft:23,
        borderWidth:1,
        borderColor:"#000000"
    },
    filter1:{
        backgroundColor:colors.primary,
        borderRadius:25,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:5,
        maxWidth:120,
        marginBottom:5
    },
    filter2:{
        backgroundColor:colors.primary,
        borderRadius:25,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:5
    },
})
