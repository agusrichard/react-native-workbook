import React, { useRef } from 'react'
import { View, Animated, Text, PanResponder } from 'react-native'

export default function PanResponderScreen() {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value
      })
    },
    onPanResponderMove: (_, gestures) => {
      console.log(pan)
      pan.setValue({
        x: gestures.dx,
        y: gestures.dy
      })
    },
    onPanResponderRelease: () => {
      pan.flattenOffset()
    }
  })).current

  
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Animated.View 
          style={{
            backgroundColor: 'blue',
            width: 100,
            transform: [
              { translateX: pan.x },
              { translateY: pan.y }
            ],
            height: 100,
            borderRadius: 100 / 2
          }}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  )
}