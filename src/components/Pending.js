import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Pressable, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../consts/colors';
import { AntDesign } from '@expo/vector-icons';
// import Products from '../consts/Products'
import ProLists from '../consts/ProLists'

const Pending = ({ item }) => {
    const list = item
    const handleDelete = () => {

    }
    const TopFood = ({ products }) => {
        return (

            <View style={style.topFoodCard}>
                <View style={{ borderRightWidth: 1, borderRadius: 10, borderColor: COLORS.primary, }}>
                    <Image style={style.topFoodCardImage} source={products.image} resizeMode='contain' />
                </View>

                <View style={{ paddingVertical: 5, paddingHorizontal: 10, flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{products.name}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{products.type}</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Price Rs.{products.price}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Offer {products.offer}</Text>
                    </View>

                    <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? COLORS.secondary : 'green',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 70,
                                    height: 30,
                                    borderRadius: 15
                                },
                            ]}
                            onPress={handleDelete}>
                            <Text style={{ color: 'white' }}>Accepte</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? COLORS.secondary : 'red',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 70,
                                    height: 30,
                                    borderRadius: 15
                                },
                            ]}
                            onPress={handleDelete}>
                            <Text style={{ color: 'white' }}>Reject</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={list.slice(0,1)}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 20,
                    paddingBottom: 40,
                }}
                renderItem={({ item }) => <TopFood products={item} />}
            />
        </View>
    )
}
const style = StyleSheet.create({
    statusContainer: {
        flex: 1,
        alignItems: 'center',
    },
    statusNumber: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statusLabel: {
        marginTop: 5,
        fontSize: 14,
        color: '#7f7f7f',
    },
    title: {
        flex: 2,
        fontSize: 16,
    },
    container: {
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        elevation: 15,
        marginBottom: 20
    },
    topFoodCard: {
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: COLORS.orange,
        marginTop: 10
    },
    topFoodCardImage: {
        marginTop: 10,
        height: 100,
        width: 100,
        borderRadius: 10,
        marginBottom: 10
    },
    navtext: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'normal'
    },

    navbox: {
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        elevation: 10,
        shadowColor: COLORS.dark,

    },
    img: {
        height: 100,
        width: 70,
        overflow: 'hidden',
        marginLeft: 20

    },
})

export default Pending