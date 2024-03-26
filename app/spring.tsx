import { View, Text } from 'react-native';
import { useSpring, animated } from '@react-spring/native';

const AnimatedText = animated(Text);

const Page = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      loop: { reverse: true },
    }),
    []
  );

  return (
    <View>
      <AnimatedText
        style={[
          props,
          {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'blue',
            marginTop: 100,
            textAlign: 'center',
          },
        ]}>
        Hello Spring
      </AnimatedText>
    </View>
  );
};
export default Page;
