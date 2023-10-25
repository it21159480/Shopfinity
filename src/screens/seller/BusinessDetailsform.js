import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Pressable, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import UploadImageScreen from '../../components/Upload.js';

const BusinessDetailsform = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [shope, setShop] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [brach, setBranch] = useState();
    const currentDate = new Date();
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');  // For iOS, we need to handle the modal visibility differently
        setDate(currentDate);
    };

    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <View style={style.innercontainer}>
                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Business Details Form</Text>
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Business / Shop Name </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Business / Shop Name"
                        />
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Contact number </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Contact number"
                        />
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Email Address </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter valid email"
                        />
                    </View>
                    <View style={style.fieldContainer}>
                        <Text style={style.inputLabel}>Business / Shop Address </Text>
                        <TextInput
                            style={style.inputBox}
                            placeholder="Enter Business / Shop Address"
                        />
                    </View>
                    <View style={[style.fieldContainer, { flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                        <View>
                            <Text style={style.inputLabel}>Branch </Text>
                            <TextInput
                                style={[style.inputBox, { width: 150 }]}
                                placeholder="Brach Name"
                            />
                        </View>
                        <View>
                            <Text style={style.inputLabel}>Registration Date </Text>
                            <View style={[style.inputBox, {flexDirection: 'row', justifyContent:'space-between'}]}>                            
                                <TextInput                              
                                    placeholder="YY/MM/DD"
                                    value={formattedDate}   // Displaying the formatted date here
                                    editable={false}
                                />
                               <MaterialCommunityIcons name="calendar-month" size={30} color="black" onPress={() => setShow(true)} />
                            </View>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                                maximumDate={currentDate}
                            />
                        )}
                    </View>
                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Upload Registration Certificate</Text>
                    </View>
                    <UploadImageScreen />
                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                        },
                        style.btn, { alignSelf: 'center', marginTop: 50 }
                    ]}
                        onPressOut={() => navigation.navigate('CreateCredential')}>
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
    img: {
        marginTop: 10,
        height: 250,
        width: "100%"
    },
})

export default BusinessDetailsform;