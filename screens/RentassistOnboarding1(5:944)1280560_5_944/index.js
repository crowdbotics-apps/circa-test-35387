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
      <View style={styles.View_5_945}>
        <Text style={styles.Text_5_945}>Choose what works for you</Text>
      </View>
      <View style={styles.View_5_946}>
        <Text style={styles.Text_5_946}>
          Select a plan within your property’s  pre-approved options. No extra
          fees!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_947}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_2008"))
        }
      >
        <View style={styles.View_I5_947_202_2681} />
        <View style={styles.View_I5_947_202_2682}>
          <Text style={styles.Text_I5_947_202_2682}>Get started</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_948}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e02a/20a9/c98c2cdf0f2ae9a8c6d1aa71e333dd91"
          }}
          style={styles.ImageBackground_I5_948_360_15457}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80ea/6cea/82f38ab3932c6e3e4b26cdd9b51e9594"
          }}
          style={styles.ImageBackground_I5_948_360_15460}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80ea/6cea/82f38ab3932c6e3e4b26cdd9b51e9594"
          }}
          style={styles.ImageBackground_I5_948_360_15463}
        />
      </View>
      <View style={styles.View_5_949}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
          }}
          style={styles.ImageBackground_I5_949_260_1418}
        />
      </View>
      <View style={styles.View_5_950}>
        <View style={styles.View_5_951}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcfb/9d1b/decafcde81646d435f4523bae26a82f2"
            }}
            style={styles.ImageBackground_5_952}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df0c/45a9/5d39e2e17bda9c0ac1f6e783efbf5689"
            }}
            style={styles.ImageBackground_5_953}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e56f/2e11/3968700b4a7f84475452216c3caf89a7"
            }}
            style={styles.ImageBackground_5_954}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_955}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_956}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_957}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_958}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_959}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_960}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_961}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/390a/b191/2b13ffb8c97546e8bc546db28ac73ad1"
            }}
            style={styles.ImageBackground_5_962}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ba/b69a/6af53158db32a3987c942ea981f7544d"
            }}
            style={styles.ImageBackground_5_963}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f55/e8d6/91c0eb10aaf76ffc4690106d4ed2bafd"
            }}
            style={styles.ImageBackground_5_964}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_5_965}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("101_2008"))
            }
          >
            <View style={styles.View_I5_965_202_2681} />
            <View style={styles.View_I5_965_202_2682}>
              <Text text="" style={styles.Text_I5_965_202_2682} />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/912e/f124/3388ee5f672d9fa75c69179ab90af786"
          }}
          style={styles.ImageBackground_5_966}
        />
      </View>
      <View style={styles.View_5_983}>
        <View style={styles.View_I5_983_137_706}>
          <View style={styles.View_I5_983_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_983_137_708}
          />
          <View style={styles.View_I5_983_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_983_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_983_137_714}
        />
        <View style={styles.View_I5_983_137_719}>
          <View style={styles.View_I5_983_137_720}>
            <Text style={styles.Text_I5_983_137_720}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_984}>
        <View style={styles.View_I5_984_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_5_945: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_5_945: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_5_946: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_946: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_5_947: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("91%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_947_202_2681: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_I5_947_202_2682: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I5_947_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_948: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I5_948_360_15457: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_948_360_15460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I5_948_360_15463: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_5_949: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_949_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_950: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("32%")
  },
  View_5_951: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  ImageBackground_5_952: {
    width: wp("33%"),
    height: hp("36%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_953: {
    width: wp("33%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_954: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_955: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_956: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_957: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_958: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_959: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_960: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_961: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_962: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_963: {
    width: wp("29%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_964: {
    width: wp("36%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_5_965: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_965_202_2681: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)"
  },
  View_I5_965_202_2682: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_965_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  ImageBackground_5_966: {
    width: wp("25%"),
    height: hp("36%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_983: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_983_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_983_137_707: {
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
  ImageBackground_I5_983_137_708: {
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
  View_I5_983_137_709: {
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
  ImageBackground_I5_983_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_983_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_983_137_719: {
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
  View_I5_983_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_983_137_720: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_5_984: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_984_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
