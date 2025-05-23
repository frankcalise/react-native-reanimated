import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { CSSAnimationKeyframes } from 'react-native-reanimated';

// highlight-start
const pulse: CSSAnimationKeyframes = {
  from: {
    transform: [{ scale: 0.8 }, { rotateZ: '-15deg' }],
  },
  to: {
    transform: [{ scale: 1.2 }, { rotateZ: '15deg' }],
  },
};
// highlight-end

export default function App() {
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            // highlight-next-line
            animationName: pulse,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDirection: 'alternate',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#fa7f7c',
    margin: 64,
  },
});
