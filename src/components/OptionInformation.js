import React, { useState } from 'react'
import { Image, Pressable, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import TableComponent from './TableComponent';

const OptionInformation = () => {

    const [selectedOptionAttachmentFormat, setSelectedOptionAttachmentFormat] = useState('pdfFormat');

    const [selectedOptionHTMLFormat, setSelectedOptionHTMLFormat] = useState('No');

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                <Image style={{ width: 42, height: 42 }} source={require('../assets/images/option.png')} />
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 22 }}>Option Information</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, justifyContent: 'center', backgroundColor: '#ededed', borderRadius: 10, padding: 8 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 18, marginTop: 10 }}>Format of Attachment</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 12, marginLeft: 12, marginRight: 12 }}>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionAttachmentFormat('pdfFormat')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionAttachmentFormat === 'pdfFormat' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>PDF</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionAttachmentFormat('imagePngFormat')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionAttachmentFormat === 'imagePngFormat' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Image (PNG)</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => setSelectedOptionAttachmentFormat('imageJpgFormat')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionAttachmentFormat === 'imageJpgFormat' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Image (JPG)</Text>
                    </Pressable>

                </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 16, justifyContent: 'center', backgroundColor: '#ededed', borderRadius: 10, padding: 8 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 18, marginTop: 10 }}>Send HTML in Format</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 12, marginLeft: 12, marginRight: 12 }}>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionHTMLFormat('No')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionHTMLFormat === 'No' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>No</Text>
                    </Pressable>

                    <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
                        onPress={() => setSelectedOptionHTMLFormat('Yes')}
                    >
                        <View style={styles.radioButtons}>
                            {selectedOptionHTMLFormat === 'Yes' && (
                                <View style={styles.selectedRadioButton} />
                            )}
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Yes</Text>
                    </Pressable>

                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-around', backgroundColor: '#ededed', borderRadius: 10, padding: 8}}>
                <TouchableOpacity style={{ padding: 12, backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, gap: 8 }}>
                    <Image style={{ width: 22, height: 22 }} source={require('../assets/images/mail.png')} />
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Submit Mail</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 12, backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, gap: 8 }}>
                    <Image style={{ width: 22, height: 22 }} source={require('../assets/images/stop.png')} />
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Stop Mail</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ padding: 12, backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, gap: 8 }}>
                    <Image style={{ width: 22, height: 22 }} source={require('../assets/images/logout.png')} />
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 12, backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, gap: 8 }}>
                    <Image style={{ width: 22, height: 22 }} source={require('../assets/images/help.png')} />
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Help</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TableComponent />
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

export default OptionInformation