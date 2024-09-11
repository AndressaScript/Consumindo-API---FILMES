import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({ titulo, autor, descricao, editora, faixaEtaria }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => 
                navigation.navigate('Details', { titulo, autor, descricao, editora, faixaEtaria })
            }
        >
    
            <View style={styles.dados_livro}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.textCommon}><strong>Autor:</strong> {autor}</Text>
                <Text style={styles.textCommon}><strong>Descrição:</strong> {descricao}</Text>
                <Text style={styles.textCommon}><strong>Editora:</strong> {editora}</Text>
                <Text style={styles.textCommon}><strong>Faixa Etária:</strong> {faixaEtaria}</Text>
            </View>
        </TouchableOpacity>
    );
}