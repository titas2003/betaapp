import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Register from './components/view/Register';

export default function App() {
  return (
        <Provider store={store}>
          <Register />
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
  }
});
