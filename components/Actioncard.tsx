import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncard() {
 
    function openwebsite(Websitelink) {
        Linking.openURL(Websitelink)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Blog Card</Text>
            
            <View style={styles.card}>
            
                <View style={styles.headerContainer}>
                    <Text style={styles.cardheading}>What's New in JavaScript -- ES6</Text>
                </View>

                <Image
                    source={{ uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={styles.cardimage}
                />

             
                <View style={styles.cardbody}>
                    <Text style={styles.bodyText} numberOfLines={3}>
                        ES6 (ECMAScript 2015) brought major updates like Arrow functions, 
                        Classes, Template Literals, and Let/Const. It changed the way 
                        we write modern JavaScript today.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => openwebsite('https://www.learnvern.com/javascript-tutorials/introduction-to-javascript')}
                    >
                        <Text style={styles.buttonText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    headingtext: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    
        elevation: 4,

        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
    },
    headerContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardheading: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    cardimage: {
        height: 180, 
        width: '100%',
    },
    cardbody: {
        padding: 10,
    },
    bodyText: {
        color: '#2C3E50',
        fontSize: 14,
    },
    footerContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#E67E22',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    }
})