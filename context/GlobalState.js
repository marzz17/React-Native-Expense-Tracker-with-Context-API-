import React, {createContext, useReducer, useState,useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import {Alert} from 'react-native';
//Initial state
const initialState = {
	transactions: []
};

//Create Context
export const GlobalContext = createContext(initialState);
//Provider component
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);
  
   	useEffect(() => {
		getalldata();
	}, []);

	//Actions
    function getalldata() {
         	axios
			.get('http://169.254.152.2:1337/api/getExpenseIncome')
			.then((response) => {dispatch({ type: 'GET_TRANSACTION', payload: response.data})})
			.catch((error) => {console.log(error);
			Alert.alert(
				"Sorry, something went wrong. Please try again",
				error.message,
				[{
					text:"Try Again",
					onPress: console.log('again')
				}]
			);
			});
    }
	function deleteTransaction(id) {
		 	axios
			.delete('http://169.254.152.2:1337/api/deleteExpenseIncome/' + id)
			.then((response) => {
				if (response.data === 'DELETE') {
					dispatch({type: 'DELETE_TRANSACTION',payload: id});
					Alert.alert("Success",
					"Successfully deleted!",
					[{text:"OK",
					 onPress: console.log('success')
					 }]);
				}
			}).catch((error) => {
				Alert.alert(
				"Sorry, something went wrong. Please try again",
				error.message,
				[{
					text:"Try Again",
					onPress: console.log('try again')
				}]
			);
			});
	}
	function addTransaction(transaction) {
		  	axios
			.post('http://169.254.152.2:1337/api/saveExpenseIncome', transaction)
			.then((response) => {
				if (response.data === 'SAVED') {
					dispatch({ type: 'ADD_TRANSACTION',payload: transaction });
					Alert.alert("Doned",
					"Successfully saved!",
					[{text:"OK",
					 onPress: console.log('success')
					 }]);
				}
			}).catch((error) => {
				Alert.alert(
				"Sorry, something went wrong. Please try again",
				error.message,
				[{
					text:"Try Again",
					onPress: console.log('try again')
				}]
			);
			});
      	
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
