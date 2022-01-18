import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';

import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const client = new ApolloClient({
  uri: 'http://ec2-3-91-161-227.compute-1.amazonaws.com:5000/graphql',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <ApolloProvider client={client}>  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    
 
    </ApolloProvider>
 )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('MyApplication', () => App);


