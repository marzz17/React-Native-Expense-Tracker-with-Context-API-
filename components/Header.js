import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
export const Header = () => {
    return (
        <View style={{alignContent:"stretch",alignItems:"center", marginTop:20, marginBottom:10}}>
             <Title style={styles.headertitle}>Expense Tracker</Title>
        </View>
    )
}
const styles = StyleSheet.create({
  headertitle: {
      fontSize:30
  }


});