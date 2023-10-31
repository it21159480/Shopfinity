import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const LoginPage = ({ navigation }) => {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    // // const validateUserName = () => {
    // //     if (userName === null) return;
    // //     if (!userName || userName.trim() === "") {
    // //         setUserNameError("Username is required!");
    // //     } else {
    // //         setUserNameError(null);
    // //     }
    // // };
    // // const validatePassword = () => {
    // //     if (password === null) return;
    // //     if (!password || password.trim() === "") {
    // //         setPasswordError("Password is required!");
    // //     } else if (password.length < 8) {
    // //         setPasswordError("Password must be at least 8 - 20 characters long!");
    // //     } else if (!/[!@#$%&?:]/.test(password)) {
    // //         setPasswordError("Password must contain at least one of this ! @ # $ % & ? : special character!");
    // //     } else if (!/[0-9]/.test(password)) {
    // //         setPasswordError("Password must contain at least one number!");
    // //     } else {
    // //         setPasswordError(null);
    // //     }
    // // };

    // useEffect(() => {
    //     setTimeout(validateUserName, 0);
    // }, [userName]);

    // useEffect(() => {
    //     validatePassword();
    // }, [password]);
    const credential =() =>{
        if (userName == 'Mufeel' && password == 'Mufeel'){
            navigation.navigate('DashBoard');
        }else{
            alert('Invalid Username or Password');
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ marginTop: 2, height: '100%', }}>
                    <View>
                        <Image source={require('../../assets/seller.png')} style={style.img} resizeMode='contain' />
                    </View>
                    <View style={{ marginHorizontal: 10, padding: 10, marginVertical: 30 }}>
                        <View>
                            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '700' }}>User Name</Text>
                            <TextInput
                                style={[style.input, userNameError ? { borderColor: 'red' } : {}]}
                                placeholder=" Enter your username"
                                value={userName}
                                keyboardType={'default'}
                                onChangeText={(text) => { setUserName(text); }}

                            />
                            {userNameError && <Text style={{ color: 'red', marginLeft: 10 }}>{userNameError}</Text>}

                            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '700' }}>Password</Text>
                            <TextInput
                                style={[style.input, passwordError ? { borderColor: 'red' } : {}]}
                                placeholder=" Enter your password"
                                value={password}
                                keyboardType={'default'}
                                secureTextEntry={true}
                                maxLength={20}
                                onChangeText={(text) => { setPassword(text); }}

                            />
                            {passwordError && <Text style={{ color: 'red', marginLeft: 10 }}>{passwordError}</Text>}

                        </View>

                        <View style={{ alignSelf: 'flex-end' }}>
                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#e0f4f1' : 'white',
                                },
                                {}
                            ]}>
                                <Text style={{ fontSize: 15, marginRight: 15 }}>forgot password?</Text>
                            </Pressable>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                                },
                                style.btn,
                            ]}
                                onPressOut={() => credential()}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                            </Pressable>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ fontSize: 15 }}> Don't have an account yet?</Text>

                                <Pressable style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? '#e0f4f1' : 'white',
                                    },

                                ]}
                                    onPressOut={() => navigation.navigate('RegDetailsPage')}><Text style={{ color: '#0066FE', fontSize: 15 }} > Sign up now!</Text></Pressable>

                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
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
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        borderBottomWidth: 2,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#3A95C2',
        paddingLeft: 10,
        padding: 7,
        backgroundColor: '#f5f5f5',
    },
    img: {
        marginTop: 10,
        height: 250,
        width: "100%"
    },
})
export default LoginPage