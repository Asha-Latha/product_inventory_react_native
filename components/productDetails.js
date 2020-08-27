import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text,FlatList,TextInput, TouchableOpacity, ScrollView ,Button} from 'react-native';

export default function SelectedProductDetails(props,{navigation}){
    console.log(props);
      const product = props.route.params.item
    //  console.log(product)
    return(


        <View style={styles.root}>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Product Name:</Text>
    <TextInput
    
      value={product.productName}
      style={styles.textInput}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Category:</Text>
    <TextInput
     
      value={product.productCategory}
      style={styles.textInput}
      
    />
  </View>
   <View style={styles.rowContainer}>
    <Text style={styles.text}>Description:</Text>
    <TextInput
     
      value={product.productDescription}
      style={styles.textInput}
      
    />
  </View>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Price:</Text>
    <TextInput
     
      value={product.productPrice}
      style={styles.textInput}
      
    />
  </View>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Quantity</Text>
    <TextInput
     
      value={product.productQuantity}
      style={styles.textInput}
      
    />
  </View>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Stock</Text>
    <TextInput
     
      value={product.productStock}
      style={styles.textInput}
      
    />
  </View>
 
</View>

    )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: "column",
    },
    rowContainer: {
     
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    text: {
        textAlign:'center',
        marginLeft:20,
        marginTop:20,
        lineHeight: 30,
      flex: 1,
      color:'#21618C',
      fontSize:18,
      fontFamily: 'fontFamily',
      fontWeight: 'bold'
    },
    textInput: {
      flex: 1,
      marginLeft:20,
      marginTop:20,
      lineHeight: 30,
      fontSize:18,
      fontFamily: 'fontFamily',
      fontWeight: 'bold',
      color:'#808000',
      //backgroundColor: 'white', 
     // borderColor: 'black',
    }
  })
