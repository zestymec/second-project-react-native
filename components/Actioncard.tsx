import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function Actioncard() {

   const openWebsite = async (websiteLink: string) => {
    try {
        await Linking.openURL(websiteLink);
    } catch (error) {
        console.log("Link nahi khul raha: ", error);
        
    }
};

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingText}>Blog Card</Text>
            
            <View style={styles.card}>
                <View style={styles.headerContainer}>
                    <Text style={styles.cardHeading}>What's New in JavaScript -- ES6</Text>
                </View>

                <Image
                    source={{ uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={styles.cardImage}
                />

                <View style={styles.cardBody}>
                    <Text style={styles.bodyText} numberOfLines={3}>
                        ES6 (ECMAScript 2015) brought major updates like Arrow functions, 
                        Classes, Template Literals, and Let/Const. It changed the way 
                        we write modern JavaScript today.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={() => openWebsite('https://www.youtube.com/watch?v=QpTPQmBsOyI')}
                    >
                        <Text style={styles.buttonText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.infoBox}>
                <Text numberOfLines={4} style={styles.infoText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi perferendis voluptatem praesentium molestiae...
                </Text>
            </View>

            <View style={[styles.infoBox, styles.redInfoBox]}>
                <Text numberOfLines={4} style={styles.redText}>
                    Important Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi perferendis...
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F5F6FA',
    },
    headingText: {
        color: '#2F3640',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 6,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 20,
    },
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardHeading: {
        color: '#2F3640',
        fontSize: 17,
        fontWeight: 'bold',
    },
    cardImage: {
        height: 200, 
        width: '100%',
    },
    cardBody: {
        padding: 15,
    },
    bodyText: {
        color: '#7F8C8D',
        fontSize: 14,
        lineHeight: 20,
    },
    footerContainer: {
        padding: 15,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#E67E22',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    infoBox: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderLeftColor: '#E67E22',
    },
    redInfoBox: {
        borderLeftColor: 'red',
        borderRightColor: 'red',
        backgroundColor: '#FFF5F5',
    },
    infoText: {
        color: '#333',
    },
    redText: {
        color: 'red',
    }
})