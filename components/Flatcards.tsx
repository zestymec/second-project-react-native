import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


export default function Flatcards() {
    return (
        <View> 
            <Text style={styles.headingtext}>Floating cards</Text>
            <ScrollView horizontal={true}>
           
                <View style={styles.container}>
                    <View style={[styles.cards, styles.cardone]}>
                        <Text >Red</Text>
                    </View>

                    <View style={[styles.cards, styles.cardtwo]}>
                        <Text >blue</Text>
                    </View>

                    <View style={[styles.cards, styles.cardthree]}>
                        <Text >yellow</Text>
                    </View>
                    <View style={[styles.cards, styles.cardone]}>
                        <Text >Red</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingtext: {
        color: 'blue',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    }
    , container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    }
    , cards: {
        width: 100,
        height: 100,
        borderRadius: 6,
        margin: 8,
        display: 'flex'
        , justifyContent: 'center'
        , alignItems: 'center'
    }
    , cardone: {
        backgroundColor: 'red',
        padding: 8,

    }
    , cardtwo: {
        backgroundColor: 'blue',
        padding: 8,
    }
    , cardthree: {
        backgroundColor: 'yellow',
        padding: 8,
    }
})