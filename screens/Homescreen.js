import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Article from '../components/Article';
import axios from 'axios';
import CreateNewarticle from '../components/CreateNewarticle';



export default function Homescreen({ navigation }) {
  const [article, setArticle] = useState([])
  const [next, setNext] = useState(1)
  function getArticles() {
    axios.get(`https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news?page=${next}&limit=10`)
      .then(function (response) {
        // handle success
        //params not written yet
        
        setArticle(response.data)
        console.log(article)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
 
  useEffect(() => {
    getArticles() 
  },[next])

  if(article.length == 0){
    console.log('no new article')
  }
  
 
  return (
    <ScrollView>
    <Button
    onPress={() => setNext((prev =>prev > 1?prev - 1: 1))}
    title="Prev"/>
    <Button
    onPress={() => setNext((prev => prev + 1))}
    title="Next"/>

    {article.length !== 0 ?<FlatList
            data={article}
            renderItem= {({item}) => <Article
            id= {item.id}
            image= 'any'
            title= {item.title}
            description= {item.body}
            author= {item.author}
            date= {item.createdAt}
            source='clane'
          />}
          
        /> : <CreateNewarticle/>}
        
     
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      
    },
  });