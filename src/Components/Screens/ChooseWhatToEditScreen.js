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

const ChooseWhatToEdit = ({navigation}) => {
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
          marginLeft: '10%',
          marginTop: 50,
          backgroundColor: '#0e6da5',
          width: '80%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
          }}>
          Choose What To Edit
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', {val: 'contact number'});
        }}
        style={{
          marginLeft: '15%',
          marginTop: 30,
          backgroundColor: '#0e6da5',
          width: '70%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
          }}>
          Contact Number
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', {val: 'address'});
        }}
        style={{
          marginLeft: '25%',
          marginTop: 30,

          backgroundColor: '#0e6da5',
          width: '50%',
          borderRadius: 10,
          marginBottom: 500,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
          }}>
          Address
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default module = ChooseWhatToEdit;
