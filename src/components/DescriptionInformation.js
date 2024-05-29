import React, { useState } from 'react'
import { Image, Pressable, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'

const DescriptionInformation = () => {

    const [selectedOptionDescription, setSelectedOptionDescription] = useState('withoutDirectoryDescription');

    const [description, setDescription] = useState('');

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                <Image style={{ width: 38, height: 38 }} source={require('../assets/images/description.png')} />
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 22 }}>Description Information</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:40, justifyContent: 'center' }}>

                <Pressable
                    style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                    onPress={() => setSelectedOptionDescription('withoutDirectoryDescription')}
                >
                    <View style={styles.radioButtons}>
                        {selectedOptionDescription === 'withoutDirectoryDescription' && (
                            <View style={styles.selectedRadioButton} />
                        )}
                    </View>
                    <Text style={{ color: '#000', fontSize: 16 }}>Without Directory</Text>
                </Pressable>

                <Pressable
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setSelectedOptionDescription('withDirectoryDescription')}
                >
                    <View style={styles.radioButtons}>
                        {selectedOptionDescription === 'withDirectoryDescription' && (
                            <View style={styles.selectedRadioButton} />
                        )}
                    </View>
                    <Text style={{ color: '#000', fontSize: 16 }}>With Directory</Text>
                </Pressable>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 16 }}>
                <Text style={{ color: '#000', fontWeight: '600', fontSize: 18 }}>Subject:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, width: '60%', borderRadius: 6 }}
                    placeholder="Affirmation"
                    onChangeText={text => console.log(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 16 }}>
                <Text style={{ color: '#000', fontWeight: '600', fontSize: 18 }}>Name (Spoof):</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, width: '60%', borderRadius: 6 }}
                    placeholder="Affirmation"
                    onChangeText={text => console.log(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 16 }}>
                <Text style={{ color: '#000', fontWeight: '600', fontSize: 18 }}>Mail Description:</Text>

                <View style={{ flex: 1, marginLeft: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}>
                    <ScrollView style={{ maxHeight: 160 }}>
                        <TextInput
                            style={{ minHeight: 100, padding: 10 }}
                            placeholder="Enter mail description..."
                            multiline
                            numberOfLines={6}
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                    </ScrollView>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    radioButtons: {
        height: 22,
        width: 22,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    selectedRadioButton: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#ff4747'
    }
});

export default DescriptionInformation