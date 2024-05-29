import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

const data = [
    { id: '1', col1: '1', col2: '18vsadb65dsfe654', col3: 'Sent' },
    { id: '2', col1: '2', col2: '18vsadb65dsfe654', col3: 'Sent' },
    { id: '3', col1: '3', col2: '18vsadb65dsfe654', col3: 'Sent' },
    { id: '4', col1: '4', col2: '18vsadb65dsfe654', col3: 'Sent' },
    { id: '5', col1: '5', col2: '18vsadb65dsfe654', col3: 'Sent' },
    { id: '6', col1: '6', col2: '18vsadb65dsfe654', col3: 'Sent' },
];

const TableComponent = () => {
    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.col1}</Text>
            <Text style={styles.cell}>{item.col2}</Text>
            <Text style={styles.cell}>{item.col3}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>S.No.</Text>
                <Text style={styles.headerText}>Mail ID</Text>
                <Text style={styles.headerText}>Sent To</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fafafa',
        padding: 16,
        borderRadius: 10,
        height: 200,
        width: 700,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#000',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    scrollContainer: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
});

export default TableComponent;
