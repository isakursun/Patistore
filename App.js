import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import products from './data.json';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'gray'} />
      <Text style={styles.header}>PATISTORE</Text>
      <TextInput placeholder="Ara..." style={styles.input} />
      <FlatList
        numColumns={2}
        horizontal={false}
        data={products}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 20,
  },
  input: {
    height: 50,
    width: Dimensions.get('window').width - 40,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical:10,
  },
});

export default App;
