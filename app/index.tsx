import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">Rotodex</Text>
      <Link href="/profile" className="text-primary">
        Go to profile
      </Link>
    </View>
  );
}
