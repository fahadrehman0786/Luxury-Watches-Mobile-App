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

const Checkout = ({navigation, route}) => {
  const {name, price, image} = route.params;

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
          backgroundColor: '#0e6da5',
          borderRadius: 20,

          marginTop: 50,
          width: '70%',
          marginLeft: '15%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Avatar.Image
          style={{marginTop: 30}}
          size={200}
          source={require('../../assets/3.jpg')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            marginTop: 30,

            backgroundColor: '#022a5b',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 5,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            borderRadius: 10,
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: 'white',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 5,
            borderRadius: 10,
            fontSize: 30,
            marginTop: 10,
            backgroundColor: '#022a5b',
            padding: 5,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: 55,
            marginBottom: 5,
          }}>
          {price + '$'}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          return Alert.alert(
            'Thank you for your Purchase',
            'Your Purchased Item will be delivered on the given address ',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Explore More',
                onPress: () => {
                  navigation.navigate('Explore');
                },
              },
            ],
          );
        }}
        style={{
          marginLeft: '25%',
          marginTop: 30,
          backgroundColor: '#0e6da5',
          width: '50%',
          borderRadius: 10,
          marginBottom: 200,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
          }}>
          CheckOut
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default module = Checkout;
