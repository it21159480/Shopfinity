import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isRevenuePressed, setIsRevenuePressed] = useState(false);
  const [isBankDetailsPressed, setIsBankDetailsPressed] = useState(false);
  const [isUserIDVerificationPressed, setIsUserIDVerificationPressed] = useState(false);
  const [isOrderPressed, setIsOrderPressed] = useState(false);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView>
        <View style={{ marginTop: 20,}}>
          <View style={[style.navbox, { backgroundColor: 'white' }]} >
            <Image source={require('../../assets/profile.png')} style={[style.img]} resizeMode='contain' />
            <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}> SHop name</Text>
          </View>
          <View style={style.container}>
            <Pressable
              onPressIn={() => setIsOrderPressed(true)}
              onPressOut={() => {
                setIsOrderPressed(false);
                // Assuming you want navigation to occur on release
              }}>
              <View style={{ flexDirection: 'row',alignSelf:'center',backgroundColor: isOrderPressed ? COLORS.grey : COLORS.white , borderRadius:10 }}>
                <Text style={style.title}>Order Status</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
              </View>
            </Pressable>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={style.statusContainer}>
                <Text style={style.statusNumber}>1</Text>
                <Text style={style.statusLabel}>Pending</Text>
              </View>
              <View style={style.statusContainer}>
                <Text style={style.statusNumber}>45</Text>
                <Text style={style.statusLabel}>Complete</Text>
              </View>
              <View style={style.statusContainer}>
                <Text style={style.statusNumber}>0</Text>
                <Text style={style.statusLabel}>Reject</Text>
              </View>
            </View>
          </View>
          <Pressable
            onPressIn={() => setIsRevenuePressed(true)}
            onPressOut={() => {
              setIsRevenuePressed(false);
              // Assuming you want navigation to occur on release
            }}>
            <View style={[style.navbox, { paddingLeft: 25, paddingBottom: 25, paddingTop: 25, backgroundColor: isRevenuePressed ? COLORS.grey : COLORS.white , marginTop:30}]} >
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="line-chart" size={35} color="black" />
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}> Revenue</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{ alignSelf: 'center', paddingLeft: 135 }} />
              </View>

            </View>
          </Pressable>
          <Pressable
            onPressIn={() => setIsBankDetailsPressed(true)}
            onPressOut={() => {
              setIsBankDetailsPressed(false);
              // Assuming you want navigation to occur on release
            }}>
            <View style={[style.navbox, { padding: 20, backgroundColor: isBankDetailsPressed ? COLORS.grey : COLORS.white }]} >
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="bank" size={40} color="black" />
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}> Add Bank Details</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{ alignSelf: 'center', marginLeft: 65 }} />
              </View>
            </View>
          </Pressable>
          <Pressable
            onPressIn={() => setIsUserIDVerificationPressed(true)}
            onPressOut={() => {
              setIsUserIDVerificationPressed(false);
              // Assuming you want navigation to occur on release
            }}>
            <View style={[style.navbox, { padding: 20, backgroundColor: isUserIDVerificationPressed ? COLORS.grey : COLORS.white , marginBottom:40}]} >
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="id-badge" size={40} color="black" style={{ alignSelf: 'center', marginLeft: 7 }} />
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginLeft: 15 }}> User ID Verification</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{ alignSelf: 'center', marginLeft: 45 }} />
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}
const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop:20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 15
  },
  title: {
    flex: 2,
    fontSize: 16,
  },
  arrow: {
    marginRight: 15,
    fontSize: 18,
  },
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
  navtext: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'normal'
  },

  navbox: {
    
    margin: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 15,
    elevation: 10,
    shadowColor: COLORS.dark,

  },
  img: {
    // marginTop: 10,
    height: 100,
    width: 70,
    // padding:10,
    overflow: 'hidden',
    marginLeft: 20

  },
})
export default Home;