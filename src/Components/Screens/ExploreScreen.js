import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dialog from 'react-native-dialog';
import DialogInput from 'react-native-dialog-input';
import {DialogButtonProps} from 'react-native-dialog/lib/Button';
import {DialogInputProps} from 'react-native-dialog/lib/Input';
import {useEffect} from 'react';

import {db} from '../../config';
import {getDatabase, ref, onValue} from 'firebase/database';
import {database} from '../../config';
import axios from 'axios';
import {signOut} from 'firebase/auth';

import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
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
import Checkout from './CheckoutScreen';

const Explore = ({navigation}) => {
  const [filterprice, setfilterprice] = useState(0);
  const [userData, setData] = useState([]);
  const products = [];

  const handlerClick = key => {
    console.log('in handler');

    console.log(key.name);
    console.log(key.price);
    navigation.navigate('Checkout', {
      name: key.name,
      price: key.price,
      image: key.image,
    });
  };

  useEffect(() => {
    console.log('HELLO1');

    const response = ref(database, '/products');
    onValue(response, snapshot => {
      snapshot.forEach(doc => {
        products.push({
          ...doc.val(),
        });
      });
    });
    setData(products);
  }, []);

  const numVerification = () => {
    if (isNaN(filterprice)) {
      return Alert.alert('Incorrect', 'Enter a correct number ');
    } else {
      return Alert.alert('Correct', 'WOW ');
    }
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
          height: 160,
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlignVertical: 'center',
            fontSize: 50,
            color: 'white',
            flex: 1,
            fontFamily: 'CinzelDecorative-Bold',
          }}>
          EXPLORE
        </Text>

        <View
          style={{
            marginTop: 10,
            width: '80%',

            marginLeft: '10%',
            marginBottom: 3,
          }}>
          <View
            style={{
              borderRadius: 25,
              marginTop: -20,
              width: '80%',
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
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
        <TextInput
          onChangeText={setfilterprice}
          placeholder="Enter Price"
          style={{
            width: '50%',
            height: 40,
            marginTop: 20,
            marginLeft: 17,
            backgroundColor: 'white',
          }}></TextInput>
        <Button
          onPress={() => numVerification()}
          icon={require('../../assets/filter_icon.png')}
          disabled={true}
          style={{
            marginLeft: 4,
            marginTop: 20,
            backgroundColor: 'white',
            width: '40%',
            tintColor: '#0e6da5',
          }}>
          Filter
        </Button>
      </View>
      {console.log(userData + 'THIS IS ARR')}
      {console.log('HELLO')}
      {console.log(filterprice)}

      <ScrollView style={{marginTop: 40}} horizontal={true}>
        {userData.map(key => {
          if (filterprice == 0) {
            return (
              <ScrollView horizontal={true}>
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Avatar.Image
                    size={150}
                    source={require('../../assets/3.jpg')}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      console.log('in handler1');

                      handlerClick(key);
                    }}>
                    <Text
                      style={{
                        borderRadius: 10,
                        marginTop: 5,
                        textAlign: 'center',
                        fontSize: 20,
                        backgroundColor: '#0e6da5',
                        color: 'white',
                      }}>
                      {key.name}
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      borderRadius: 10,
                      textAlign: 'center',
                      marginTop: 5,
                      fontSize: 20,
                      backgroundColor: '#0e6da5',
                      color: 'white',
                    }}>
                    {key.price + '$'}
                  </Text>
                </View>
              </ScrollView>
            );
          } else if (filterprice !== 0) {
            if (key.price <= filterprice) {
              return (
                <ScrollView horizontal={true}>
                  <View style={{flexDirection: 'column', marginLeft: 20}}>
                    <Avatar.Image
                      size={150}
                      source={require('../../assets/3.jpg')}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        console.log('in handler1');

                        handlerClick(key);
                      }}>
                      <Text
                        style={{
                          marginTop: 5,
                          textAlign: 'center',
                          fontSize: 20,
                          backgroundColor: '#0e6da5',
                          color: 'white',
                        }}>
                        {key.name}
                      </Text>
                    </TouchableOpacity>

                    <Text
                      style={{
                        borderRadius: 10,
                        textAlign: 'center',
                        marginTop: 5,
                        fontSize: 20,
                        backgroundColor: '#0e6da5',
                        color: 'white',
                      }}>
                      {key.price + '$'}
                    </Text>
                  </View>
                </ScrollView>
              );
            }
          }
        })}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          auth.signOut();
          navigation.navigate('Login');
        }}
        style={{
          marginTop: 50,
          marginBottom: 20,
          backgroundColor: '#0e6da5',
          width: '50%',
          marginLeft: '25%',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 30}}>
          Log Out
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChooseWhatToEdit');
        }}
        style={{
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: '#0e6da5',
          width: '50%',
          marginLeft: '25%',
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 30}}>
          Edit Profile
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default module = Explore;
