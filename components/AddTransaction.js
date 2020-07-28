import React, { useState, useContext } from 'react'
import { View,StyleSheet } from 'react-native';
import { Title, Text,Divider,Button,TextInput } from 'react-native-paper';

import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {
    const [text, setText] = useState(''); 
    const [amount, setAmount] = useState(0); 
    const {addTransaction} = useContext(GlobalContext)
    const saveincomeExpense = e => {
        // e.preventDefault();
        const newTransaction = {
        // id: Math.floor(Math.random() * 1000000000),
        text,
        amount: +amount
        }
        addTransaction(newTransaction);
        setAmount(0);
        setText('');
        }

    return (
        <View style={{margin:10}}>
             <TextInput
                label='Description'
                value={text}
                onChangeText={text => setText(text)}
                style={{marginBottom:10}}
            />
            <TextInput
                label='Amount'
                value={amount}
                onChangeText={text => setAmount(text)}
                style={{marginBottom:10}}
            />
            <Button icon="check" mode="contained" onPress={() => saveincomeExpense()}>
    Save 
  </Button>
            
        </View>
    )
}
