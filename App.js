import react from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import affiche from "./images/affiche.jpeg";
import IMDB from "./images/IMDB.png";

import MM from "./images/mm.png";
import AH from "./images/AH.png";
import JC from "./images/JC.png";
import AB from "./images/AB.png";
import BI from "./images/BI.png";
import CA from "./images/CA.png";
import CW from "./images/CW.png";
import DG from "./images/DG.png";

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      {/* imdb barre grise */}
      <View style={styles.greyBar}>
        <Image style={styles.imdb} source={IMDB} resizeMode="contain" />
      </View>

      {/* Titrage descritpion */}
      <View>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.detail}>
          2014 PG-13 2h49min Adventure, Drama, Sci-Fi
        </Text>
      </View>

      {/* Image / resumé / bouton add to watchList */}
      <View style={styles.hero}>
        <Image style={styles.image} source={affiche} />
        <View style={styles.heroLeft}>
          <Text style={styles.resume}>
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity"s survival
          </Text>

          <TouchableOpacity>
            <Text style={styles.button}>+ ADD TO WATCHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* barre de rate */}
      <View style={[styles.hero, styles.stars, styles.marg]}>
        <View>
          <Entypo name="star" size={24} color="#E5B91E" />
          <Text style={styles.stars}>8.6/10</Text>
          <Text style={styles.stars}>1.1M</Text>
        </View>

        <View>
          <Entypo
            style={styles.stars}
            name="star-outlined"
            size={24}
            color="white"
          />
          <Text style={styles.stars}>RATE THIS</Text>
        </View>

        {/* Top Billed */}
        <View>
          <Text style={[styles.stars, styles.square]}>74</Text>
          <Text style={styles.stars}>Metascore</Text>
          <Text style={styles.stars}>46 critic reviews</Text>
        </View>
      </View>
      <View>
        <View style={styles.cast}>
          <Text style={styles.topBilledCast}>Top Billed Cast</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

        {/*SCROLLEvIEW  */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scroll}>
            <View>
              <Image style={styles.actors} source={MM} />
              <Text style={styles.actorName} numberOfLines={1}>
                Matthew McConaughey
              </Text>
              <Text style={styles.actorRole}>Cooper</Text>
            </View>
            <View>
              <Image style={styles.actors} source={AH} />
              <Text style={styles.actorName}>Jessica Chastain</Text>
            </View>
            <View>
              <Image style={styles.actors} source={JC} />
              <Text style={styles.actorName}>Anne Hathaway</Text>
            </View>
            <View>
              <Image style={styles.actors} source={AB} />
              <Text style={styles.actorName}>Andrew Borba</Text>
            </View>
            <View>
              <Image style={styles.actors} source={BI} />
              <Text style={styles.actorName}>Bill Irwin</Text>
            </View>
            <View>
              <Image style={styles.actors} source={CA} />
              <Text style={styles.actorName}>Casey Affleck</Text>
            </View>
            <View>
              <Image style={styles.actors} source={CW} />
              <Text style={styles.actorName}>Collette Wolfe</Text>
            </View>

            <View>
              <Image style={styles.actors} source={DG} />
              <Text style={styles.actorName}>David Gyasi.</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#191919",
    height: 896,
  },
  title: {
    color: "#AAAAAA",
    fontSize: 30,
    fontWeight: "400",
    margin: 10,
  },
  detail: {
    color: "#BFBFBF",
    fontSize: 18,
    fontWeight: "100",
    margin: 10,
  },

  greyBar: {
    backgroundColor: "#393939",
    width: 414,
    height: 70,
  },
  imdb: {
    width: 90,
    height: 50,
    margin: 10,
  },
  image: {
    width: 110,
    height: 140,
    marginLeft: 10,
  },
  button: {
    color: "white",
    backgroundColor: "#0277BD",
    width: 260,
    height: 50,
    textAlign: "center",
    lineHeight: 50,
    marginTop: 20,
    marginLeft: 10,
  },
  resume: {
    color: "white",
  },
  hero: {
    flexDirection: "row",
    marginBottom: 20,
  },
  heroLeft: {
    margin: 10,
  },

  stars: {
    justifyContent: "space-around",
    color: "white",
    textAlign: "center",
  },

  cast: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
  },
  topBilledCast: {
    color: "white",
    fontSize: 20,
  },
  seeAll: {
    color: "#04A3EC",
    fontSize: 18,
  },

  actors: {
    width: 110,
    height: 140,
    marginRight: 15,
  },
  scroll: {
    flexDirection: "row",
  },
  actorName: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
    width: 110,
  },
  actorRole: {
    color: "white",
    fontWeight: "200",
  },
});
