import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Pressable, StyleSheet } from 'react-native'
// import DocumentPicker from 'react-native-document-picker';

const UploadInformation = () => {

    const [filePath, setFilePath] = useState('');

    const [selectedOptionContent, setSelectedOptionContent] = useState('withoutDirectoryContent');
    
    const [selectedOptionContentDetails, setSelectedOptionContentDetails] = useState('htmlContentDetails');

    const [selectedOptionCredential, setSelectedOptionCredential] = useState('withoutDirectoryCredential');
    
    // const handleFilePicker = async () => {
    //     try {
    //         const res = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.allFiles],
    //         });
    //         setFilePath(res.uri);
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             console.log('User canceled the picker');
    //         } else {
    //             throw err;
    //         }
    //     }
    // };

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                <Image style={{ width: 42, height: 42 }} source={require('../assets/images/upload.png')} />
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 22 }}>Upload Information</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, justifyContent: 'center', backgroundColor: '#ededed', borderRadius: 10, padding: 8 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 18, marginTop: 10 }}>Upload Recipient File Below</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'center', marginBottom: 10 }}>
                    <TextInput
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, borderColor: '#ccc', borderWidth: 1, width: '80%' }}
                        value={filePath}
                        placeholder="Select a file"
                        editable={false}
                    />
                    <TouchableOpacity
                        style={{ marginLeft: 10, backgroundColor: '#38bdf8', padding: 10, borderRadius: 5 }}
                    // onPress={handleFilePicker}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, justifyContent: 'center', backgroundColor: '#ededed', borderRadius: 10, padding: 8 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 18, marginTop: 10 }}>Upload Content</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionContent('withoutDirectoryContent')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionContent === 'withoutDirectoryContent' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Without Directory</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => setSelectedOptionContent('withDirectoryContent')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionContent === 'withDirectoryContent' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>With Directory</Text>
                    </Pressable>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionContentDetails('htmlContentDetails')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionContentDetails === 'htmlContentDetails' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>HTML</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionContentDetails('pdfContent')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionContentDetails === 'pdfContent' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>PDF</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionContentDetails('imagePNGContent')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionContentDetails === 'imagePNGContent' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Image (PNG)</Text>
                    </Pressable>
                    
                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => setSelectedOptionContentDetails('imageJPGContent')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionContentDetails === 'imageJPGContent' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Image (JPG)</Text>
                    </Pressable>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'center', marginBottom: 10, marginTop:15 }}>
                    <TextInput
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, borderColor: '#ccc', borderWidth: 1, width: '80%' }}
                        value={filePath}
                        placeholder="Select a file"
                        editable={false}
                    />
                    <TouchableOpacity
                        style={{ marginLeft: 10, backgroundColor: '#38bdf8', padding: 10, borderRadius: 5 }}
                    // onPress={handleFilePicker}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, justifyContent: 'center', backgroundColor: '#ededed', borderRadius: 10, padding: 8 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 18, marginTop: 10 }}>Upload Credential</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionCredential('withoutDirectoryCredential')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionCredential === 'withoutDirectoryCredential' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Without Directory</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => setSelectedOptionCredential('withDirectoryCredential')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionCredential === 'withDirectoryCredential' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>With Directory</Text>
                    </Pressable>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'center', marginBottom: 10, marginTop:15 }}>
                    <TextInput
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, borderColor: '#ccc', borderWidth: 1, width: '80%' }}
                        value={filePath}
                        placeholder="Select a file"
                        editable={false}
                    />
                    <TouchableOpacity
                        style={{ marginLeft: 10, backgroundColor: '#38bdf8', padding: 10, borderRadius: 5 }}
                    // onPress={handleFilePicker}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Upload</Text>
                    </TouchableOpacity>
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

export default UploadInformation