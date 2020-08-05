import React, { useState } from 'react'
import { Animated, View, Text, TouchableOpacity } from 'react-native'

export default function Fade() {
  const [yes, setYes] = useState(true)
  const opacity = useState(new Animated.Value(1))[0]

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View>
      <View 
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Animated.View 
            style={{
              backgroundColor: 'purple',
              opacity: opacity,
              width: 100,
              height: 100,
              borderRadius: 100 / 2
            }}
          />
        </View>
        <View style={{
          position: 'absolute',
          bottom: 10,
          flexDirection: 'row'
        }}>
          <TouchableOpacity
            style={{ backgroundColor: 'blue', margin: 10 }}
            onPress={fadeIn}
          >
            <Text>Fade In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: 'blue', margin: 10 }}
            onPress={fadeOut}
          >
            <Text>Fade Out</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}