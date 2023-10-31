import React from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../consts/colors';
import products from '../consts/Products';


const ProductListCard = ({ item, getData }) => {
    let url;
    // const key = item._id;
    const navigation = useNavigation();
    products.map((item1) => {
        if (item.productName === item1.productName) {
            url = item1.image;
        }
    });

    // const deleteData = (id) => async () => {
    //     console.log('in delete function');
    //     try {
    //         await axios.delete(`http://192.168.205.78:3000/product/${id}`);
    //         // Alert.alert("Package Details Deleted Successfully");
    //         getData();
    //         console.log("Package Details Deleted");
    //     } catch (err) {
    //         // Alert.alert("Error occurred while deleting the details");
    //         console.error('Error: Error occurred while deleting the details', err);
    //     }
    // }
    const deleteData = async (id) => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this product?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        await axios.delete(`http://172.28.14.90:3000/product/${id}`)
                            .then(() => {
                                Alert.alert("product Details Deleted Successfully");
                                getData();
                                console.log("product Details Deleted");
                            })
                            .catch((err) => {
                                Alert.alert("Error occurred while deleting the details");
                                console.error('Error:Error occurred while deleting the details', err);
                            });
                    },
                },
            ]
        );
    };


    return (
        <View style={style.topFoodCard}>
            <View style={{ borderBottomWidth: 1.5, borderRadius: 10, borderColor: COLORS.primary, }}>
                <Image style={style.topFoodCardImage} source={url && url.uri ? { uri: url.uri } : null} resizeMode='contain' />
            </View>

            <View style={{ paddingVertical: 5, paddingHorizontal: 10, flex: 1 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{item.productName}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{item.productType}</Text>
                </View>


                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Price Rs.{item.displayedPrice}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Offer {item.offerRate}%</Text>
                </View>

                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? COLORS.secondary : COLORS.primary,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 70,
                                height: 30,
                                borderRadius: 15
                            },
                        ]}
                        onPress={() => navigation.navigate('UpdateOffer', { ...item })}>
                        <Text style={{ color: 'white' }}>Update</Text>
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
                        onPress={() => {
                            // const innerFunction = deleteData(item._id);
                            // innerFunction();
                            deleteData(item._id);
                            console.log('bottum pressed');
                        }}>
                        <Text style={{ color: 'white' }}>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}
const style = StyleSheet.create({
    topFoodCard: {
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'column',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: COLORS.primary,
        marginTop: 10
    },
    topFoodCardImage: {
        marginTop: 10,
        height: 100,
        // width: 100,
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
export default ProductListCard