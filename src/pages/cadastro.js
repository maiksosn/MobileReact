import React from 'react'
import { View,Text,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';

export default function Register({navigation}){
    function goToLogin(){
        navigation.navigate('Login')
    }
    return (<View style={style.container}>
        
        <View style={style.form}>
        <Text style={style.label}>Nome</Text>
        <TextInput style={style.input}
        keyboardType="default"
        placeholder="Nome:"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <Text style={style.label}>Email</Text>
        <TextInput style={style.input}
        secureTextEntry = {true}
        keyboardType="email-address"
        placeholder="E-mail:"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <Text style={style.label}>cpf</Text>
        <TextInput style={style.input}
        keyboardType="number-pad"
        placeholder="CPF"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
         <Text style={style.label}>Cargo</Text>
        <TextInput style={style.input}
        secureTextEntry = {true}
        autoCompleteType="password"
        placeholder="Cargo"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <TouchableOpacity style={style.button}><Text style={style.textButton}>Criar Conta</Text></TouchableOpacity>
        <View>
            <TouchableOpacity onPress={goToLogin}>
                <Text style={style.cadastre}>voltar para o Login</Text>
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
    titulo: {
        fontSize: 20,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 100,
        marginTop: 10,
        
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
        marginTop: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        marginBottom: 2,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    button: {
        height: 45,
        backgroundColor: '#3ec46d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10
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