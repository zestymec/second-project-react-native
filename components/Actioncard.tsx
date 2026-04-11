import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncard() {
    // Website open karne ka function
    function openwebsite(Websitelink) {
        Linking.openURL(Websitelink)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Blog Card</Text>
            
            <View style={styles.card}>
                {/* Header Section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.cardheading}>What's New in JavaScript -- ES6</Text>
                </View>

                {/* Image Section */}
                <Image
                    source={}
                    style={styles.cardimage}
                />

                {/* Card Body / Description */}
                <View style={styles.cardbody}>
                    <Text style={styles.bodyText} numberOfLines={3}>
                        ES6 (ECMAScript 2015) brought major updates like Arrow functions, 
                        Classes, Template Literals, and Let/Const. It changed the way 
                        we write modern JavaScript today.
                    </Text>
                </View>

                {/* Footer Section with Button */}
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
        margin: 8,
        // Elevation for Android
        elevation: 4,
        // Shadow for iOS
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
        height: 180, // Height lazmi deni hai remote image ke liye
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