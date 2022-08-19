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
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config';

const Login = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const LoginVerification = async ({navigation}) => {
    if (username === '' || password === '') {
      return Alert.alert(
        'Username or Password not Entered',
        'Please fill both fields ',
      );
    } else {
      signInWithEmailAndPassword(auth, username, password)
        .then(() => {
          console.log('Signed In');
          Alert.alert('Signed In Successfully', '');
          navigation.navigate('Explore');
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Incorrect!', 'The password enetered is Incorrect');
            console.log('Wrong Pass');
          } else if (error.code === 'auth/user-not-found') {
            console.log('No user!');
            Alert.alert(
              'Inccorrect!',
              'The user with this email doesnt Exist!',
            );
          } else {
            console.log(error);
          }
        });
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#022a5b'}}>
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
          marginTop: 70,

          width: '80%',
          backgroundColor: '#0e6da5',
          marginLeft: '10%',
          marginBottom: 500,
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
            SIGN IN
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
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={setpassword}
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
              return LoginVerification({navigation});
            }}
            style={{
              borderRadius: 25,
              fontSize: 25,
              textAlign: 'center',
              color: 'white',
            }}>
            <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>
              LOGIN
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
          <Text style={{color: 'white'}}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={{marginBottom: 20}}>
            <Text style={{color: '#022a5b'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default module = Login;
