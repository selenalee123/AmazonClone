import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';


interface Props {

}

const HomeScreen = (props: Props) => {
    return (
        <View style={styles.page}>
            {/* Render Product Component */}
            <FlatList data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
});

