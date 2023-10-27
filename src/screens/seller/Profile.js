import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import COLORS from '../../consts/colors';


const Profile = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
      <ScrollView>
        <View style={{ marginTop: 2,  }}>
          <View >
            <ImageBackground source={require('../../assets/profile.png')} style={[style.img, { flexDirection: 'row-reverse', }]} resizeMode='contain' >

              <FontAwesome5 name="user-edit" size={25} color={COLORS.primary} style={{ marginRight: 10 }} onPress={()=>navigation.navigate('EditProfilePage')} />

            </ImageBackground>
            <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold'}}> Green Farm Super market</Text>
          </View>
          <View style={{ marginTop: 50, padding: 10, marginVertical: 30, }}>
            <View style={style.navbox}>
              <Text style={style.navtext}>Order</Text>
              <FontAwesome5 name="angle-right" size={24} color="black"  onPress={()=>navigation.navigate('OrdersPage')}/>
            </View>

            <View style={style.navbox}>
              <Text style={style.navtext}>My Products</Text>
              <FontAwesome5 name="angle-right" size={24} color="black" onPress={()=>navigation.navigate('Product')} />
            </View>
            <View style={style.navbox}>
              <Text style={style.navtext}>Logout</Text>
              <FontAwesome5 name="angle-right" size={24} color="black" onPress={()=>navigation.navigate('LoginPage')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}
const style = StyleSheet.create({
  navtext: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500'
  },

  navbox: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 15,
    elevation: 10,
    shadowColor:COLORS.dark,
    backgroundColor: COLORS.white
  },
  img: {
    marginTop: 10,
    height: 250,
    // width: "100%",
    overflow: 'hidden',
        
  },
})
export default Profile;