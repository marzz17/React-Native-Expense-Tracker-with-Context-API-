import React, {useContext,useState} from 'react'
import { View,StyleSheet } from 'react-native';
import {Divider, List,Avatar,Button,Colors,IconButton, Dialog, Portal } from 'react-native-paper';
import { GlobalContext } from '../context/GlobalState';
export const Transaction = ( {transaction} ) => {
    const [dialog, setDialog] = useState(true)
    const sign = transaction.amount < 0 ? '-' : '+';
    const ttile =transaction.text + ' ' + sign + Math.abs(transaction.amount)
    const { deleteTransaction} = useContext(GlobalContext);
	const deletedata =  (id) => {
			deleteTransaction(id);
		}
    return (
        <View>   
              <List.Item
                        title={ttile}
                        left={() => <List.Icon icon="calendar" color={transaction.amount < 0 ? 'red' : 'green'}/>}
                        right={() =><IconButton
                                icon="close"
                                color={Colors.white}
                                size={20}
                                style={{backgroundColor:Colors.red300}}
                                onPress={() => deletedata(transaction.id)}
                            />}
                    />
                <Divider/>
        </View>
    )
}
//