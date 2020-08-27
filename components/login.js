import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button, Alert } from "react-native";

export default function Login({ navigation }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const validateUser = () => {
        if (userName === 'asha' && password === 'latha') {
            console.log('valid')
            navigation.navigate('DisplayProducts')
        }
        else {
            alert('Enter valid details')
        }
    }

    return (
        <View>
            <TextInput
                style={mystyles.input}
                placeholder='Enter username....'
                onChangeText={(val) => setUserName(val)}
            ></TextInput>
            <TextInput
                style={mystyles.input}
                placeholder='Enter password....'
                onChangeText={(val) => setPassword(val)}
            ></TextInput>

            <Button color='coral'
                title="Login"
                onPress={() => validateUser()}
            />
        </View>
    )
}

const mystyles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 20
    },
})