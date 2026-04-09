import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingtext}>Blue</Text>
      <View>
        <View>
            <Text style={styles.red}>Red</Text>
        </View>
        <View>
            <Text style={styles.red}>pink</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        color:'blue',
        fontSize:24,
        fontWeight:'bold',
        padding:8,
    }
    ,
    red:{
        color:'red',
        fontSize:24,
        fontWeight:'bold',
        padding:8,
    }
    ,pink:{
        color:'pink',
        fontSize:24,
        fontWeight:'bold',
        padding:8,
    }
})