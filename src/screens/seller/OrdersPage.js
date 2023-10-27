import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Pressable, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors';
import { AntDesign } from '@expo/vector-icons';
import Products from '../../consts/Products'
import Pending from '../../components/Pending';
import Complete from '../../components/Complete';
import Reject from '../../components/Reject';

const OrdersPage = ({ navigation }) => {
  const [selectedComponent, setSelectedComponent] = useState('Pending');

  const handlePress = (componentName) => {
    setSelectedComponent(componentName);
  };
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ marginTop: 2, backgroundColor: 'white', flex: 1, }}>
        <View style={style.container}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={style.statusContainer}>
              <Text style={style.statusNumber}>1</Text>
              <Text style={style.statusLabel}>Pending</Text>
            </View>
            <View style={{ width: 1, height: 50, backgroundColor: COLORS.grey, }} />
            <View style={style.statusContainer}>
              <Text style={style.statusNumber}>45</Text>
              <Text style={style.statusLabel}>Complete</Text>
            </View>
            <View style={{ width: 1, height: 50, backgroundColor: COLORS.grey, }} />
            <View style={style.statusContainer}>
              <Text style={style.statusNumber}>0</Text>
              <Text style={style.statusLabel}>Reject</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'space-between',marginHorizontal:20, marginVertical:20}}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ?  COLORS.secondary :COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 30,
                borderRadius: 10,
                borderWidth:1,
                borderColor: COLORS.white 
              },
            ]}
            onPress={() => handlePress('Pending')}>
            <Text style={{ color: 'white' }}>Pendig</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ?  COLORS.secondary :COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 30,
                borderRadius: 10,
                borderWidth:1,
                borderColor: COLORS.white 
              },
            ]}
            onPress={() => handlePress('Complete')}>
            <Text style={{ color: 'white' }}>Complete</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor:pressed ?  COLORS.secondary :COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 30,
                borderRadius: 10,
                borderWidth:1,
                borderColor: COLORS.white 
              },
            ]}
            onPress={() => handlePress('Reject')}>
            <Text style={{ color: 'white' }}>Reject</Text>
          </Pressable>
        </View>
       
        <View style={{ flex: 1 }}>
          
          {selectedComponent === 'Pending' && <Pending item={Products} />}
          {selectedComponent === 'Complete' && <Complete item={Products} />}
          {selectedComponent === 'Reject' && <Reject item={Products} />}
        </View>

      </View>
    </SafeAreaView>
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
    borderColor: COLORS.primary,
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
export default OrdersPage