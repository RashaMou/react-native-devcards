import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { registerNewUser } from './authSlice';

const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });
  const [registerUser, setRegisterUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [form, setForm] = useState('login');

  const handleSubmit = () => {
    console.log(email);
    console.log('submit');
    // props.loginUser({ email, password });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFill,
        }}
      >
        <ImageBackground
          source={require('../../assets/bg.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>DEVcards</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <View
          style={{
            height: height / 3,
            ...StyleSheet.absoluteFill,
            top: null,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          {form === 'login' ? (
            <>
              <TextInput
                placeholder='email'
                style={styles.textInput}
                onChangeText={(text) =>
                  setLoginUser({ ...loginUser, email: text })
                }
                value={loginUser.email}
              />
              <TextInput
                placeholder='password'
                style={styles.textInput}
                onChangeText={(text) =>
                  setLoginUser({ ...loginUser, password: text })
                }
                value={loginUser.password}
              />
              <TouchableOpacity
                onPress={() => handleLogin()}
                style={{ ...styles.button, backgroundColor: '#00bbb5' }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setForm('signup')}>
                <Text style={{ textAlign: 'center', marginTop: 10 }}>
                  Sign up if you don't have an account
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                placeholder='name'
                style={styles.textInput}
                onChangeText={(text) =>
                  setRegisterUser({ ...registerUser, name: text })
                }
                value={registerUser.name}
              />
              <TextInput
                placeholder='email'
                style={styles.textInput}
                onChangeText={(text) =>
                  setRegisterUser({ ...registerUser, email: text })
                }
                value={registerUser.email}
              />
              <TextInput
                placeholder='password'
                style={styles.textInput}
                placeholderTextColor='black'
                onChangeText={(text) =>
                  setRegisterUser({ ...registerUser, password: text })
                }
                value={registerUser.password}
              />
              <TouchableOpacity
                onPress={() => handleRegister()}
                style={{ ...styles.button, backgroundColor: '#008a90' }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setForm('login')}>
                <Text style={{ textAlign: 'center', marginTop: 10 }}>
                  Login if you have an account
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300,
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});

export default connect(null, { registerNewUser })(Login);
