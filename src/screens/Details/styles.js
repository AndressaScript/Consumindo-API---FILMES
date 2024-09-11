import { StyleSheet } from "react-native";


const styles= StyleSheet.create({
 
    viewContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#E6E6E6', 
      },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            width: 300,
            overflow: 'hidden',
            flexDirection: 'column',
            margin: 10, 
          },
          title: {
            textAlign: 'center',
            marginTop: 100,
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
            marginLeft: 300
          
    }
})

export default styles;
