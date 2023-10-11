import React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Pizza Margherita</Text>
      <ScrollView>
        <View style={styles.caixa}>
          <View style={styles.cxFoto}>
            <Image
              style={styles.img}
              resizeMode="stretch"
              source={require('../assets/Pizza2.png')}
            />
          </View>
          <Text style={styles.subtitulo}>R$ 45,00</Text>
        </View>

        {/* Botão para navegar de volta para 'Home' */}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            navigation.navigate('Home'); // Navegue para 'Home'
          }}
        >
          <Text>Voltar para Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3385ff',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 38,
    textAlign: 'center'
  },
  img: {
    width: 200,
    height: 170,
    borderRadius: 40,
    paddingTop: 40,
  },
  botao: {
    width:200,
    backgroundColor:'#0099e6',
    alignItems:'center',
    height:30,
    justifyContent:'center',
    borderRadius:30,
    fontSize:40,
  },
  cxFoto: {
    marginTop: 10,
    margin: 5,
    alignItems: "center"
  },
  caixa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 35,
    margin: 20,
    padding: 20,
    borderColor: '#FFFAFA'
  },
  subtitulo: {
    fontSize: 20,
    margin: 12,
    color: '#00004d'
  },
});
