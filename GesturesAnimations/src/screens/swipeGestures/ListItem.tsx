import React from 'react'
import { StyleSheet, View, Text, Animated, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'



const LeftActions = (progress: any, dragX: any) => {
  // console.log('left dragX', dragX)
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  return (
    <View style={styles.leftActions}>
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Add to Cart</Animated.Text>
    </View>
  )
}

const RightActions = ({ progress, dragX, onPress }: { progress: any, dragX: any, onPress: any }) => {
  console.log('right dragX', dragX)
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rightActions}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Delete</Animated.Text>
      </View>
    </TouchableOpacity>
  )
}


export default function ListItem(props: any) {

  return (
    <Swipeable
      renderLeftActions={ LeftActions }
      renderRightActions={ (progress: any, dragX: any) => (
        <RightActions progress={progress} dragX={dragX} onPress={props.onPressRight} />
      )}
      onSwipeableLeftOpen={ props.onSwipeFromLeft }
    >
      <View style={styles.item}>
        <Text>{ props.title }</Text>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  leftActions: {
    backgroundColor: 'green',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10
  },
  actionText: {
    color: 'white',
    fontSize: 18,
  },
  rightActions: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    height: '100%',
    width: '100%'
  }
})