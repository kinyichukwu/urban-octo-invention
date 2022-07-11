import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../components/Comment';



const Stack = createNativeStackNavigator();

function DetailsScreen() {
  const [text, onChangeText] = useState("Write comment");
  const {params: {
    id, image, title, description, author, date, source,
  },} = useRoute()
  console.log(id)
  const [comments, setComments] = useState([])
  


  function getComments() {
    axios.get(`https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${id}/comments`)
      .then(function (response) {
        // handle success
        //params not written yet
        
        setComments(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  function submitComment() {
    axios.post(`https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${id}/comments`, {
      "newsId": id,
      "name": "Jan Wuckert",
      "avatar": "http://lorempixel.com/640/480/fashion",
      "comment": comments,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    getComments() 
  },[])

  console.log(comments)
  return (
    // article details
    <View>
       
        <Image source={{
            uri: 'https://www.gom.com/-/media/gom-website/global/topics/digital-image-correlation/gom_topics_dic_header_small_mobile.jpg?mw=960&hash=E01E7C9A64DAF2F46FD68DB98BDD4A8E',
        }}
        style={styles.image}
        />
        
        <View style={{padding: 17}}>
        
      

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
            {description}
      </Text>

      <View style={styles.data}>
            <Text style={styles.heading}>by: <Text style={styles.author}>{author}</Text></Text>
      </View>

      <View>
        <Text >source: <Text style={styles.source}>{source}</Text></Text>
      </View>

      </View>

      <View>
        <Text style={styles.title}>Comments</Text>
        <FlatList
        data={comments}
        renderItem= {({item}) => <Comment 
        // id= {item.id}
        // image= 'any'
        // title= {item.title}
        // description= {item.body}
        // author= {item.author}
        // date= {item.createdAt}
        // source='clane'
          />}
      
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          onSubmitEditing={submitComment}
        />

      </View>

    </View>
    // coments form
    
  );
}

export default DetailsScreen;

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
});