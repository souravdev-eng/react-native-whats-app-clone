import dayjs from 'dayjs';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './styles';

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })}
      style={styles.container}>
      <Image source={{ uri: chat.user.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
