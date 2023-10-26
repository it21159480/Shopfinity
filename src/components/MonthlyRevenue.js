import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import COLORS from '../consts/colors';
import { Menu, IconButton, Provider } from 'react-native-paper';
import { shareAsync } from 'expo-sharing';
import * as Print from 'expo-print';
import Chart from './ChartComponent';


const MonthlyRevenue = ({ navigation, list }) => {

    const item = list;
    const [data, setData] = useState(item);
    const [menuVisible, setMenuVisible] = useState(false);
    const [sortOrder, setSortOrder] = useState(null);
    const sortBy = (order) => {
        const sorted = [...data].sort((a, b) => {
            if (order === 'asc') {
                return a.month.localeCompare(b.month);
            } else if (order === 'desc') {
                return b.month.localeCompare(a.month);
            }
            return 0; // default to original order
        });
        setData(sorted);
        setSortOrder(order);
    };
    const Card = ({ lists }) => {

        const getBorderColor = () => {
            if (lists.sta === 'Paid') {
                return 'green';
            } else if (lists.sta === 'Pending') {
                return 'orange';
            } else {
                return 'white';
            }
        };

        return (

            <View style={[style.topFoodCard, { borderColor: getBorderColor() }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginRight: 10 }}>{lists.month}</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: 'bold', marginTop: 5 }} >{lists.year}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Rs. {lists.amount} </Text>
                </View>
                <View style={{ borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: getBorderColor(), alignSelf: 'center', paddingBottom: 2, marginLeft: 10 }}>{lists.sta}</Text>
                    <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? COLORS.light : COLORS.dark, marginTop: 10, borderRadius: 8, })}
                        onPress={() => print(lists)}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: COLORS.white, alignSelf: 'center', padding: 4, }}>Print Revenue</Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    const print = async (lists) => {
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
                <tr>
                    <td>${lists.year}</td>
                    <td>${lists.month}</td>
                    <td>Rs.${lists.amount}</td>
                    <td>${lists.sta}</td>
                </tr>
            </table>
        </body>
        </html>
    `;
        await Print.printAsync({
            html,
        });
    };
    const share = async () => {
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 10, height: 50 }}>
                <Text style={{ marginTop: 10, }}>Sort by</Text>
                <Menu
                    visible={menuVisible}
                    onDismiss={() => setMenuVisible(false)}
                    anchor={
                        <IconButton
                            icon="sort"
                            size={24}
                            onPress={() => setMenuVisible(!menuVisible)}
                        />
                    }
                >
                    <Menu.Item onPress={() => sortBy('asc')} title="Sort Ascending" />
                    <Menu.Item onPress={() => sortBy('desc')} title="Sort Descending" />
                    <Menu.Item onPress={() => { setData(item); setSortOrder(null); }} title="Reset" />
                </Menu>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: 30,

                    }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Card lists={item} />}
                />
            </View>
        </SafeAreaView >
    );

}

const style = StyleSheet.create({
    navbox: {
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        elevation: 10,
        shadowColor: COLORS.dark,

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

    topFoodCard: {
        height: 110,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        borderLeftWidth: 4
    },
})
export default MonthlyRevenue;