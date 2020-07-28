import React, { useContext } from 'react'
import { View,StyleSheet,FlatList } from 'react-native';
import { List } from 'react-native-paper';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
     return (
        <View>
        <List.Section >
        <List.Subheader>History</List.Subheader>
        <FlatList
				horizontal={false}
				data={transactions}
				keyExtractor={(item, index) => 'key' + index}
				renderItem={({ item }) => {
					return (
                          <Transaction transaction={item}/>
					       );
				}}
			/>
        </List.Section>
        
        </View>
    )
}
const styles = StyleSheet.create({
 maincontent:{
     flexDirection:"row",
   
 }
});