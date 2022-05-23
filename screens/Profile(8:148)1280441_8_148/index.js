import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_8_149}>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_150}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("27_187"))
          }
        >
          <View style={styles.View_I8_150_136_480} />
          <View style={styles.View_I8_150_136_479}>
            <Text style={styles.Text_I8_150_136_479}>First Name</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_151}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("27_187"))
          }
        >
          <View style={styles.View_I8_151_136_480} />
          <View style={styles.View_I8_151_136_479}>
            <Text style={styles.Text_I8_151_136_479}>Last Name</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_21_336}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("27_187"))
          }
        >
          <View style={styles.View_I21_336_7044_52133} />
          <View style={styles.View_I21_336_7044_52134}>
            <Text style={styles.Text_I21_336_7044_52134}>Email Address</Text>
          </View>
          <View style={styles.View_I21_336_7044_52135}>
            <Text style={styles.Text_I21_336_7044_52135}>
              laurenjane@email.com
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_152}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("27_187"))
          }
        >
          <View style={styles.View_I8_152_377_100} />
          <View style={styles.View_I8_152_377_101}>
            <Text style={styles.Text_I8_152_377_101}>Mobile Phone Number</Text>
          </View>
          <View style={styles.View_I8_152_377_102}>
            <View style={styles.View_I8_152_377_103}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999d/bc4c/e38900b596b55bfce4bcf3878f682bd4"
                }}
                style={styles.ImageBackground_I8_152_377_104}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/631c/08c1/51e003c26f602799dd9062c94524622a"
                }}
                style={styles.ImageBackground_I8_152_377_107}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276b/f02b/65003afc9300c226c15b30f05e565ef2"
                }}
                style={styles.ImageBackground_I8_152_377_108}
              />
            </View>
          </View>
          <View style={styles.View_I8_152_585_0}>
            <Text style={styles.Text_I8_152_585_0}>+1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_153}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("27_187"))
          }
        >
          <View style={styles.View_I8_153_377_100} />
          <View style={styles.View_I8_153_377_101}>
            <Text style={styles.Text_I8_153_377_101}>
              Secondary Phone Number (Optional)
            </Text>
          </View>
          <View style={styles.View_I8_153_377_102}>
            <View style={styles.View_I8_153_377_103}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999d/bc4c/e38900b596b55bfce4bcf3878f682bd4"
                }}
                style={styles.ImageBackground_I8_153_377_104}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/631c/08c1/51e003c26f602799dd9062c94524622a"
                }}
                style={styles.ImageBackground_I8_153_377_107}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276b/f02b/65003afc9300c226c15b30f05e565ef2"
                }}
                style={styles.ImageBackground_I8_153_377_108}
              />
            </View>
          </View>
          <View style={styles.View_I8_153_585_0}>
            <Text style={styles.Text_I8_153_585_0}>+1</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_8_340}>
        <View style={styles.View_I8_340_228_176}>
          <Text style={styles.Text_I8_340_228_176}>Profile</Text>
        </View>
        <View style={styles.View_I8_340_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I8_340_228_177_154_460}
          />
        </View>
      </View>
      <View style={styles.View_8_158}>
        <View style={styles.View_I8_158_137_722} />
      </View>
      <View style={styles.View_8_159}>
        <View style={styles.View_I8_159_137_706}>
          <View style={styles.View_I8_159_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I8_159_137_708}
          />
          <View style={styles.View_I8_159_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I8_159_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I8_159_137_714}
        />
        <View style={styles.View_I8_159_137_719}>
          <View style={styles.View_I8_159_137_720}>
            <Text style={styles.Text_I8_159_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_8_149: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_8_150: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_150_136_480: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_I8_150_136_479: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I8_150_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_151: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_151_136_480: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_I8_151_136_479: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I8_151_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_21_336: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I21_336_7044_52133: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    borderColor: "rgba(217, 219, 233, 1)",
    borderWidth: 1
  },
  View_I21_336_7044_52134: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I21_336_7044_52134: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I21_336_7044_52135: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I21_336_7044_52135: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_152: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_152_377_100: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_I8_152_377_101: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I8_152_377_101: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_152_377_102: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I8_152_377_103: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_152_377_104: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_152_377_107: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_152_377_108: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_152_585_0: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I8_152_585_0: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_153: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_153_377_100: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_I8_153_377_101: {
    flexGrow: 1,
    width: wp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I8_153_377_101: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_153_377_102: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I8_153_377_103: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_153_377_104: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_153_377_107: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I8_153_377_108: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I8_153_585_0: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I8_153_585_0: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_340: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I8_340_228_176: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_340_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_340_228_177: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I8_340_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_8_158: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_158_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_8_159: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_159_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I8_159_137_707: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(25, 29, 33, 1)",
    borderWidth: 1
  },
  ImageBackground_I8_159_137_708: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I8_159_137_709: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  ImageBackground_I8_159_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I8_159_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I8_159_137_719: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_159_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I8_159_137_720: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
