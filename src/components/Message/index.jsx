import { View, Text } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './styles';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;
