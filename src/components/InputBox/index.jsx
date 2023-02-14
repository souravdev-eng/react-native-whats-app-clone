import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('Sending a new message: ', newMessage);

    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name='plus' size={20} color='royalblue' />

      {/* Text Input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder='type your message...'
      />

      {/* Icon */}
      <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white' />
    </View>
  );
};

export default InputBox;
