import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, Modal, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SuccessGif from '../images/cook.gif';
import { registerUser } from '../redux/authSlice';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const dispatch = useDispatch();
  const registrationError = useSelector((state) => state.auth.error);

  const handleRegistration = () => {
    // Basic validation
    if (!username || !email || !phone || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }

    if (!isValidPhone(phone)) {
      Alert.alert('Error', 'Invalid phone number format');
      return;
    }

    // Dispatch registerUser action
    dispatch(registerUser({ username, email, phone, password }));
  };

  const isValidEmail = (email) => {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // Simple phone number validation (10 digits)
    return /^\d{10}$/.test(phone);
  };

  const closeModal = () => {
    setIsSuccessModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
      {registrationError && <Text style={styles.error}>{registrationError}</Text>}

      {/* Success modal */}
      <Modal
        visible={isSuccessModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Image source={SuccessGif} style={styles.gif} />
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  gif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
