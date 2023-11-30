import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {


  return (
    <SafeAreaView >
      <Text
        style={{ fontSize: 18, color: 'blue', alignSelf: 'center', marginTop: 15 }}
      >IronSoul</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
