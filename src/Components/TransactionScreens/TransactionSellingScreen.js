import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import TransactionHeader from './TransactionHeader'
import TransactionOption from './TransactionOption'

const TransactionSellingScreen = () => {

    const [click, setClick] = useState("MyEarnings");

    return (
        <View style={styles.screen}>
            <TransactionHeader
            logo
            active
            />
            <View style={styles.view}>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>setClick("MyEarnings")}
                style={(click==="MyEarnings")? styles.activeContainer : styles.container}>
                    <Text style={(click==="MyEarnings")? styles.activeText : styles.text}>My Earnings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>setClick("Purchase")}
                activeOpacity={0.8} style={(click==="Purchase")? styles.activeContainer : styles.container}>
                    <Text style={(click==="Purchase")? styles.activeText : styles.text}>Purchase Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>setClick("Invoices")}
                activeOpacity={0.8} style={(click==="Invoices")? styles.activeContainer : styles.container}>
                    <Text style={(click==="Invoices")? styles.activeText : styles.text}>Invoices</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20, paddingVertical:20}}>
                <TransactionOption
                title="Total Success Fee"
                color={colors.primary}
                price="100,000"
                filterText="Selling"
                />
                <TransactionOption
                title="Success Fee Paid"
                color="#27AE60"
                price="50,000"
                filterText="Selling"
                />
                <TransactionOption
                title="Success Fee Not Paid"
                color="#F2994A"
                price="50,000"
                filterText="Selling"
                />
            </View>
        </View>
    )
}

export default TransactionSellingScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    view:{
        paddingTop:15,
        backgroundColor:colors.secondary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:30
    },
    container:{
        borderBottomWidth:2, 
        borderBottomColor:colors.secondary,
        padding:10,
        alignItems:"center"
    },
    activeContainer:{
        borderBottomColor:colors.primary,
        borderBottomWidth:2,
        padding:10,
        alignItems:"center"
    },
    text:{
        fontSize:fontSize.h4,
        fontFamily:fontFamily.primaryRegular,
        color:colors.textLight
    },
    activeText:{
        fontSize:fontSize.h4,
        fontFamily:fontFamily.primaryRegular,
        color:colors.primary
    }
})
