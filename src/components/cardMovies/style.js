import { StyleSheet } from "react-native";


const styles= StyleSheet.create({

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        // Sombra no React Native
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        width: 300,
        overflow: 'hidden',
        flexDirection: 'column',
        margin: 10, // Adicionado para espaçamento entre os cards
      },
      title: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
      },
      dados_livro: {
        padding: 15,
      },
      textCommon: {
        marginVertical: 5,
        fontSize: 14,
        color: '#555',
        fontWeight: '500',
      },


})

export default styles