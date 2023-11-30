import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Logo from '../assets/logo.png';

type Props = {
    navigation: NativeStackNavigationProp<any>;
};

export const Splash: React.FC<Props> = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.navigate('SignUp');
        }, 1000);

        return () => clearTimeout(timer);
    }, [fadeAnim, navigation]);

    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.Image
                style={{
                    width: 200,
                    height: 200,
                    opacity: fadeAnim,
                }}
                source={Logo}
            />
        </View>
    );
};
