import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
            <Image style={{ width: '100%', height: '100%', position: 'absolute' }} source={require('../assets/images/background_login.png')} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', position: 'absolute', gap: 300 }}>
                <Image style={{ height: 225, width: 90 }} source={require('../assets/images/light.png')} />
                <Image style={{ height: 160, width: 65 }} source={require('../assets/images/light.png')} />
            </View>

            <View style={{ width: '100%', height: '100%', justifyContent: 'space-around', paddingBottom: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 40 }}>
                        JetStream Mailer
                    </Text>
                </View>

                <View style={{ alignItems: 'center', marginHorizontal: 16, marginBottom: 16 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 40, marginBottom: 16 }}>
                            Login
                        </Text>
                    </View>

                    <View style={{ backgroundColor: '#0000000D', padding: 20, borderRadius: 8, width: '50%', marginBottom: 22 }}>
                        <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                    </View>

                    <View style={{ backgroundColor: '#0000000D', padding: 20, borderRadius: 8, width: '50%', marginBottom: 22 }}>
                        <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
                    </View>

                    <View style={{ width: '50%' }}>
                        <TouchableOpacity style={{ width: '100%', backgroundColor: '#38bdf8', padding: 12, borderRadius: 8 }} onPress={() => navigation.navigate('Home')}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen