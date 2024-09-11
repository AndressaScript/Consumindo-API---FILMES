import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import CardMovies from '../../components/cardMovies'; 
export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const { titulo, autor, descricao, editora, faixaEtaria } = route.params || {};

  return (
    <View style={styles.viewContainer}>

      <CardMovies
        titulo={titulo}
        autor={autor}
        descricao={descricao}
        editora={editora}
        faixaEtaria={faixaEtaria}
      />
      
     
    </View>
  );
}

