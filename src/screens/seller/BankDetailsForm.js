import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, Pressable, Image } from 'react-native';
import COLORS from '../../consts/colors';
import { Picker } from '@react-native-picker/picker';

const BankDetailsForm = ({ navigation }) => {
    const [bankName, setBankName] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [errorMessages, setErrorMessages] = useState({
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        branchName: '',
    });
    const [selectedBank, setSelectedBank] = useState('');

    const predefinedBranches = {
        'Commercial Bank of Ceylon PLC': ['Select available branch', 'ACHCHUVELY BRANCH - (156)', 'MARADANA BRANCH - (032) ', 'MALABE BRANCH - (086)'],
        'Bank of Ceylon': ['Select available branch', 'Maradana Branch', 'Malabe Branch', 'Aluthgama Branch'],
        'Hatton National Bank PLC': ['Select available branch', 'World Trade Center Branch', 'Kollupitiya Branch', ' Rajagiriya Branch'],
        "People's Bank": ['Select available branch', ' Malabe SC Branch', 'Maradana Branch', 'Kollupitiya Coop House Branch'],
    };
    const handleNext = () => {
        if (validateForm()) {
            // Form is valid, navigate to the next screen or perform other actions
            // For example, you can navigate to another screen using navigation.navigate('NextScreenName');
            // navigation.navigate('NextScreenName');
            console.log('Form is valid. Navigating to the next screen...');
            alert('bank ditails sumbited succesfully')
            navigation.navigate('Home');
        } else {
            // Form has errors, handle them as needed (e.g., display error messages)
            console.log('Form has errors. Please correct the errors.');
        }
    };


    const validateForm = () => {
        const errors = {};

        if (!selectedBank) {
            errors.bankName = 'Please select a bank.';
        }

        if (!accountHolderName.trim()) {
            errors.accountHolderName = 'Account holder name is required.';
        } else if (accountHolderName.length < 3 || accountHolderName.length > 50) {
            errors.accountHolderName = 'Account holder name should be between 3 and 50 characters.';
        }

        if (!accountNumber) {
            errors.accountNumber = 'Account number is required.';
        } else if (!/^\d{16}$/.test(accountNumber)) {
            errors.accountNumber = 'Account number should be a 16-digit number.';
        }

        if (!branchName.trim()) {
            errors.branchName = 'Branch name is required.';
        }

        setErrorMessages(errors);

        return Object.keys(errors).length === 0;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={style.innercontainer}>
                    <View style={style.headcontainer}>
                        <Text style={style.heading}>Bank Details Form</Text>
                    </View>
                    <View style={{ elevation: 15, marginHorizontal: 15, borderRadius: 15,  }}>
                        <Image source={require('../../../assets/bank.png')} style={style.img} resizeMode='contain' />
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Bank Name</Text>
                        <Picker
                            mode='dropdown'
                            style={style.inputBox}
                            selectedValue={selectedBank}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedBank(itemValue);
                                // Set a predefined branch name when a bank is selected
                                setBranchName(predefinedBranches[itemValue][0]);
                            }}
                        >
                            <Picker.Item label="Select a Bank" value="" />
                            <Picker.Item label="Commercial Bank of Ceylon PLC" value="Commercial Bank of Ceylon PLC" />
                            <Picker.Item label="Bank of Ceylon" value="Bank of Ceylon" />
                            <Picker.Item label="Hatton National Bank PLC" value="Hatton National Bank PLC" />
                            <Picker.Item label="People's Bank" value="People's Bank" />
                        </Picker>
                        <Text style={style.errorText}>{errorMessages.bankName}</Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Account Holder Name</Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Account Holder Name"
                            value={accountHolderName}
                            onChangeText={(text) => setAccountHolderName(text)}
                        />
                        <Text style={style.errorText}>{errorMessages.accountHolderName}</Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Account Number</Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Account Number"
                            keyboardType="numeric"
                            value={accountNumber}
                            onChangeText={(text) => setAccountNumber(text)}
                        />
                        <Text style={style.errorText}>{errorMessages.accountNumber}</Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Branch Name</Text>
                        <Picker
                            mode='dropdown'
                            style={style.inputBox}
                            selectedValue={branchName}
                            onValueChange={(itemValue, itemIndex) => setBranchName(itemValue)}
                        >
                            {predefinedBranches[selectedBank] &&
                                predefinedBranches[selectedBank].map((branch, index) => (
                                    <Picker.Item key={index} label={branch} value={branch} />
                                ))}
                        </Picker>
                        <Text style={style.errorText}>{errorMessages.branchName}</Text>
                    </View>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                            },
                            style.btn,
                            { alignSelf: 'center', marginTop: 50 },
                        ]}
                        onPressOut={handleNext}
                    >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Submit</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    img: {
        // marginTop: 10,
        // height: 250,
        width: 'auto'

    },
    headcontainer: {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderLeftWidth: 4,
        borderColor: COLORS.primary,
        elevation: 20,
        shadowColor: COLORS.primary,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    innercontainer: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
    },
    inputBox: {
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderColor: COLORS.primary,
    },
    inputLabel: {
        fontSize: 18,
        padding: 5,
        marginBottom: 5,
        marginHorizontal: 5,
    },
    fieldContainer: {
        flex: 1,
        flexDirection: 'column',
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
    errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 5,
    },
});

export default BankDetailsForm;
