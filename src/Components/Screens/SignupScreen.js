import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  TextInput,
  Image,
  Avatar,
  Button,
  icon,
  fontFamily,
} from 'react-native-paper';
import {useState} from 'react';
import {auth} from '../../config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {collection, getDocs, doc, setDoc} from 'firebase/firestore/lite';
import {db} from '../../config';

import {getDatabase, ref, set} from 'firebase/database';

const writeUserData = (userId, name, email, imageUrl) => {};

import Login from './LoginScreen';
import {async} from '@firebase/util';

const WriteData = (username, password, address, number) => {
  const database = getDatabase();
  const user = auth.currentUser;
  set(ref(database, 'users/' + user.uid), {
    username: {username},
    password: {password},
    address: {address},
    number: {number},
  });
};

const Signup = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [number, setnumber] = useState(0);
  const [address, setaddress] = useState('');

  const Register = ({navigation}) => {
    createUserWithEmailAndPassword(auth, username, password)
      .then(async () => {
        WriteData(username, password, address, number);
        console.log('REGISTERED');
        Alert.alert('Registered Successfully', 'Please Login', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Login',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Inccorrect!', 'That email address is already in use');
          console.log('Email already registered');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('Inccorrect!', 'That email address is invalid!');
        } else {
          console.log(error);
        }
      });
  };

  return (
    <ScrollView style={{backgroundColor: '#022a5b'}}>
      <View
        style={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: 40,
          backgroundColor: '#0e6da5',
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          height: 140,
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlignVertical: 'center',
            fontSize: 35,
            color: 'white',
            flex: 1,
            fontFamily: 'CinzelDecorative-Bold',
          }}>
          LUXURY WATCHES
        </Text>

        <View
          style={{
            borderRadius: 25,
            marginTop: -20,
            width: '60%',
            borderColor: '#022a5b',
            borderBottomWidth: 4,
            borderLeftWidth: 4,
            borderRightWidth: 4,

            marginLeft: '5%',
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 15,

              color: 'white',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            Now you can buy watches
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: 'white',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            with a few simple steps
          </Text>
        </View>
      </View>

      <View
        style={{
          borderRadius: 25,
          marginTop: 50,

          width: '80%',
          backgroundColor: '#0e6da5',
          marginLeft: '10%',
          marginBottom: 50,
        }}>
        <Text></Text>
        <View
          style={{
            marginTop: 25,
            borderRadius: 25,
            backgroundColor: '#022a5b',
            width: '60%',
            marginLeft: '20%',
            marginTop: 20,
          }}>
          <Text
            style={{
              borderRadius: 25,
              fontSize: 35,
              textAlign: 'center',
              color: 'white',
            }}>
            SIGN UP
          </Text>
        </View>

        <TextInput
          placeholder="Enter UserName"
          onChangeText={setusername}
          style={{
            borderRadius: 25,
            marginTop: 20,
            width: '80%',
            marginLeft: '10%',
            borderWidth: 2,
            borderColor: '#022a5b',
          }}></TextInput>

        <TextInput
          placeholder="Enter Contact No."
          onChangeText={setnumber}
          style={{
            borderRadius: 25,
            marginTop: 20,
            width: '80%',
            marginLeft: '10%',
            borderWidth: 2,
            borderColor: '#022a5b',
          }}></TextInput>

        <TextInput
          onChangeText={setaddress}
          placeholder="Enter Address"
          style={{
            borderRadius: 25,
            marginTop: 20,
            width: '80%',
            marginLeft: '10%',
            borderWidth: 2,
            borderColor: '#022a5b',
          }}></TextInput>

        <TextInput
          onChangeText={setpassword}
          placeholder="Enter Password"
          style={{
            borderRadius: 25,
            borderColor: '#022a5b',
            marginTop: 20,
            width: '80%',
            marginLeft: '10%',
            borderWidth: 2,
          }}></TextInput>

        <TextInput
          onChangeText={setconfirmpassword}
          placeholder="Confirm Password"
          style={{
            borderRadius: 25,
            borderColor: '#022a5b',
            marginTop: 20,
            width: '80%',
            marginLeft: '10%',
            borderWidth: 2,
          }}></TextInput>
        <View
          style={{
            borderRadius: 25,
            backgroundColor: '#022a5b',
            width: '40%',
            marginLeft: '30%',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              return Register({navigation});
            }}
            style={{
              borderRadius: 25,
              fontSize: 25,
              textAlign: 'center',
              color: 'white',
            }}>
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 8,
            marginBottom: 25,
          }}>
          <Text style={{color: 'white'}}>Aready Have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{marginBottom: 20}}>
            <Text style={{color: '#022a5b'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default module = Signup;
