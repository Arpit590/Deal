import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/core';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const TransactionHeader = ({active, logo, headingText}) => {

    const [click, setClick] = useState("Buying");
    const navigation = useNavigation();

    const buyingHandler=()=>{
        setClick("Buying");
        navigation.navigate("Buying");
    }

    const sellingHandler=()=>{
        setClick("Selling");
        navigation.navigate("Selling");
    }

    return (
        <View style={styles.container1}>
            {logo ? 
            <View style={styles.view1}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/logo.png")}
                    style={{height:30, width:30, resizeMode:"contain",marginRight:10}}
                    />
                    <Text style={{fontSize:fontSize.text, fontFamily: fontFamily.primaryBold, color: "#1A1A1A"}}>worldref</Text>
                    <Image
                    source={require("../../../assets/dealx.png")}
                    style={{height:70, width:70, resizeMode:"contain", marginTop:8}}
                    />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    >
                    <AntDesign
                    name="search1"
                    size={30}
                    color={colors.textPrimary}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <Ionicons
                        name="notifications-outline"
                        color={colors.textPrimary}
                        size={30}
                        />
                        <View style={{width:15, height:15,alignItems:"center", justifyContent:"center",backgroundColor:"#FA0000", padding:3, borderRadius:45, position:"absolute", right: 0}}>
                            <Text style={{fontSize:fontSize.h7, fontFamily:fontFamily.primaryRegular, color:colors.secondary}}>4</Text>
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
            :
            <View style={styles.view1}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                        <MaterialIcons
                        name="arrow-back-ios"
                        size={24}
                        color={colors.primary}
                        />
                    </TouchableOpacity>
                    <Text style={{fontFamily: fontFamily.primaryBold, fontSize:18, color:colors.textPrimary}}>{headingText}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    >
                    <AntDesign
                    name="search1"
                    size={30}
                    color={colors.textPrimary}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <Ionicons
                        name="notifications-outline"
                        color={colors.textPrimary}
                        size={30}
                        />
                        <View style={{width:15, height:15,alignItems:"center", justifyContent:"center",backgroundColor:"#FA0000", padding:3, borderRadius:45, position:"absolute", right: 0}}>
                            <Text style={{fontSize:fontSize.h7, fontFamily:fontFamily.primaryRegular, color:colors.secondary}}>4</Text>
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
            }
            {active && 
            <View style={styles.view2}>
                <TouchableOpacity activeOpacity={0.8} 
                onPress={buyingHandler}
                style={(click==="Buying") ? styles.activeBox :styles.box}>
                    <Text style={(click==="Buying") ? styles.activeText :styles.text}>Buying</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(click==="Selling") ? styles.activeBox :styles.box}
                onPress={sellingHandler}
                >
                    <Text style={(click==="Selling") ? styles.activeText :styles.text}>Selling</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

export default TransactionHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        padding:20,
        marginTop:"-5%"
    },
    container1:{
        backgroundColor:colors.secondary,
        padding:30, 
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    notification:{
        flexDirection:"row",
        marginHorizontal:20
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
    },
    box:{
        backgroundColor:colors.secondary,
        paddingVertical:10,
        paddingHorizontal:30,
        elevation:4,
        borderRadius:3
    },
    activeBox:{
        backgroundColor:colors.primary,
        paddingVertical:10,
        paddingHorizontal:30,
        elevation:4,
        borderRadius:3
    },
    text:{
        fontSize:fontSize.h5,
        fontFamily:fontFamily.primaryRegular,
        color:colors.textPrimary
    },
    activeText:{
        fontSize:fontSize.h5,
        fontFamily:fontFamily.primaryRegular,
        color:colors.secondary
    }
})
