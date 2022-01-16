import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gql, useMutation, useQuery } from '@apollo/client';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [repeatedUser, setRepeatedUser] = useState(false);

  const CREATE_USER = gql`
  mutation {
    createUser( userAuth : {
      Name: "${password}"
      Number: "${username}"
    }) {
          Name
    }
  }
`;

  const GET_USER_BY_NUMBER = gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  }
  `;
  const users = useQuery(GET_USER_BY_NUMBER);
  console.log("usrs",users, GET_USER_BY_NUMBER,`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  }
  `);
  const alreadyExist =users?.data?.usersByNumber?.Name != undefined;
  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER);

  const validPassword = password === password2;
  const createUser = () => {
    if (validPassword && !alreadyExist) {
      mutateFunction();
      navigation.navigate('Login');
    } else {
      setRepeatPassword(validPassword == false);
      setRepeatedUser(alreadyExist);
    }
  }
  return (
    <View style={{ flex: 1, marginTop: '50%' }}>
      <Text style={{ textAlign: 'center' }}>
        Insert username
      </Text>
      <TextInput style={styles.formTextInput}
        placeholder="username"
        isRequired
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      {(repeatedUser && <Text style={{ textAlign: 'center', color: 'red' }}>
        The username is already in use by other user
      </Text>)}
      <Text style={{ textAlign: 'center' }}>
        Insert password
      </Text>
      <TextInput style={styles.formTextInput}
        placeholder="password"
        secureTextEntry={true}
        isRequired={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        asterik />
      <Text style={{ textAlign: 'center' }}>
        Repeat password
      </Text>
      <TextInput style={styles.formTextInput}
        placeholder="password"
        secureTextEntry={true}
        isRequired={true}
        value={password2}
        onChangeText={(password2) => setPassword2(password2)}
        asterik />
      {(repeatPassword && <Text style={{ textAlign: 'center', color: 'red'  }}>
        The passwords do not match
      </Text>)}
      <View style={{ margin: 12 }}>

        <Button
          style={styles.submitButton}
          onPress={createUser}
          title="Sign Up"
          color={'pink'}
        />
      </View>
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

export default SignUp;