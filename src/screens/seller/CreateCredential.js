import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';


const CreateCredential = ({ navigation }) => {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const validateUserName = () => {
        if (userName === null) return;
        if (!userName || userName.trim() === "") {
            setUserNameError("Username is required!");

        } else {
            setUserNameError(null);
        }
    };
    const validatePassword = () => {
        if (password === null) return;
        if (!password || password.trim() === "") {
            setPasswordError("Password is required!");
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 - 20 characters long!");
        } else if (!/[!@#$%&?:]/.test(password)) {
            setPasswordError("Password must contain at least one of this ! @ # $ % & ? : special character!");
        } else if (!/[0-9]/.test(password)) {
            setPasswordError("Password must contain at least one number!");
        } else {
            setPasswordError(null);
        }
    };
    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords don't match!");
        } else {
            setConfirmPasswordError(null);
        }
    };

    useEffect(() => {
        setTimeout(validateUserName, 0);
    }, [userName]);

    useEffect(() => {
        validatePassword();
    }, [password]);
    useEffect(() => {
        validateConfirmPassword();
    }, [confirmPassword]);
const handleSignup = ()=>{
    //call api to sign up the user with username and password
    
}
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <View style={{ marginTop: 2, height: '100%', backgroundColor: 'white' }}>
                    <View style={{}}>
                        <Image source={require('../../assets/credentials.png')} style={style.img} resizeMode='contain' />
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
                            <View style={[style.input, passwordError ? { borderColor: 'red' } : {}]}>
                                <TextInput
                                    placeholder=" Enter your password"
                                    value={password}
                                    secureTextEntry={!isPasswordVisible}
                                    maxLength={20}
                                    onChangeText={(text) => { setPassword(text); }}
                                />
                                <Pressable onPress={() => setIsPasswordVisible(prevState => !prevState)}>
                                    <Text>{isPasswordVisible ?  <Ionicons name="eye-outline" size={20} color="black" />:<Ionicons name="eye-off-outline" size={20} color="black" />}</Text>
                                </Pressable>
                            </View>
                            {passwordError && <Text style={{ color: 'red', marginLeft: 10 }}>{passwordError}</Text>}
                            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '700' }}>Confirm Password</Text>
                            <View style={[style.input, confirmPasswordError ? { borderColor: 'red' } : {}]}>
                                <TextInput
                                    placeholder=" Re-enter your password"
                                    value={confirmPassword}
                                    onChangeText={(text) => { setConfirmPassword(text); }}
                                    onBlur={validateConfirmPassword}
                                    secureTextEntry={!isConfirmPasswordVisible}
                                />
                                <Pressable onPress={() => setIsConfirmPasswordVisible(prevState => !prevState)}>
                                    <Text>{isConfirmPasswordVisible ? <Ionicons name="eye-outline" size={20} color="black" /> : <Ionicons name="eye-off-outline" size={20} color="black" />}</Text>
                                </Pressable>
                            </View>
                            {confirmPasswordError && <Text style={{ color: 'red', marginLeft: 10 }}>{confirmPasswordError}</Text>}
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#e0f4f1' : '#245E8F',
                                },
                                style.btn,
                            ]}
                                onPressOut={handleSignup}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sign Up</Text>
                            </Pressable>
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
        width: "100%",

    },
})
export default CreateCredential;