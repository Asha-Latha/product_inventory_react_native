import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TextInput, TouchableOpacity, ScrollView, Button, Image } from 'react-native';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";


export default function DisplayProducts({ navigation }) {
  const [products, setProducts] = useState([]);
  const [searchproducts, setsearchproducts] = useState([]);
  const [valuesearch, setvaluesearch] = useState("");
  const [search, setsearch] = useState(false);
  const isFocused = useIsFocused();


  useEffect(() => {
    console.log("useef");
    getAllProducts();
  }, [isFocused]);

  const getAllProducts = () => {
    axios.get("http://localhost:3000/addproducts").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      console.log(products);
    });
  };
  const searchFunction = (value) => {
    let searchV = value;
    if (searchV === "") {
      getAllProducts();
      setsearchproducts(products);
      setsearchproducts(false);
    }
    setvaluesearch(searchV);
    console.log(searchV);
    let searchF = products.filter((p) => {
      console.log(p.ProductPrice);
      console.log(searchV);
      return (
        p.productName.toLowerCase().match(searchV.toLowerCase()) ||
        p.productPrice === parseInt(searchV)
      );
    });
    console.log(searchF);
    if (searchF) {
      console.log("search");
      setsearchproducts(searchF);
      setsearch(true);
    }
  };

  const deleteProduct = (id) => {
    axios.delete('http://localhost:3000/addproducts/' + id)
      .then(response => {
        console.log(response)
        getAllProducts()
      }, error => {
        console.error(error)
      })
  }
  return (
    <ScrollView>
      <View>
        <TextInput
          type="text"
          placeholder="Search Products"
          onChangeText={searchFunction}
          style={{
            marginBottom: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'pink',
            fontSize: 20
          }}
        />
        <TouchableOpacity>
          <Button title='Add Product' onPress={() => { navigation.navigate('AddProducts') }}></Button>
        </TouchableOpacity>

        <View style={styles.list}>
          {!search && (
            <FlatList
              numColumns={1}
              keyExtractor={(item) => item.id}
              data={products}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('SelectedProduct', { item: item })}>
                    <Text style={styles.items}><Image
                      source={{ uri: item.image }} style={{ width: 220, height: 220 }} resizeMode={'cover'} /><br></br>{item.productName}<br></br>
                      <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                          <Button marginLeft='20' title='delete' color='red' onPress={() => { deleteProduct(item.id) }}></Button></View>
                        <View style={styles.btn}>
                          <Button color='orange' title='edit' onPress={() => navigation.navigate('EditProduct', { item: item })}></Button></View></View>
                    </Text>
                  </TouchableOpacity>)
              }}>
            </FlatList>)}
          {search && (
            <FlatList
              numColumns={1}
              keyExtractor={(item) => item.id}
              data={searchproducts}
              renderItem={({ item }) => {
                return (
                  <View style={styles.flexview}>
                    <TouchableOpacity onPress={() => navigation.navigate('SelectedProduct', { item: item })}>
                      <Text style={styles.items}><Image
                        source={{ uri: item.image }} style={{ width: 220, height: 220 }} resizeMode={'cover'} /><br></br>{item.productName}<br></br>
                        <View style={styles.buttonContainer}>
                          <View style={styles.btn}>
                            <Button marginLeft='20' title='delete' color='red' onPress={() => { deleteProduct(item.id) }}></Button></View>
                          <View style={styles.btn}>
                            <Button color='orange' title='edit' onPress={() => navigation.navigate('EditProduct', { item: item })}></Button></View></View>
                      </Text>
                    </TouchableOpacity></View>)
              }}>
            </FlatList>)}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
  },

  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  items: {
    textAlign: 'center',
    color: '#6C3483',
    padding: 30,
    marginTop: 34,
    borderColor: '#1A5276',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    fontSize: 24
  },
  flexview: {
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    fontSize: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    padding: 40
  },
  list: {
    paddingTop: 40,
    backgroundColor: '#fffafa',
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  header: {
    height: 70,
    paddingTop: 20,
    backgroundColor: 'coral'
  },
  input: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputFriend: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 20
  },
  logo: {
    width: "200",
    height: "200"
  }

})