import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Logo from '../assets/logo.png';
const { height: deviceHeight } = Dimensions.get('window');

type Props = {
    navigation: NativeStackNavigationProp<any>;
};

type BalloonProps = {
    color: string;
    text?: string;
    onPress: () => void;
};

const Balloon: React.FC<BalloonProps> = ({ color, onPress, text }) => (
    <TouchableOpacity style={[styles.balloon, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.balloonText}>{text ?? 'בוט'}</Text>
    </TouchableOpacity>
);

const Circle: React.FC<BalloonProps> = ({ color, onPress, text }) => (
    <TouchableOpacity style={[styles.circle, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.balloonText}>{text ?? 'בוט'}</Text>
    </TouchableOpacity>
);

export const Dashboard: React.FC<Props> = ({ navigation }) => {
    const balloonColors = ['lightblue', 'skyblue', 'turquoise', 'lightblue', 'skyblue', 'turquoise'];

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.appName}>My App Name</Text>
            </View>

            <ScrollView
                contentContainerStyle={[styles.balloonsContainer]}>
                {/* First Row */}
                <View style={styles.balloonRow}>
                    <Balloon
                        text='המידע שלך'
                        color={balloonColors[0]}
                        onPress={() => navigation.navigate('OtherPage')}
                    />
                </View>
                {/* Second Row */}
                <View style={styles.balloonRow}>
                    <Balloon
                        text='בוט'
                        color={balloonColors[1]}
                        onPress={() => navigation.navigate('Bot')}
                    />
                    <Balloon
                        text='קהילה'
                        color={balloonColors[2]}
                        onPress={() => navigation.navigate('Community')}
                    />
                </View>
                {/* Third Row */}
                <View style={styles.balloonRow}>
                    <Balloon
                        color={balloonColors[3]}
                        onPress={() => navigation.navigate('OtherPage')}
                    />
                </View>
                {/* Fourth Row */}
                <View style={styles.balloonRow}>
                    <Balloon
                        color={balloonColors[4]}
                        onPress={() => navigation.navigate('OtherPage')}
                    />
                    <Balloon
                        color={balloonColors[5]}
                        onPress={() => navigation.navigate('OtherPage')}
                    />
                </View>
            </ScrollView>
            <View style={[styles.bottomModal, { height: deviceHeight * 0.17 }]}>
                <Circle color="lightblue" onPress={() => navigation.navigate('NewPage')} />
                <Circle color="lightblue" onPress={() => navigation.navigate('NewPage')} />
                <Circle color="lightblue" onPress={() => navigation.navigate('NewPage')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5, // for Android
    },
    logo: {
        width: 50,
        height: 50,
    },
    appName: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomCircles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#BBDEFB',
    },
    bottomModal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: 'lightblue', // changed to lightblue
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    singleBalloon: {
        // Styles for single balloon in a row
    },
    leftBalloon: {
        marginRight: 10, // Space between balloons in a row
    },
    rightBalloon: {
        marginLeft: 10, // Space between balloons in a row
    },
    balloon: {
        width: 140,
        height: 140,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5, // for Android
    },
    balloonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    balloonsContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    balloonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Add some space between rows
    },
});

