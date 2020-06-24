import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { loginUser } from './authSlice';

const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate,
    concat,
  } = Animated;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email);
    console.log('submit');
    // props.loginUser({ email, password });
  };

  const buttonOpacity = new Value(1);

  const buttonY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const backgroundY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputZindex = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP,
  });

  const textInputOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const rotateCross = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP,
  });

  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 1, 0))
          ),
        ]),
    },
  ]);

  const onCloseState = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 0, 1))
          ),
        ]),
    },
  ]);

  function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };

    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position,
    ]);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
      }}
    >
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateY: backgroundY }],
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
      </Animated.View>

      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View
            style={{
              ...styles.button,
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>LOG IN</Text>
          </Animated.View>
        </TapGestureHandler>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: 'pink',
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }],
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN UP
            </Text>
          </Animated.View>
        </TapGestureHandler>
        <Animated.View
          style={{
            zIndex: textInputZindex,
            opacity: textInputOpacity,
            transform: [{ translateY: textInputY }],
            height: height / 3,
            ...StyleSheet.absoluteFill,
            top: null,
            justifyContent: 'center',
          }}
        >
          <TapGestureHandler onHandlerStateChange={onCloseState}>
            <Animated.View style={styles.closeButton}>
              <Animated.Text
                style={{
                  fontSize: 15,
                  transform: [{ rotate: concat(rotateCross, 'deg') }],
                }}
              >
                X
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>
          <TextInput
            placeholder='email'
            style={styles.textInput}
            placeholderTextColor='black'
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder='password'
            style={styles.textInput}
            placeholderTextColor='black'
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Animated.View style={styles.button}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{ zIndex: 2 }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
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
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});

export default connect(null, { loginUser })(Login);
