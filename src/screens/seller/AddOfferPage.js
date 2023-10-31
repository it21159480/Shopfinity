import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Pressable, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

import ProductImageUploader from '../../components/ProductImageUploader';

const AddOfferPage = ({ navigation }) => {

    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [offerRate, setOfferRate] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [displayedPrice, setDisplayedPrice] = useState('');
    const [upload, setUpload] = useState(false);
    

    // State to store validation errors
    const [errors, setErrors] = useState({
        productName: '',
        originalPrice: '',
        offerRate: '',
        productType:'',
        productDescription:'',
    });
   
    useEffect(() => {
        calculateDisplayedPrice();
      }, [originalPrice, offerRate]);
    
    const calculateDisplayedPrice = () => {
        if (originalPrice && offerRate) {
          const originalPriceFloat = parseFloat(originalPrice);
          const offerRateFloat = parseFloat(offerRate);
      
          if (!isNaN(originalPriceFloat) && !isNaN(offerRateFloat)) {
            const commission = originalPriceFloat * 0.08; // 8% commission
            const discountedPrice = originalPriceFloat - (originalPriceFloat * (offerRateFloat / 100));
            const calculatedPrice = discountedPrice + commission; // Add commission to the discounted price
      
            setDisplayedPrice(calculatedPrice.toFixed(2)); // Display price with two decimal places
          }
        }
      };
      const validateForm = () => {
        const errors = {};

        if (!productName) {
            errors.productName = 'Product Name is required.';
        }

        if (!productType) {
            errors.productType = 'Product Type is required.';
        }

        if (!originalPrice) {
            errors.originalPrice = 'Price is required.';
        } else if (isNaN(parseFloat(originalPrice))) {
            errors.originalPrice = 'Price must be a valid number.';
        }
    
        if (!offerRate) {
            errors.offerRate = 'Offer Rate is required.';
        } else if (isNaN(parseFloat(offerRate))) {
            errors.offerRate = 'Offer Rate must be a valid number.';
        }

        if (!productDescription) {
            errors.productDescription = 'Product Description is required.';
        } else if (productDescription.length > 500) {
            errors.productDescription = 'Product Description cannot exceed 500 characters.';
        }

        
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return false;
        } else {
            // Form is valid, you can proceed with navigation or other actions
            console.log('Form is valid. Navigating to the next screen...');
            return true;
        }
    
    
    
    } 
    const sendData = async () => {
        const newProduct = {
            productName,
            productType, 
            originalPrice, 
            offerRate, 
            displayedPrice,
            productDescription,
        }
    
        await axios.post("http://172.28.14.90:3000/product", newProduct)
          .then((response) => {
            console.log('Server Response orderd Successfully:', response.data);
            alert("orderd Successfully");
          
          })
          .catch((error) => {
            alert("Oreder Error")
            console.error('Oreder Error:', error);
          });
      }
    
    
    const handleSubmit = () => {
        const isValid = validateForm();
        if(!isValid){
            console.log("not valid form");
        } else {
            sendData();
            navigation.navigate('Product', { key: Math.random() });
        }
        
    };
    
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <View style={style.innercontainer}>
                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Upload Photos / Flyers </Text>
                    </View>
                    <ProductImageUploader onUpload={()=>setUpload(true)} />
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
                            autoCapitalize='words'
                            onChangeText={(text)=>setProductName(text)}
                        />
                        <Text style={style.errorText}>{errors.productName}</Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Product Type </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Product Type"
                            keyboardType='default'
                            value={productType}
                            onChangeText={(text)=>setProductType(text)}
                        />
                        <Text style={style.errorText}>{errors.productType}</Text>
                    </View>
                    <View style={[style.fieldContainer, {}]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Price </Text>
                            <TextInput
                                style={[style.inputBox, { width: 150 }]}
                                placeholder="Rs."
                                keyboardType='number-pad'
                                value={originalPrice}
                                onChangeText={(text) => setOriginalPrice(text)}
                                maxLength={5}
                            />                                                     
                      </View>
                        <Text style={style.errorText}>{errors.originalPrice}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Offer Rate </Text>
                            <TextInput
                                style={[style.inputBox, { width: 150 }]}
                                placeholder="%"
                                keyboardType='number-pad'
                                value={offerRate}
                                onChangeText={(text) => setOfferRate(text)}
                                maxLength={2}
                            />
                             
                        </View>
                        <Text style={style.errorText}>{errors.offerRate}</Text>
                    </View>
                    <View style={{ borderBottomWidth: 4, borderColor: COLORS.primary, marginTop: 30 }} />
                    <Text style={{fontStyle:'italic',fontWeight:'200'}}>[Display price is added with commision]</Text>
                    <View style={[style.fieldContainer, {}]}>      
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={[style.inputLabel, { alignSelf: 'flex-end' }]}>Display Price</Text>
                            <Text style={[style.inputBox1, { width: 150 }]}>Rs.{displayedPrice}</Text>
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
                            value={productDescription}
                            onChangeText={(text) => setProductDescription(text)}
                        />
                        <Text style={style.errorText}>{errors.productDescription}</Text>
                    </View>

                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                        },
                        style.btn, { alignSelf: 'center', marginTop: 50 }
                    ]}
                        onPressOut={handleSubmit}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Submit</Text>
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
    errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 5,
    },
})

export default AddOfferPage;