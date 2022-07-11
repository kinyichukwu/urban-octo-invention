import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CreateNewarticle = () => {
    const [Image, onChangeImage] = useState("Image Url");
    const [Title, onChangeTitle] = useState("Title");
    const [Description, onChangeDescription] = useState("Description");
    const [Author, onChangeAuthor] = useState("Author");
    const [Source, onChangeSource] = useState("Source");


    const createDataObj = {
        "author": Author,
        "body": Description,
        "createdAt": "2022-07-05T13:06:06.656Z",
        "title": Title,
    }

    function sendCreateData() {
        
        axios.post(`https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane//news`, {
            "author": Author,
            "body": Description,
            "createdAt": "2022-07-05T13:06:06.656Z",
            "title": Title,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <View>
    <Text style={styles.title}>Create Article</Text>
  

    <TextInput
      style={styles.input}
      onChangeText={onChangeImage}
      value={Image}
    />

    <TextInput
      style={styles.input}
      onChangeText={onChangeTitle}
      value={Title}
    />

    <TextInput
      style={styles.input}
      onChangeText={onChangeDescription}
      value={Description}
    />

    <TextInput
      style={styles.input}
      onChangeText={onChangeAuthor}
      value={Author}
    />

    <TextInput
      style={styles.input}
      onChangeText={onChangeSource}
      value={Source}
    />

    <Button
        onPress={() => sendCreateData}
        style={styles.button}
        title="Post Article"/>
  </View>
  )
}

export default CreateNewarticle

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: .8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: '#0000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#d3d3d3'
    },
    image:{
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title:{
        fontSize: 30,
        fontWeight: '680',
        marginTop: 10,
        alignSelf: 'center',
    },
    description:{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,
        alignSelf: 'center',
    },
    data:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    heading:{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,
    },
    author:{
        fontWeight: 'bold',
    },
    date:{
        fontWeight: 'bold',
        color: '#e63946',
        fontSize: 15,
    },
    source:{
        marginTop: 10,
        color: '#e63946',
        fontSize: 18,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        display: "flex",
        width: 50,
        backgroundColor: '#737373',
        margin: 12,
        borderWidth: 1,
        padding: 10, 
    }
  });