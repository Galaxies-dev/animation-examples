import { View, Text, StyleSheet } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';

export function Heading({
  children,
  primary = true,
}: React.PropsWithChildren<{ primary?: boolean }>) {
  return (
    <Text
      numberOfLines={1}
      style={{
        fontWeight: '900',
        fontSize: 24,
        textTransform: 'uppercase',
        color: '#1f1f1f',
      }}>
      {children}
    </Text>
  );
}

const primary = true;

const Page = () => {
  return (
    <View>
      <Marquee spacing={20} speed={1}>
        <Heading primary={primary}>@animatereactnative/marquee component</Heading>
      </Marquee>
      <Marquee spacing={20} speed={1}>
        <Heading primary={primary}>Powered by AnimateReactNative.com</Heading>
      </Marquee>
      <Marquee spacing={20} speed={2}>
        <Heading primary={primary}>Built with Reanimated</Heading>
      </Marquee>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
export default Page;
