import { Stack, Link, LinkProps } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  const examples: { title: string; link: LinkProps<string> }[] = [
    {
      title: '1. Reanimated',
      link: { href: '/reanimated' },
    },
    {
      title: '2. Moti',
      link: { href: '/moti' },
    },
    {
      title: '3. Marquee',
      link: { href: '/marquee' },
    },
    {
      title: '4. Lottie',
      link: { href: '/lottie' },
    },
    {
      title: '5. Rive',
      link: { href: '/rive' },
    },
    {
      title: '6. Spring',
      link: { href: '/spring' },
    },
    {
      title: '7. TextInput',
      link: { href: '/textinput' },
    },
    {
      title: '8. Carousel',
      link: { href: '/carousel' },
    },
    {
      title: '9. Animatable',
      link: { href: '/animatable' },
    },
    {
      title: '10. Skia',
      link: { href: '/skia' },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Stack.Screen options={{ title: 'Animation Libraries' }} />
        {examples.map(({ title, link }) => (
          <Link href={link.href} key={link.href} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
    gap: 12,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#38434D',
    fontSize: 36,
  },
});
