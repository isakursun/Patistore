import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './ProductCardStyles';

export default function ProductCard({product}) {
  console.log(product.imgURL);
  return (
    <View style={styles.card}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text>
        {product.inStock ? null : <Text style={styles.stock}>Stokta Yok</Text>}
      </Text>
    </View>
  );
}
