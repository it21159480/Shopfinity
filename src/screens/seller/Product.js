import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Pressable, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors';
import { AntDesign } from '@expo/vector-icons';
import Products from '../../consts/Products'


const Product = ({ navigation }) => {
  const [isIconPressed, setIsIconPressed] = useState(false);

  const handleDelete = () => {

  }
  const TopFood = ({ products }) => {
    return (

      <View style={style.topFoodCard}>
        <View style={{ borderRightWidth: 1, borderRadius: 10, borderColor: COLORS.primary, }}>
          <Image style={style.topFoodCardImage} source={products.image} resizeMode='contain' />
        </View>

        <View style={{ paddingVertical: 5, paddingHorizontal: 10, flex:1}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold',  }}>{products.name}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{products.type}</Text>
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Price Rs.{products.price}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Offer {products.offer}</Text>
          </View>

          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between',marginBottom:2 }}>
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
              onPress={handleDelete}>
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
              onPress={handleDelete}>
              <Text style={{ color: 'white' }}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>

    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
      <View style={{ marginTop: 5, }}>
        <View style={[style.navbox, { paddingLeft: 25, paddingBottom: 25, paddingTop: 25, backgroundColor: COLORS.white }]} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left' }}> Add Offers</Text>
            <Pressable
              onPressIn={() => setIsIconPressed(true)}
              onPressOut={() => {
                setIsIconPressed(false);
                navigation.navigate('AddOfferPage')
                // Assuming you want navigation to occur on release
              }}>
              <AntDesign
                name={isIconPressed ? "pluscircle" : "pluscircleo"}
                size={30}
                color={isIconPressed ? COLORS.primary : COLORS.dark}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          </View>

        </View>
        <View style={[{ padding: 10, backgroundColor: COLORS.white, marginHorizontal: 20, borderRadius: 10, borderWidth: 2, borderColor: COLORS.primary }]} >
          <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}> Product List</Text>
        </View>

      </View>
      <FlatList
        data={Products}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: 40,
        }}
        renderItem={({ item }) => <TopFood products={item} />}
      />

    </SafeAreaView>
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
export default Product