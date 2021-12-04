import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View, CheckBox } from 'react-native'
import { useSelector } from 'react-redux'
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, fontFamily, fontSize } from '../../../commonStyle'
import TransactionHeader from '../TransactionHeader'
import MyEarningDetails from './MyEarningDetails';

const MyEarningsScreen = () => {

    const [successFeePaid, setSuccessFeePaid]= useState(false)
    const [successFeeNotPaid, setSuccessFeeNotPaid]= useState(false)
    const [buying, setBuying]= useState(false)
    const [selling, setSelling]= useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [transaction] = useSelector((state)=>state.transaction.transaction)

    const closeHandle=()=>{
        setIsOpen(false);
    }

    const applyAllHandler=()=>{
        setBuying(true);
        setSelling(true);
        setSuccessFeeNotPaid(true)
        setSuccessFeePaid(true);
    }

    const filterHandler=()=>{
        setIsOpen(false);
    }

    return (
        <View style={styles.screen}>
            <TransactionHeader
            headingText="My Earnings"
            />
            <View style={styles.view}>
                <View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={styles.filter}>
                            <Text style={{fontSize:fontSize.h5, color:colors.secondary, marginRight:3}}>{transaction.filterText}</Text>
                            <AntDesign
                            name="close"
                            size={15}
                            color={colors.secondary}
                            />
                        </View>
                        {((transaction.title==="Total Success Fee") || (transaction.title==="Success Fee Paid"))
                        && 
                        <View style={{marginLeft:10}}>
                            <View style={styles.filter}>
                                <Text style={{fontSize:fontSize.h5, color:colors.secondary, marginRight:3}}>Success Fee Paid</Text>
                                <AntDesign
                                name="close"
                                size={15}
                                color={colors.secondary}
                                />
                            </View>
                        </View>
                        }
                    </View>
                    {((transaction.title==="Total Success Fee") || (transaction.title==="Success Fee Not Paid"))
                        && 
                        <View style={styles.filter1}>
                            <Text style={{fontSize:fontSize.h5, color:colors.secondary, marginRight:3}}>Success Fee Not Paid</Text>
                            <AntDesign
                            name="close"
                            size={15}
                            color={colors.secondary}
                            />
                        </View>
                        }
                </View>
                <TouchableOpacity
                 onPress={()=>setIsOpen(true)}
                 style={{backgroundColor:colors.secondary, borderRadius:4, padding:12, flexDirection:"row", alignItems:"center", borderColor:colors.textPrimary, borderWidth:1}}>
                    <Ionicons
                    name="filter"
                    size={20}
                    color="#525050"
                    />
                    <Text style={{marginLeft:6, fontSize:11, fontFamily:fontFamily.primaryBold, color:colors.textPrimary}}>Filters</Text>
                </TouchableOpacity>
            </View>
            {(transaction.title==="Total Success Fee") && 
            <View style={styles.view1}>
                <MyEarningDetails
                text="Success Fee Paid"
                priceColor="#219653"
                />
                <MyEarningDetails
                text="Success Fee Not Paid"
                priceColor="#F2994A"
                />
            </View>}
            {(transaction.title==="Success Fee Not Paid") && 
            <View style={styles.view1}>
                <MyEarningDetails
                text="Success Fee Not Paid"
                priceColor="#F2994A"
                />
            </View>}
            {(transaction.title==="Success Fee Paid") && 
            <View style={styles.view1}>
                <MyEarningDetails
                text="Success Fee Paid"
                priceColor="#219653"
                />
            </View>}
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle}
            transparent={true}
            visible={isOpen}
            >
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"space-between", borderBottomColor:colors.borderColor, borderBottomWidth:1, paddingBottom:20}}>
                            <Text style={{fontSize:fontSize.text, color:colors.textPrimary}}>Filters</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}
                            >
                                <AntDesign
                                name="close"
                                size={24}
                                color="#717171"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <View style={{borderBottomWidth:1, borderBottomColor:colors.borderColor}}>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Success Fee Paid</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={successFeePaid}
                                    onValueChange={(newValue)=>setSuccessFeePaid(newValue)}
                                    />
                                </View>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Success Fee Not Paid</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={successFeeNotPaid}
                                    onValueChange={(newValue)=>setSuccessFeeNotPaid(newValue)}
                                    />
                                </View>
                            </View>
                            <View style={{marginTop:10,borderBottomWidth:1, borderBottomColor:colors.borderColor}}>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Buying Role</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={buying}
                                    onValueChange={(newValue)=>setBuying(newValue)}
                                    />
                                </View>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Selling Role</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={selling}
                                    onValueChange={(newValue)=>setSelling(newValue)}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"center"}}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                                onPress={applyAllHandler}
                                >
                                    <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"600", fontSize:18, color:colors.primary, paddingHorizontal:50}}>Select All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={filterHandler}
                                activeOpacity={0.8} style={styles.button1}>
                                    <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"600", fontSize:18, color:colors.secondary, paddingHorizontal:60}}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default MyEarningsScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    filter:{
        backgroundColor: colors.primary,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:25,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    filter1:{
        backgroundColor: colors.primary,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:25,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:10,
        width:200
    },
    view:{
        padding:15, 
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:colors.textPrimary
    },
    view1:{
        marginVertical:30,
        paddingHorizontal:20
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginHorizontal:20,
        maxHeight: 400,
        elevation:5,
        padding:20,
        alignItems:"center"
    },
    content:{
        width:"100%",
        marginVertical:10
    },
    checkbox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:15
    },
    button:{
        backgroundColor:colors.secondary,
        borderRadius:10,
        paddingVertical:10,
        borderColor:colors.borderColor,
        borderWidth:1
    },
    button1:{
        backgroundColor:colors.primary,
        borderRadius:10,
        paddingVertical:10
    }
})
