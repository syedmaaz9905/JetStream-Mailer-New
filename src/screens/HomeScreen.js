import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { Text, TouchableOpacity, View, Animated, StyleSheet } from 'react-native';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Content3 from '../components/Content3';
import Content4 from '../components/Content4';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const translateYAnim = useRef(new Animated.Value(-30)).current;

    const handleTabPress = (index) => {
        setActiveTab(index);
        Animated.spring(animation, {
            toValue: index,
            useNativeDriver: false,
        }).start();

        // Reset animations
        fadeAnim.setValue(0);
        translateYAnim.setValue(-30);

        // Start animations
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const tabWidth = animation.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: ['0%', '25%', '50%', '75%'],
    });

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <Text style={{ color: '#000', fontWeight: 'bold', letterSpacing: 0.8, fontSize: 40 }}>
                    Welcome to JetStream Mailer
                </Text>
            </View>

            <View style={styles.tabsContainer}>
                {['Gmail API', 'All Mailing Server (SMTP)', 'Content 3', 'Content 4'].map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.tab}
                        onPress={() => handleTabPress(index)}
                    >
                        <Text style={styles.tabText}>{tab}</Text>
                    </TouchableOpacity>
                ))}
                <Animated.View style={[styles.indicator, { left: tabWidth }]} />
            </View>

            <Animated.View style={[styles.contentContainer, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
                {activeTab === 0 && <Content1 />}
                {activeTab === 1 && <Content2 />}
                {activeTab === 2 && <Content3 />}
                {activeTab === 3 && <Content4 />}
            </Animated.View>

            {/* <View style={{ backgroundColor: '#000', width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8, height: 100 }}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
                    JetStream Mailer - Bulk Mail Sender | Product of Vexabyte Team{'\n'}
                    Email Support: <Text style={{ fontWeight: 'bold' }}>vexabyteofficial@gmail.com</Text> | Telegram Support: <Text style={{ fontWeight: 'bold' }}>Zolocrypto</Text>
                </Text>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        top: 0
    },
    tabsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        paddingVertical: 10,
        position: 'relative',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
    indicator: {
        position: 'absolute',
        bottom: 0,
        height: 3,
        width: '25%',
        backgroundColor: '#007bff',
    },
    contentContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 18,
        color: '#333',
    },
});

export default HomeScreen;