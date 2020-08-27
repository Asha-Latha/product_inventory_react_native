import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function AddProduct({ navigation }) {

    const [productName, setProductName] = useState('')
    const [productCategory, setproductCategory] = useState('')
    const [productDescription, setproductDescription] = useState('')
    const [productQuantity, setproductQuantity] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [productStock, setproductStock] = useState('')
    const [image, setImage] = useState('')

    const [addProducts, modifyAddProducts] = useState([])
    const captureFriend = (value) => {
        setProductDetails(value)
        console.log(productDetails);
    }
    const postDataUsingSimplePostCall = () => {
        axios.post('http://localhost:3000/addproducts', {
            image: image,
            productName: productName,
            productDescription: productDescription,
            productCategory: productCategory,
            productQuantity: productQuantity,
            productPrice: productPrice,
            productStock: productStock

        })
            .then(res => {
                console.log(res.data)
                navigation.navigate('DisplayProducts')
            })
    }
    return (

        <View>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add image URL....'
                onChangeText={(val) => setImage(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add new product name....'
                onChangeText={(val) => setProductName(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add new category....'
                onChangeText={(val) => setproductCategory(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add new description....'
                onChangeText={(val) => setproductDescription(val)}
            ></TextInput>
            <TextInput
                keyboardType="numeric"
                style={mystyles.inputFriend}
                placeholder='add new quantity....'
                onChangeText={(val) => setproductQuantity(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add stock....'
                onChangeText={(val) => setproductPrice(val)}
            ></TextInput>
            <TextInput
                keyboardType="numeric"
                style={mystyles.inputFriend}
                placeholder='add price...'
                onChangeText={(val) => setproductStock(val)}
            ></TextInput>
            <Button color='coral'
                title="Add Product"
                onPress={() => postDataUsingSimplePostCall()}
            />
        </View>
    )

}

const mystyles = StyleSheet.create({
    inputFriend: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 20
    },
})