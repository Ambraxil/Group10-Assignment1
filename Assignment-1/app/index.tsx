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
              source={require('../assets/images/road.png')}
              style={styles.tweetImage}
            />

            <View style={styles.actionsRow}>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionCount}>12</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔁</Text>
                <Text style={styles.actionCount}>4</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionCount}>98</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔖</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>📤</Text>
              </View>
            </View>
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

            <View style={styles.actionsRow}>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionCount}>3</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔁</Text>
                <Text style={styles.actionCount}>1</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionCount}>22</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔖</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>📤</Text>
              </View>
            </View>
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

            <View style={styles.actionsRow}>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionCount}>7</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔁</Text>
                <Text style={styles.actionCount}>2</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionCount}>5</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔖</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>📤</Text>
              </View>
            </View>
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

            <View style={styles.actionsRow}>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionCount}>9</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔁</Text>
                <Text style={styles.actionCount}>6</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionCount}>44</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔖</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>📤</Text>
              </View>
            </View>
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

            <View style={styles.actionsRow}>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionCount}>18</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔁</Text>
                <Text style={styles.actionCount}>11</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionCount}>101</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>🔖</Text>
              </View>
              <View style={styles.actionItem}>
                <Text style={styles.actionIcon}>📤</Text>
              </View>
            </View>
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

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingRight: 20
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionIcon: {
    fontSize: 16,
    color: '#657786'
  },
  actionCount: {
    marginLeft: 4,
    fontSize: 13,
    color: '#657786'
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
