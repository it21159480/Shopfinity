import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Pressable, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import UploadImageScreen from '../../components/Upload.js';

const IDVerfication = ({ navigation }) => {

    const [frontUploaded, setFrontUploaded] = useState(false);
    const [backUploaded, setBackUploaded] = useState(false);


    const handleNext = () => {
        if (frontUploaded && backUploaded) {
            alert('user ID sumbited succesfully')
            navigation.navigate('Home');
        } else {
            alert('Please upload both front and back of the NIC.');
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <View style={style.innercontainer}>
                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Upload NIC (Front) </Text>
                    </View>
                    <View style={{ height: 230 }}>
                    <UploadImageScreen onUpload={() => setFrontUploaded(true)} />
                    </View>

                    <View style={style.headcontainer} >
                        <Text style={style.heading}>Upload NIC (Back)  </Text>
                    </View>
                    <View style={{ height: 230 }}>
                    <UploadImageScreen onUpload={() => setBackUploaded(true)} />
                    </View>


                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                        },
                        style.btn, { alignSelf: 'center', marginTop: 50 }
                    ]}
                        onPressOut={handleNext}>
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

})

export default IDVerfication;