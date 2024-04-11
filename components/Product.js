import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Product = (props) => {
    const item = props.item
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Image style={{ width: 100, height: 300 }} source={{ uri: item.image }} />
            <Button title='Add to cart' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: '5px',
        shadowColor: 'black',
        borderBottomColor: 'black',
        padding: '10px'
    },
});

export default Product;
