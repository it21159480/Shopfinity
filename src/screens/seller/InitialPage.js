import { View, Text, StyleSheet, Pressable, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'



const InitialPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <ImageBackground
                    style={style.headerImage}
                    source={require('../../../assets/shopping.png')}
                />
                <View style={{ alignSelf: 'center', marginVertical: 30  }}>
                    <View style={style.topCard}>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#D2E6FF' : '#003B77',
                            },
                            style.btn,
                        ]} onPressOut={() => navigation.navigate('SellerScreen')}>
                            <Text style={style.textStyle}>Seller</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#D2E6FF' : '#003B77',
                            },
                            style.btn,
                        ]}>
                            <Text style={style.textStyle}>Buyer</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#D2E6FF' : '#003B77',
                            },
                            style.btn,
                        ]}>
                            <Text style={style.textStyle}>Driver</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
        elevation: 25,
        shadowColor: 'blue'
    },
    textStyle: {
        fontSize: 20,
        color: COLORS.white
    },
    btn: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 15,
        borderRadius: 13,
        elevation: 15,
    },
    topCard: {
        height: 230,
        width: 300,
        justifyContent: 'center',
      

    },
})

export default InitialPage