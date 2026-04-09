import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import Tapped from './components/Tapped'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <Tapped></Tapped>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App