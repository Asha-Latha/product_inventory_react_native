import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function EditProduct(props, { navigation }) {
    const product = props.route.params.item
    console.log(props);
    const [productName, setProductName] = useState(product.productName)
    const [productCategory, setproductCategory] = useState(product.productCategory)
    const [productDescription, setproductDescription] = useState(product.productDescription)
    const [productQuantity, setproductQuantity] = useState(product.productQuantity)
    const [productPrice, setproductPrice] = useState(product.productPrice)
    const [productStock, setproductStock] = useState(product.productStock)
    const [image, setImage] = useState(product.image)
    
    const EditDataUsingEditAPICall = () => {
        let editProducts = {
            image: image,
            productName: productName,
            productDescription: productDescription,
            productCategory: productCategory,
            productQuantity: productQuantity,
            productPrice: productPrice,
            productStock: productStock
        }

        axios.put('http://localhost:3000/addproducts/' + product.id, editProducts)
            .then(response => {
                console.log(response);
                props.navigation.navigate('DisplayProducts');
            }, error => {
                console.error(error);
            })
    }

    return (
        <View>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add image URL....'
                defaultValue={product.image}
                onChangeText={(val) => setImage(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add new product name....'
                defaultValue={product.productName}
                onChangeText={(val) => setProductName(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add new category....'
                defaultValue={product.productCategory}
                onChangeText={(val) => setproductCategory(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add new description....'
                defaultValue={product.productDescription}
                onChangeText={(val) => setproductDescription(val)}
            ></TextInput>
            <TextInput
                keyboardType="numeric"
                style={mystyles.inputFriend}
                placeholder='add new quantity....'
                defaultValue={product.productQuantity}
                onChangeText={(val) => setproductQuantity(val)}
            ></TextInput>
            <TextInput
                style={mystyles.inputFriend}
                placeholder='add stock....'
                defaultValue={product.productPrice}
                onChangeText={(val) => setproductPrice(val)}
            ></TextInput>
            <TextInput
                keyboardType="numeric"
                style={mystyles.inputFriend}
                defaultValue={product.productStock}
                placeholder='add price...'
                onChangeText={(val) => setproductStock(val)}
            ></TextInput>
            <Button color='coral'
                title="Save Product"
                onPress={() => EditDataUsingEditAPICall()}
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
