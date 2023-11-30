import React, { useState, FC } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CheckboxProps {
    isSelected: boolean;
    onPress: () => void;
    label: string;
}

const Checkbox: FC<CheckboxProps> = ({ isSelected, onPress, label }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
            {isSelected && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
);

interface OnboardingOneProps {
    navigation: NativeStackNavigationProp<any>;
}

export const OnboardingOne: FC<OnboardingOneProps> = ({ navigation }) => {
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Onboarding!</Text>

            <Checkbox
                isSelected={termsAccepted}
                onPress={() => setTermsAccepted(!termsAccepted)}
                label="I agree to the Terms and Conditions"
            />
            <Button
                title="Finish"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        fontSize: 22,
        color: '#0277BD',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#0277BD',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxSelected: {
        backgroundColor: '#0277BD',
    },
    checkmark: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkboxLabel: {
        color: '#0277BD',
        fontSize: 16,
    },
});
