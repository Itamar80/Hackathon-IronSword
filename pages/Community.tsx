import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RNPickerSelect from 'react-native-picker-select';

type Props = {
    navigation: NativeStackNavigationProp<any>;
};

type Group = {
    name: string;
    content: string;
    likes: number;
    comments: number;
};

export const Community: React.FC<Props> = ({ navigation }) => {
    const [selectedGroup, setSelectedGroup] = useState('group1');
    const groups: Group[] = [
        { name: 'Group 1', content: 'Random Text 1', likes: 10, comments: 5 },
        { name: 'Group 2', content: 'Random Text 2', likes: 15, comments: 8 },
        // ... other groups
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {/* Icon for back button */}
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* Icon for notifications */}
                </TouchableOpacity>
                <View style={styles.profileIcon}>
                    <Text style={styles.profileIconText}>אי</Text>
                    {/* Star Icon */}
                </View>
            </View>

            {/* Segmented Control */}
            <View style={styles.segmentedControl}>
                <Text style={styles.grayText}>פרופיל שלי</Text>
                <Text style={styles.lightBlueText}>קבוצות שלי</Text>
                <Text style={styles.grayText}>שאר הקבוצות</Text>
            </View>

            {/* Select Dropdown */}
            <RNPickerSelect
                onValueChange={(value) => setSelectedGroup(value)}
                items={groups.map(group => ({ label: `קבוצה: ${group.name}`, value: group.name }))}
                placeholder={{ label: "Select a group", value: null }}
                style={pickerSelectStyles}
            />

            {/* List of Group Cards */}
            <ScrollView style={styles.cardList}>
                {groups.map(group => (
                    <View key={group.name} style={styles.card}>
                        <View style={styles.cardRow}>
                            <View style={styles.circle}>
                                <Text>ממ</Text>
                            </View>
                            <Text>{group.name}</Text>
                        </View>
                        <Text>{group.content}</Text>
                        <View style={styles.cardRow}>
                            <Text>Likes: {group.likes}</Text>
                            <Text>Comments: {group.comments}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // ... your styles for header
    },
    profileIcon: {
        // ... styles for your profile icon
    },
    profileIconText: {
        // ... styles for text inside profile icon
    },
    segmentedControl: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        // ... styles for segmented control
    },
    grayText: {
        color: 'gray',
        // ... other text styles
    },
    lightBlueText: {
        color: 'lightblue',
        // ... other text styles
    },
    cardList: {
        // ... styles for your card list
    },
    card: {
        borderRadius: 20,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        // ... other card styles
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // ... other styles for card row
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        // ... other styles for circle
    },
    // ... other styles you might need
});

export default Community;
