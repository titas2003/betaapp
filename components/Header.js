import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={{fontSize:30, textAlign: 'center', padding: 30, backgroundColor: 'blue', color: 'red'}}>0</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "10px",
  },
});

export default Header;
