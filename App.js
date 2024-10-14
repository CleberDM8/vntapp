import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TextInputComponent, TouchableOpacity } from 'react-native';
import{ Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
          //estilo da pagina
    <View style={{flex: 1, alignItems: 'center', alignItems:'stretch', padding:20, backgroundColor:'grey'} }> 

              {/*estilo da imagem/nome*/}
      <view style={{margin: 50, alignItems:'center', textAlign:'center'}}>

        <Image source={require('./assets/img_cel.png')} style= {{width:100, height:100, margin:'auto'}}/>

        <text style = {{fontFamily:'arial', fontSize:38, fontWeight:'bold'}}>App</text>
        <StatusBar style='auto'/>

      </view>
              {/*area do CPF*/}
      <view style={{flexDirection:'row', alignItems:'center', height:50, textAlign:'center'}}>
        
        <view style={{alignItems:'stretch', borderColor:'black', marginTop: 50, width:10, height:10}}>
          <TextInput placeholder='CPF' style={{padding:10, backgroundColor:'white'}}/>

        </view>
      </view>
        
        {/*<view style={{flexDirection:'row', alignItems:'center', textAlign:'center', width:30}}>
        */}

          {/*Area da senha*/}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        <TextInput
          placeholder='Senha'
          placeholderTextColor={'black'} //cor da letra
          style={{ padding: 10, backgroundColor:'white', width: 140, height: 40, borderWidth: 1, marginLeft:3, borderColor: 'white',}} // estilos da caixa de senha
          secureTextEntry={true}
        />
          
        <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight:2}}> 
          
          <Ionicons name='eye' color='black' size={25} />
          
        </TouchableOpacity>

      </View>


              {/*area do botao avancar*/}
      <view style={{flex:1, margin : 10 , marginLeft: 275,
      margintop : 20,
        justifyContent:'center',textAlign:'center'}}>

      <TouchableOpacity style={{ width: 180, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}> 
          
          <text>Avançar</text>
          
        </TouchableOpacity>
      </view>
         
         {/*
          <view style={{flexDirection:'row', backgroundColor:'white'}}>
            <view >
              <TextInput/>
            </view>
            <switch/>
          </view>
         */}
          
      {/*</view>*/}

    <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
        
        {/* inputArea */}
        <View style={{ flexDirection: 'row', width: '90%', backgroundColor: 'blue', height: 40, alignItems: 'center' }}>
          
          {/* input */}
          <TextInput
            style={{ flex: 1, weight: 10, height: 40, color: 'black', padding: 10, fontSize: 15, backgroundColor: 'white' }}
            placeholder='Insira sua senha'
            secureTextEntry={true} // Para ocultar a senha
          />

          {/* icon */}
          <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
            <Ionicons name='eye' color='black' size={25} />
          </TouchableOpacity>

        </View>
      </View>


      
      <Text>teste!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
