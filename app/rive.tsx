import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Rive from 'rive-react-native';

function RiveDemo() {
  return (
    <Rive
      url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
      artboardName="Avatar 1"
      stateMachineName="avatar"
      style={{ width: 400, height: 400 }}
    />
  );
}

const Page = () => {
  return (
    <View style={styles.container}>
      <RiveDemo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page;
