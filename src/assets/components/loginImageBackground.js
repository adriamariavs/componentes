import { View, ImageBackground } from 'react-native';
import { styles } from '../styles/estilos';
import LoginText from './loginText';
import LoginInput from './loginInput';
import LoginButton from './loginButton';
import LoginImage from './LoginImage';

export default function loginImagemBackgroud() {
    return (

        <ImageBackground source={require('../images/imagem8.jpg')} resizeMode="cover" style={styles.loginImageBackground}>
            <LoginText />
            <LoginInput />
            <LoginButton />
            <LoginImage />
        </ImageBackground>
    )
}