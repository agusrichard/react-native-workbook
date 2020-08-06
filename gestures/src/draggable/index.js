import React, { useState } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'
import { State, PanGestureHandler } from 'react-native-gesture-handler'

export default function() {
  const [translateX, setTranslateX] = useState(new Animated.Value(0))
  const [translateY, setTranslateY] = useState(new Animated.Value(0))
  const [lastOffSet, setLastOffSet] = useState({ x: 0, y: 0 })
  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )
  const onHandleStateChange = event => {
    if (event.nativeEvent.oldState === State.Active) {
      setLastOffSet({
        x: lastOffSet.x + event.nativeEvent.translationX,
        y: lastOffSet.y + event.nativeEvent.translationY
      })
      translateX.setOffset(lastOffSet.x)
      translateX.setValue(0)
      translateY.setOffset(lastOffSet.y)
      translateY.setValue(0)

    }
  }

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandleStateChange}
      >
        <Animated.View 
          style={[styles.ball, {
            transform: [
              { translateX, translateY }
            ]
          }]}
        />
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  ball: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
})