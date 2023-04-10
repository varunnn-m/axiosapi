import { View, Text,StyleSheet} from "react-native";
import React,{useEffect} from "react";
import axios from "axios";

const ApiRequests=()=>{

  useEffect(()=>{
    addNewProduct()
  },[])

  const getData=async()=>{
    const res=await axios.get("https://fakestoreapi.com/products/categories")
    console.log(res.data)
  }

  const addNewProduct=async()=>{
    const dataP= {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  }
    const res= await axios.post("https://fakestoreapi.com/products", dataP)
    console.log(res.data)
  }
  return(
    <View>
      <Text>
        Api requests
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({

})

export default ApiRequests