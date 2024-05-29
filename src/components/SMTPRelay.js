import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import DropdownComponent from './DropdownComponent'
import TableComponent from './TableComponent'

const SMTPRelay = () => {

    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                <Image style={{ width: 42, height: 42 }} source={require('../assets/images/upload.png')} />
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 22 }}>SMTP Relay</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 16 }}>
                <Text style={{ color: '#000', fontWeight: '600', fontSize: 18 }}>SMTP Server:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, width: '60%', borderRadius: 6 }}
                    placeholder="smtp-relay.brevo.com"
                    onChangeText={text => console.log(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, gap: 16 }}>
                <Text style={{ color: '#000', fontWeight: '600', fontSize: 18 }}>Port:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, width: '60%', borderRadius: 6 }}
                    placeholder="9001"
                    onChangeText={text => console.log(text)}
                />
            </View>

            <View>
                <DropdownComponent />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'space-around', backgroundColor: '#ededed', borderRadius: 10, padding: 8 }}>
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

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TableComponent />
            </View>

        </View>
    )
}

export default SMTPRelay