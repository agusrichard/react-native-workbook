import React, { useState } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'

export default function() {
  const [translateX, setTranslateX] = useState(new Animated.Value(0))
  const [translateY, setTranslateY] = useState(new Animated.Value(0))
  

  return (
    <View>
      <Text>Draggable</Text>
    </View>
  )
}