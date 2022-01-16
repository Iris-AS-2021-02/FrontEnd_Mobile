import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client';



const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, data } = useQuery(gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  },
  `);


  const isVerifiedUser= () =>{
    return data.usersByNumber.Name === password;
  }

  const login = () =>{
    if(isVerifiedUser()){
      
    }
  }
  const goToSignUp = () => {
    console.log(username);
    console.log(password);
    navigation.navigate('SignUp');
  }
  return (
    <View style={{ flex: 1, marginTop: '50%' }}>
      <Text>
          WELCOME HOME!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    marginTop: 50
  },
  formTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,

  },
  submitButton: {
    height: 10,
    width: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
    marginTop: 40,
  }
});

export default Login;