import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Maik from '../../assets/maik.png';

export default function Register({ navigation }) {
    function goToLogin() {
        navigation.navigate('Login')
    }
    // CHAMADA PARA ADICINAR A IMAGEM 
    return (<View style={style.container}>
        <Text style={style.titulo}></Text>
        <View style={style.form}>
            <View style={style.screen}>
                <Image style={style.imagem} source={{uri:'https://avatars.githubusercontent.com/u/81448507?v=4'}} />
            </View>

            {/* Label -> Aonde adiciona a label NOME */}
            <Text style={style.label}></Text>
            <TextInput style={style.nome}
                keyboardType="default"
                placeholder="Nome"
                placeholderTextColor="#999"
                autoCapitalize='none'
                autoCorrect={false}
            ></TextInput>

            {/* Label -> Aonde adiciona a label E-MAIL */}
            <Text style={style.label}></Text>
            <TextInput style={style.email}
                placeholder="E-mail"
                placeholderTextColor="#999"
                autoCapitalize='none'
                autoCorrect={false}
            ></TextInput>

            {/* Label -> Aonde adiciona a label CPF */}
            <View style={style.row}>
                <Text style={style.label}></Text>
                <TextInput style={style.cpf}
                    keyboardType="number-pad"
                    placeholder="CPF"
                    placeholderTextColor="#999"
                    autoCapitalize='none'
                    autoCorrect={false}
                ></TextInput>

            {/* Label -> Aonde adiciona a label RG */}
                <Text style={style.label}></Text>
                <TextInput style={style.rg}
                    keyboardType="number-pad"
                    placeholder="RG"
                    placeholderTextColor="#999"
                    autoCapitalize='none'
                    autoCorrect={false}
                ></TextInput>
            </View>

            {/* Label -> Aonde adiciona a label CARGO */}
            <Text style={style.label}></Text>
            <TextInput style={style.cargo}
                secureTextEntry={true}
                placeholder="Cargo"
                placeholderTextColor="#999"
                autoCapitalize='none'
                autoCorrect={false}
            ></TextInput>

            {/* Botão -> Aonde adiciona a botão CADASTRAR */}
            <TouchableOpacity style={style.button}><Text style={style.textButton}>Cadastrar</Text></TouchableOpacity>
            
            <View>
                {/* Aonde fará o retorno para a tela de LOGIN novamente */}
                <TouchableOpacity onPress={goToLogin}>
                    <Text style={style.cadastre}>Voltar para o Login</Text>
                </TouchableOpacity>
            </View>

        </View>

    </View>);
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 50,
        marginTop: 10,

    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 1,
        marginTop: 1,
    },
    nome: {
        borderWidth: 1,
        borderColor: '#000000',
        paddingHorizontal: 20,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    email: {
        borderWidth: 1,
        borderColor: '#000000',
        paddingHorizontal: 20,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    cargo: {
        borderWidth: 1,
        borderColor: '#000000',
        paddingHorizontal: 20,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    button: {
        height: 45,
        backgroundColor: '#0000FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15,
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        
    },
    cadastre: {
        textAlign: 'center',
        paddingVertical: 20,
    },
    cpf: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000',
        width: 150,
        paddingHorizontal: 20,
    },
    rg: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        width: 115,
        paddingHorizontal: 20,
        marginLeft: 11,
        fontSize: 14,
        height: 45,
        
    },
    row: {
        marginTop: 5,
        marginTop: 15,
        flexDirection: "row",
        fontSize: 14,
        height: 45,

    },
    imagem: {
        borderRadius: 100,
        width: 200,
        height: 200,
        
    },
    screen: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
    },


});