import React, { useState } from 'react'
import { View, Animated, TouchableOpacity, Text } from 'react-native'

export default function Hello() {
  const value = useState(new Animated.ValueXY({
    x: 0, y: 0
  }))[0]

  console.log(value)

  const moveBall = () => {
    Animated.timing(value, {
      toValue: { x: 100, y: 100 },
      duration: 1000,
      useNativeDriver: false
    }).start()
  }

  return (
    <View style={{
      width: '100%',
      height: '100%'
    }}>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            backgroundColor: 'blue',
            borderRadius: 100 / 2,
            width: 100,
            height: 100
          }}
        />
      </Animated.View>
      <TouchableOpacity style={{
        position: "absolute",
        bottom: 10,
        left: '50%',
        translateX: -50,
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100/2
      }}
      onPress={moveBall}
      >
        <Text>Push</Text>
      </TouchableOpacity>
    </View>
  )
}