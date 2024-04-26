import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#e1e3e6',
    marginHorizontal: 10,
    marginVertical: 10,
    width: 180,
    padding:5,
    borderRadius:10,
    justifyContent:'space-between',
  },
  image: {
    width: 150,
    height: 200,
    borderWidth: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  stock: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
