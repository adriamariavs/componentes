import { Pressable, View, Text } from 'react-native';
import { styles } from '../styles/estilos';

export default function LoginButton() {
    return (

        <View>

            <Pressable style={styles.btn} 
            onPress={() => console.log("Você pressionou o botão!")}>
            <Text> Entrar </Text>
            </Pressable> 
        </View>

    )
}