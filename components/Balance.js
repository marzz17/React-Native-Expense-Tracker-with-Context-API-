import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { View,StyleSheet } from 'react-native';
import { Title, Text} from 'react-native-paper';
export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2)
    return (
        <View style={{alignContent:"stretch",alignItems:"center", marginTop:20, marginBottom:20}}>
            <Text style={styles.balancetitle}>Your Balance</Text>
             <Text style={styles.amounttxt}>{total}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  balancetitle: {
      fontSize:20
  },
  amounttxt:{
      fontSize:20
  }


});