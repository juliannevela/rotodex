import { Slot, SplashScreen } from 'expo-router';
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <Slot />
    </>
  );
}
