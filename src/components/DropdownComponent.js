import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DropdownComponent = () => {
    const [selectedValue, setSelectedValue] = useState('None');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const data = [
        { id: '1', label: 'TLS 1.0' },
        { id: '2', label: 'TLS 1.1' },
        { id: '3', label: 'TLS 1.2' },
        { id: '4', label: 'TLS 1.3' },
        { id: '5', label: 'TLS 1.4' },
    ];

    const handleSelect = (item) => {
        setSelectedValue(item.label);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>TLS:</Text>
            <TouchableOpacity 
                style={styles.dropdown} 
                onPress={() => setDropdownVisible(!dropdownVisible)}
            >
                <Text style={styles.selectedText}>{selectedValue}</Text>
            </TouchableOpacity>
            {dropdownVisible && (
                <View style={styles.dropdownList}>
                    <ScrollView>
                        {data.map(item => (
                            <TouchableOpacity 
                                key={item.id} 
                                style={styles.item} 
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.itemText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#333',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#fff',
    },
    selectedText: {
        fontSize: 16,
        color: '#333',
    },
    dropdownList: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 8,
        maxHeight: 150,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default DropdownComponent;
