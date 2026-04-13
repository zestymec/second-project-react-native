import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function contactlist() {
  const contacts = [
    {
      uid: 'user-001',
      name: 'Muneeb Ali',
      picUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Full Stack Developer with a passion for React Native.'
    },
    {
      uid: 'user-002',
      name: 'Sara Ahmed',
      picUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'UI/UX Designer exploring the world of mobile interfaces.'
    },
    {
      uid: 'user-003',
      name: 'Zain Sheikh',
      picUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Tech enthusiast and pixel optimization expert.'
    },
    {
      uid: 'user-004',
      name: 'Dua Khan',
      picUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'Learning TypeScript and building cool mobile apps.'
    }
  ];
  return (
    <View>
      <Text>contactlist</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}>
        {contacts.map(({ uid, name, picUrl, bio }) => (
          <View>
            
            <Text key={uid}>
            {name}
          </Text>
            <Image
              source={{ uri: picUrl }}
              style={styles.cardImage}
            />
            <Text style={styles.bio}>
              {bio}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  cardImage: {
width:100,height:100,
  }, bio: {

  }
})