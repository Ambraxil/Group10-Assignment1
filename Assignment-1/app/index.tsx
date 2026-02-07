import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Image
          source={require('../assets/images/twitter-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <ScrollView>
        <View style={styles.tweet}>
          <Image
            source={require('../assets/images/default-pfp.png')}
            style={styles.avatar}
          />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>guy who photographs roads</Text>
              <Text style={styles.username}>@roadguy · 1h</Text>
            </View>
            <Text style={styles.tweetText}>
              Hey check out this cool road
            </Text>
            <Image
              source={{ uri: 'https://picsum.photos/400/250' }}
              style={styles.tweetImage}
            />
          </View>
        </View>

        <View style={styles.tweet}>
          <Image
            source={require('../assets/images/default-pfp.png')}
            style={styles.avatar}
          />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>Meat Man</Text>
              <Text style={styles.username}>@iamveryhungry4 · 3h</Text>
            </View>
            <Text style={styles.tweetText}>
              Meat Grinders should be commercialized more you know
            </Text>
          </View>
        </View>

        <View style={styles.tweet}>
          <Image
            source={require('../assets/images/default-pfp.png')}
            style={styles.avatar}
          />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>BananasSuck</Text>
              <Text style={styles.username}>@bananahater113 · 5h</Text>
            </View>
            <Text style={styles.tweetText}>
              I HATE BANANAS!
            </Text>
          </View>
        </View>

        <View style={styles.tweet}>
          <Image
            source={require('../assets/images/default-pfp.png')}
            style={styles.avatar}
          />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>PotassiumLover</Text>
              <Text style={styles.username}>@bananalover204 · 5h</Text>
            </View>
            <Text style={styles.tweetText}>
              Hey I like to eat bananas.
            </Text>
          </View>
        </View>

        <View style={styles.tweet}>
          <Image
            source={require('../assets/images/default-pfp.png')}
            style={styles.avatar}
          />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>TruthSpeaker</Text>
              <Text style={styles.username}>@Consp1racyThe0rist · 10h</Text>
            </View>
            <Text style={styles.tweetText}>
              Did you know dogs can't stand on two legs?
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>🔍</Text>
        <Text style={styles.navIcon}>🔔</Text>
        <Text style={styles.navIcon}>✉️</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6ecf0'
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700'
  },

  tweet: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6ecf0'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10
  },
  tweetContent: {
    flex: 1
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontWeight: '700',
    marginRight: 5
  },
  username: {
    color: '#657786',
    fontSize: 13
  },
  tweetText: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 20
  },
  tweetImage: {
    marginTop: 10,
    width: '100%',
    height: 200,
    borderRadius: 15
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e6ecf0'
  },
  navIcon: {
    fontSize: 22
  }
});
