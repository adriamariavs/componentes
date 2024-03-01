import { View, Image } from 'react-native';
import { styles } from '../styles/estilos';

export default function LoginImage() {
    return (

        <View>
            <Image source={require('../images/imagemnova.jpg')} style={styles.imagereact} />
        
        </View>
    )}
