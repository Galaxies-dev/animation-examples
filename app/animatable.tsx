import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Page = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">
        Up and down you go
      </Animatable.Text>
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{ textAlign: 'center' }}>
        ❤️
      </Animatable.Text>

      <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
    </View>
  );
};
export default Page;
