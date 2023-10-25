import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Pressable, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import UploadImageScreen from '../../components/Upload.js';

const AddOfferPage = ({ navigation }) => {

    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [price, setPrice] = useState('');
    const [offerRate, setOfferRate] = useState('');
    const [productDescription, setProductDescription] = useState('');

    // State to store validation errors
    const [errors, setErrors] = useState({});


    const [commission, setCommission] = useState();
    const [displayPrice, setDisplayPrice] = useState();

    const calculate = ()=>{
        let price_value=Number(price);    
    }
    const handleNext = () => {

    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <View style={style.innercontainer}>
                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Upload Photos / Flyers </Text>
                    </View>
                    <UploadImageScreen />
                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Product Details </Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Product Name </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Product Name"
                            keyboardType='default'
                            value={productName}
                            onChangeText={(value)=>setProductName(value)}

                        />
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Product Type </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Product Type"
                            keyboardType='default'
                            value={productType}
                            onChangeText={(value)=>setProductType(value)}

                        />
                    </View>
                    <View style={[style.fieldContainer, {}]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Price </Text>
                            <TextInput
                                style={[style.inputBox, { width: 150 }]}
                                placeholder="Rs."
                                keyboardType='number-pad'
                                value={price}
                                onChangeText={(value) => setPrice(value)}
                                maxLength={5}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Offer Rate </Text>
                            <TextInput
                                style={[style.inputBox, { width: 150 }]}
                                placeholder="%"
                                keyboardType='number-pad'
                                value={offerRate}
                                onChangeText={(value) => setOfferRate(value)}
                                maxLength={2}
                            />
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 4, borderColor: COLORS.primary, marginTop: 30 }} />
                    <View style={[style.fieldContainer, {}]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Commission </Text>
                            <TextInput
                                style={[style.inputBox1, { width: 150 }]}
                                editable={false}
                                value={commission}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Display Price</Text>
                            <TextInput
                                style={[style.inputBox1, { width: 150 }]}
                                editable={false}
                                value={displayPrice}
                            />
                        </View>
                    </View>


                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Add Product Discription </Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Product Discription </Text>
                        <TextInput
                            style={[style.inputBox, { height: 100, textAlignVertical: 'top' }]}
                            placeholder="Enter Product Discription"
                            autoCapitalize="sentences"
                            autoCorrect={true}
                            multiline={true}
                            numberOfLines={10}
                            maxLength={500}
                        />
                    </View>

                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                        },
                        style.btn, { alignSelf: 'center', marginTop: 50 }
                    ]}
                        onPressOut={handleNext}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Next</Text>
                    </Pressable>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    headcontainer: {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderLeftWidth: 4,
        borderColor: COLORS.primary,
        elevation: 20,
        shadowColor: COLORS.primary

    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary
    },
    innercontainer: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white'
    },

     inputBox: {
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderColor: COLORS.primary
    },
    inputBox1: {

        padding: 8,
        marginHorizontal: 5,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderColor: COLORS.primary
    },
    inputLabel: {
        fontSize: 18,
        padding: 5,
        marginBottom: 5,
        marginHorizontal: 5,
    },
    fieldContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    btn: {
        height: 45,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 15,
        borderRadius: 15,
        elevation: 10,
    },
    img: {
        marginTop: 10,
        height: 250,
        width: "100%"
    },
})

export default AddOfferPage;