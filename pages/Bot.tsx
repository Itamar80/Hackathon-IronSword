import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import BotImage from '../assets/bot.png';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    time: string;
};

const messages = [
    {
        id: '1',
        text: `message`,
        sender: 'user',
        time: `12:00 PM`
    },
    {
        id: '2',
        text: `message`,
        sender: 'bot',
        time: `12:00 PM`
    },
    {
        id: '3',
        text: `message`,
        sender: 'user',
        time: `12:01 PM`
    },
    {
        id: '4',
        text: `message`,
        sender: 'bot',
        time: `12:02 PM`
    },
    {
        id: '5',
        text: `message`,
        sender: 'user',
        time: `12:02 PM`
    },
    {
        id: '6',
        text: `message`,
        sender: 'bot',
        time: `12:02 PM`
    },
    {
        id: '7',
        text: `message`,
        sender: 'user',
        time: `12:05 PM`
    },
    {
        id: '8',
        text: `message`,
        sender: 'bot',
        time: `12:05 PM`
    },
    {
        id: '9',
        text: `message`,
        sender: 'user',
        time: `12:05 PM`
    },
    {
        id: '10',
        text: `message`,
        sender: 'bot',
        time: `12:05 PM`
    },
    {
        id: '11',
        text: `message`,
        sender: 'user',
        time: `12:05 PM`
    },
    {
        id: '12',
        text: `message`,
        sender: 'bot',
        time: `12:05 PM`
    },
]

const initialMessages = messages;

const Bot = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: String(messages.length), text: inputText, sender: 'user', time: 'Now' }]);
            setInputText('');
        }
    };

    const renderMessageItem = ({ item }: { item: Message }) => (
        <View style={[styles.messageBubble, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>במה קשה לך?</Text>
                <Image source={BotImage} style={styles.avatar} />
            </View>

            <FlatList
                data={messages}
                renderItem={renderMessageItem}
                keyExtractor={item => item.id}
                style={styles.messageList}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type a message"
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10
    },
    headerText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageList: {
        flex: 1,
    },
    messageBubble: {
        margin: 10,
        padding: 10,
        borderRadius: 15,
        maxWidth: '70%',
        alignSelf: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    userMessage: {
        backgroundColor: 'lightblue',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: 'gray',
    },
    messageText: {
        color: 'white',
    },
    messageTime: {
        color: 'white',
        fontSize: 10,
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: '#ddd',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    sendButton: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        borderRadius: 15,
    },
});

export default Bot;
