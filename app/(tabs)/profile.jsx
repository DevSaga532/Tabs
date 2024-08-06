import React from "react";
import { View,  Button } from 'react-native';
import { ColorList } from "../../components/ColorList";
import { useRouter } from 'expo-router';



const profile = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/auth/login');
  };
  const navigateToRegister = () => {
    router.push('/auth/register');
  };
  return (
    <View>
      {/* <ColorList color="#4f46e5" /> */}
      <Button
      style={{ marginBottom: 10, color: 'red' }}
      title="Go to Login" onPress={navigateToLogin} />
      <Button title="Go to Register" onPress={navigateToRegister} />
    </View>
  );
};

export default profile;
