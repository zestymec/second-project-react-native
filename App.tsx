import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text >App</Text>
        <Flatcards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App