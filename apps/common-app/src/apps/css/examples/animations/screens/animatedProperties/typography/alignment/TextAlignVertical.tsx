import { StyleSheet } from 'react-native';
import type { CSSAnimationKeyframes } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import { ExamplesScreen, VerticalExampleCard } from '@/apps/css/components';
import { colors } from '@/theme';

export default function TextAlignVertical() {
  return (
    <ExamplesScreen<{ keyframes: CSSAnimationKeyframes }>
      CardComponent={VerticalExampleCard}
      buildAnimation={({ keyframes }) => ({
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationName: keyframes,
        animationTimingFunction: 'linear',
      })}
      renderExample={({ animation }) => (
        <Animated.Text style={[styles.text, animation]}>
          Hello from Reanimated!
        </Animated.Text>
      )}
      sections={[
        {
          examples: [
            {
              description:
                "`textAlignVertical` is a **discrete** property. That means, it **can't be smoothly animated** between values. However, we can still change this property in the animation keyframes but the change will be **abrupt**.",
              keyframes: {
                '0%, 100%': {
                  textAlignVertical: 'top',
                },
                '33.3%': {
                  textAlignVertical: 'bottom',
                },
                '66.6%': {
                  textAlignVertical: 'center',
                },
              },
              title: 'Changing Vertical Text Alignment',
            },
          ],
          labelTypes: ['Android'],
          title: 'Text Align Vertical',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    height: 100,
  },
});
