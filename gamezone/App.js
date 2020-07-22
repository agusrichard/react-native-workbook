import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import Home from './screens/Home'

const getFonts = () => Font.loadAsync({
  'epilogue-bold': require('./assets/fonts/Epilogue-Bold.ttf'),
  'epilogue-extra-light-italic': require('./assets/fonts/Epilogue-ExtraLightItalic.ttf'),
  'epilogue-light': require('./assets/fonts/Epilogue-Light.ttf'),
  'epilogue-medium': require('./assets/fonts/Epilogue-Medium.ttf'),
  'epilogue-regular': require('./assets/fonts/Epilogue-Regular.ttf'),
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Home />
    )
  } else {
    return (
      <AppLoading 
        startAsync={ getFonts }
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
