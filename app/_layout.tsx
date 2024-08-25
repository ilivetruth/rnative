import { Stack } from "expo-router";
// testing
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0062fe',
        },
        headerTintColor: '##ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index"  />
    </Stack>
  );
}
