import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, TextInput, Button} from "react-native";

export default function AddFriend(){
    return(
        <View backgroundColor='coral'>
            <Text styles={styles.input}>Products</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headers:{
        backgroundColor:'coral'
    },
    input:{

    }
})
  