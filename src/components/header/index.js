import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

export default function Header() {
    return (
        <View style={styles.viewHeader}>

            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/1280px-NewYorkTimes.svg.png' }}
                style={styles.headerImage}
            />

            <TouchableOpacity>
                
            </TouchableOpacity>
            
        </View>
    );
}
