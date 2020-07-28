import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { View,StyleSheet } from 'react-native';
import { Title, Text,Divider} from 'react-native-paper';
export const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)
    // console.log('mar income expense',transactions)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2)
     const expense = amounts
    .filter(item => item < 0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2)
    return (
        <View style={styles.maincontent}>
            <View  style={styles.contentdiv}>
                <Text style={styles.balancetitle}>Income</Text>
                <Text style={styles.amountincome}>{income}</Text>
            </View>
             <Divider />
            <View style={styles.contentdiv}>
                <Text style={styles.balancetitle}>Expense</Text>
                <Text style={styles.amountexpense}>{expense}</Text>
            </View>
         </View>
    )
}
const styles = StyleSheet.create({
 maincontent:{
    //  flex:1,
     flexDirection:"row",
   
 },
 contentdiv:{
    alignContent:"stretch",
    alignItems:"center",
    flex:6
 },
  balancetitle: {
      fontSize:20,

  },
  amountexpense:{
      fontSize:20,
      color: "red"
  },
  amountincome:{
      fontSize:20,
      color: "green"
  }


});