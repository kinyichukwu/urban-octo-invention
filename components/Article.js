import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function Article({id,image, title, description, author, date, source}) {
    let shortDescription = description?description.slice(0, 180) + '......':'...';
    let rightDate = date.slice(0, 10)
    const navigation = useNavigation()
  return (
    <SafeAreaView style={[styles.container, styles.elevation]}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', {id,image, title, description, author, date, source})}>
        <Image source={{
            uri: 'https://www.gom.com/-/media/gom-website/global/topics/digital-image-correlation/gom_topics_dic_header_small_mobile.jpg?mw=960&hash=E01E7C9A64DAF2F46FD68DB98BDD4A8E',
        }}
        style={styles.image}
        />
        
        <View style={{padding: 17}}>
        
      

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
            {shortDescription}
      </Text>

      <View style={styles.data}>
            <Text style={styles.heading}>by: <Text style={styles.author}>{author}</Text></Text>
            <Text style={styles.date}>{rightDate}</Text>
      </View>

      <View>
        <Text >source: <Text style={styles.source}>{source}</Text></Text>
      </View>

      </View>

      </TouchableOpacity>
    </SafeAreaView>
  )
}

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
        fontSize: 20,
        fontWeight: '680',
        marginTop: 10,
    },
    description:{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,
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
  });