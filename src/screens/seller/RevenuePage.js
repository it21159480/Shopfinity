import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Pressable, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import COLORS from '../../consts/colors';
import Chart from '../../components/ChartComponent';
import MonthlyRevenue from '../../components/MonthlyRevenue';
import Revenue from '../../consts/Revenue';
import { Provider } from 'react-native-paper';
import * as Print from 'expo-print';


const RevenuePage = ({ navigation }) => {
  const item = Revenue;
 

  const html = `
  <html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <style>
          table {
              border-collapse: collapse;
              width: 100%;
          }
          th, td {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
          }
          tr:nth-child(even) {
              background-color: #f2f2f2;
          }
      </style>
  </head>
  <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
          Monthly Revenue Details
          <br>
          <span style="color:red; font-size: 30px"></span>
      </h1>
      <table>
          <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Amount</th>
              <th>Status</th>
          </tr>
          ${item.map((item) => `
              <tr>
                  <td>${item.year}</td>
                  <td>${item.month}</td>
                  <td>Rs.${item.amount}</td>
                  <td>${item.sta}</td>
              </tr>
          `).join('')}
      </table>
  </body>
  </html>
`;
  const printAll = async () => {
    await Print.printAsync({ html });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>


      <Provider>
        <View style={[style.navbox, { paddingBottom: 10, paddingTop: 10, backgroundColor: COLORS.white, alignItems: 'center' }]} >
          <Chart />
        </View>
        <View style={{ flex: 1 }}>
          <MonthlyRevenue navigation={navigation} list={item} />
        </View>
        <View>
          <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
            },
            style.btn, { alignSelf: 'center', marginTop: 10 }
          ]}
            onPressOut={() => printAll()}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Print All</Text>
          </Pressable>
        </View>
      </Provider>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
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
  navbox: {
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 10,
    shadowColor: COLORS.dark,
  },

})
export default RevenuePage;