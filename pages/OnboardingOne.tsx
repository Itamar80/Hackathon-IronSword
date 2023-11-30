import React, { useState, FC } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CheckboxProps {
    isSelected: boolean;
    onPress: () => void;
    label: string;
}

const Checkbox: FC<CheckboxProps> = ({ isSelected, onPress, label }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
        <Text style={styles.checkboxLabel}>{label}</Text>
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
            {isSelected && <Text style={styles.checkmark}>✓</Text>}
        </View>
    </TouchableOpacity>
);

interface OnboardingOneProps {
    navigation: NativeStackNavigationProp<any>;
}

export const OnboardingOne: FC<OnboardingOneProps> = ({ navigation }) => {
    const [checkboxStates, setCheckboxStates] = useState({
        personalDetails: false,
        medicalDetails: false,
        mobilityAid: false,
        dailyAssistance: false,
        recommendedTherapy: false,
        mentalHealthConsult: false,
        homeEnvironment: false,
        supportSystem: false,
        medicalAccess: false,
        workOrStudyAssistance: false,
        communityInvolvement: false,
    });

    const toggleCheckbox = (key: keyof typeof checkboxStates) => {
        setCheckboxStates(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>יש למלא את הפרטים על מנת לקבל טיפול רלוונטי</Text>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>קופת חולים :</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>שם:</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>גיל:</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>מין:</Text>
                    <TextInput style={styles.input} />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>מה סוג הפציעה שלך? קשה/קל/בינוני? :</Text>
                    <TextInput style={styles.input} />
                </View>
                <Checkbox
                    isSelected={checkboxStates.medicalDetails}
                    onPress={() => toggleCheckbox('medicalDetails')}
                    label="האם אתה זקוק לעזרה בניידות?"
                />
                <Checkbox
                    isSelected={checkboxStates.personalDetails}
                    onPress={() => toggleCheckbox('personalDetails')}
                    label="האם אתה זקוק לסיוע בפעולות יומיומיות?"
                />
                <Checkbox
                    isSelected={checkboxStates.mobilityAid}
                    onPress={() => toggleCheckbox('mobilityAid')}
                    label="האם הומלץ לך פיזיותרפיה או תרגילי שיקום הומלצו עבורך? "
                />
                <Checkbox
                    isSelected={checkboxStates.dailyAssistance}
                    onPress={() => toggleCheckbox('dailyAssistance')}
                    label="האם אתה מעוניין לשוחח עם איש מקצוע בתחום בריאות הנפש על האירוע והרגשות שלך?"
                />
                <Checkbox
                    isSelected={checkboxStates.recommendedTherapy}
                    onPress={() => toggleCheckbox('recommendedTherapy')}
                    label="האם הסביבה הביתית שלך מצוידת כדי להתאים לצרכי הניידות הנוכחיים שלך (למשל, גישה לכיסא גלגלים, אביזרי אמבטיה)?"
                />
                <Checkbox
                    isSelected={checkboxStates.mentalHealthConsult}
                    onPress={() => toggleCheckbox('mentalHealthConsult')}
                    label="האם יש לך מערכת תמיכה, כגון משפחה או חברים, שיכולה לסייע לך במהלך ההחלמה?"
                />
                <Checkbox
                    isSelected={checkboxStates.homeEnvironment}
                    onPress={() => toggleCheckbox('homeEnvironment')}
                    label="האם יש לך גישה לציוד רפואי וציוד הכרחי לטיפול ושיקום? "
                />
                <Checkbox
                    isSelected={checkboxStates.supportSystem}
                    onPress={() => toggleCheckbox('supportSystem')}
                    label="האם אתה זקוק לסיוע או התאמות כדי לחזור לעבודה או ללימודים?"
                />
                <Checkbox
                    isSelected={checkboxStates.medicalAccess}
                    onPress={() => toggleCheckbox('medicalAccess')}
                    label="האם תרצה להיות מעורב קהילתית בשלב זה?"
                />
            </ScrollView>
            <Button
                title="סיום"
                onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Adjust to align items to the start
        alignItems: 'stretch', // Adjust to stretch children across the container
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    inputLabel: {
        alignSelf: 'flex-end',
        color: '#0277BD',
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        width: '100%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 22,
        color: '#0277BD',
        marginBottom: 20,
        textAlign: 'center'
    },
    checkboxContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        marginLeft: 5,
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
        textAlign: 'right',
        fontSize: 16,
    },
});
