import React from 'react'
import { View,Text,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';

export default function Login({navigation}){
    function goToRegister(){
        navigation.navigate('Register')
    }
    // CHAMADA PARA ADICINAR A IMAGEM 
    return (<View style={style.container}>
        <Image source={require('../../assets/logo.png')} />
        <View style={style.form}>
        <Text style={style.label}>Login</Text>

        {/* Label -> Aonde adiciona a label E-MAIL */}
        <TextInput style={style.email}
        keyboardType="email-address"
        placeholder="Digite seu e E-mail..."
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>

        {/* Label -> Aonde adiciona a label SENHA */}
        <Text style={style.label}>Senha</Text>
        <TextInput style={style.senha}
        secureTextEntry = {true}
        keyboardType="visible-password"
        placeholder="Digite sua Senha..."
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>

        {/* Botão -> Aonde vai criar o botão ENTRAR */}
        <TouchableOpacity style={style.button}><Text style={style.textButton}>Entrar</Text></TouchableOpacity>
        
        <View>
            {/* Aonde fará a chamada para a tela de cadastrar usúario */}
            <TouchableOpacity onPress={goToRegister}>
                <Text style={style.cadastre}>Faça seu cadastro !</Text>
            </TouchableOpacity>
        </View>

        </View>
    </View>);
} 

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 100,
        marginTop: 10,
        
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 7,
        marginTop: 10,
        textAlign: 'center'
    },
    email: {
        borderWidth: 1,
        borderColor: '#000000',
        paddingHorizontal: 20,
        marginBottom: 10,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    senha: {
        borderWidth: 1,
        borderColor: '#000000',
        paddingHorizontal: 20,
        marginBottom: 10,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    button: {
        height: 45,
        backgroundColor: '#3ec46d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    cadastre:{
        textAlign: 'center',
        paddingVertical: 20
    }

});