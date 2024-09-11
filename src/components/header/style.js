import { StyleSheet } from "react-native";


const estilo = StyleSheet.create({


    viewHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:8,
        marginLeft:80
    },
    textHeader :{
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        marginRight:75
    },
    headerImage :{
        width: 270, 
        height: 30, 
        marginTop: 20,
        resizeMode: 'contain', // Ajusta a imagem para caber no container
    }



})

export default estilo;