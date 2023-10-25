import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RegDetailsPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <View style={{ marginTop: 2,   }}>

                    <View >
                        <Image source={require('../../assets/reg.png')} style={style.img} resizeMode='contain' />
                    </View>
                    <View style={{ padding: 10, marginVertical: 40, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', marginBottom: 20, }}>
                            <MaterialCommunityIcons name="numeric-1-circle" size={50} color="#3FB8EE" />
                            <Text style={{ fontSize: 20, textAlignVertical: 'center' }}>Add Business Details</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <MaterialCommunityIcons name="numeric-2-circle" size={50} color="#3FB8EE" />
                            <Text style={{ fontSize: 20, textAlignVertical: 'center', }}>Upload Government{"\n"}Registration Certificate</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <MaterialCommunityIcons name="numeric-3-circle" size={50} color="#3FB8EE" />
                            <Text style={{ fontSize: 20, textAlignVertical: 'center' }}>Create valid Username{"\n"} & Password</Text>
                        </View>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                            },
                            style.btn,
                        ]}
                        onPressOut={()=>navigation.navigate('BusinessDetailsform')}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Start</Text>
                        </Pressable>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
   
    inputBox: {
        backgroundColor: 'rgba(217, 217, 217, 0.31)',
        padding: 8,
        borderRadius: 10,
        borderBottomWidth: 4,
        borderColor: COLORS.primary
    },
    inputLabel: {
        fontSize: 15,
        padding: 5,
        marginBottom: 5,
        fontWeight: 'bold'
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
        marginVertical: 55,
        borderRadius: 15,
        elevation: 10,
    },
    img: {
        marginTop: 10,
        height: 250,
        width: "100%"
    },
})

export default RegDetailsPage