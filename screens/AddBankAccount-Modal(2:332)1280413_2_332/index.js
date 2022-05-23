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
      <View style={styles.View_2_333}>
        <View style={styles.View_I2_333_228_176}>
          <Text style={styles.Text_I2_333_228_176}>Bank Information</Text>
        </View>
        <View style={styles.View_I2_333_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I2_333_228_177_154_460}
          />
        </View>
      </View>
      <View style={styles.View_2_334}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_335}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("54_179"))
          }
        >
          <View style={styles.View_I2_335_136_480} />
          <View style={styles.View_I2_335_136_479}>
            <Text style={styles.Text_I2_335_136_479}>
              Account Nickname (Optional)
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_336}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("54_179"))
          }
        >
          <View style={styles.View_I2_336_136_480} />
          <View style={styles.View_I2_336_136_479}>
            <Text style={styles.Text_I2_336_136_479}>Account Holder Name</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_337}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("54_179"))
          }
        >
          <View style={styles.View_I2_337_136_480} />
          <View style={styles.View_I2_337_136_479}>
            <Text style={styles.Text_I2_337_136_479}>
              9-Digit Routing Number
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_338}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("54_179"))
          }
        >
          <View style={styles.View_I2_338_136_480} />
          <View style={styles.View_I2_338_136_479}>
            <Text style={styles.Text_I2_338_136_479}>Account Number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_339}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("54_179"))
          }
        >
          <View style={styles.View_I2_339_136_480} />
          <View style={styles.View_I2_339_136_479}>
            <Text style={styles.Text_I2_339_136_479}>
              Confirm Acccount Number
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_340}>
        <View style={styles.View_I2_340_197_2604}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/273a/79de9ba2e6fa09f846f6a9cbcb1beba9"
            }}
            style={styles.ImageBackground_I2_340_4645_38209}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76a/3977/017fa88cbe5a37b79430d1c2a88ef0c0"
            }}
            style={styles.ImageBackground_I2_340_197_2607}
          />
        </View>
      </View>
      <View style={styles.View_2_341}>
        <View style={styles.View_I2_341_197_2604}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/273a/79de9ba2e6fa09f846f6a9cbcb1beba9"
            }}
            style={styles.ImageBackground_I2_341_4645_38209}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76a/3977/017fa88cbe5a37b79430d1c2a88ef0c0"
            }}
            style={styles.ImageBackground_I2_341_197_2607}
          />
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d994/f2d0/ebb8a160583572454faf773b0bae9416"
        }}
        style={styles.TouchableOpacity_2_342}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("54_331"))
        }
      />
      <View style={styles.View_2_343}>
        <Text style={styles.Text_2_343}>What type of account is this?</Text>
      </View>
      <View style={styles.View_2_344}>
        <Text style={styles.Text_2_344}>Checking</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d994/f2d0/ebb8a160583572454faf773b0bae9416"
        }}
        style={styles.TouchableOpacity_2_345}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("54_331"))
        }
      />
      <View style={styles.View_2_346}>
        <Text style={styles.Text_2_346}>Savings</Text>
      </View>
      <View style={styles.View_2_347}>
        <Text style={styles.Text_2_347}>
          I am authorized to perform debit transactions from this account.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_348}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("54_321"))
        }
      >
        <View style={styles.View_I2_348_377_147} />
        <View style={styles.View_I2_348_377_148} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_349}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("34_338"))
        }
      >
        <View style={styles.View_I2_349_202_2681} />
        <View style={styles.View_I2_349_202_2682}>
          <Text style={styles.Text_I2_349_202_2682}>continue</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_350}>
        <View style={styles.View_I2_350_451_9977} />
      </View>
      <View style={styles.View_2_351}>
        <View style={styles.View_I2_351_455_97}>
          <View style={styles.View_I2_351_455_98}>
            <Text style={styles.Text_I2_351_455_98}>
              Locating Your Account Info
            </Text>
          </View>
          <View style={styles.View_I2_351_455_99}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
              }}
              style={styles.ImageBackground_I2_351_455_99_260_1418}
            />
          </View>
        </View>
        <View style={styles.View_I2_351_455_100}>
          <View style={styles.View_I2_351_455_102}>
            <Text style={styles.Text_I2_351_455_102}>
              Find your account number and 9-digit routing number at the bottom
              of your check or by visiting your online banking portal.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_352}>
        <View style={styles.View_2_353} />
        <View style={styles.View_2_354} />
        <View style={styles.View_2_355}>
          <Text style={styles.Text_2_355}>DATE</Text>
        </View>
        <View style={styles.View_2_356}>
          <Text style={styles.Text_2_356}>1078</Text>
        </View>
        <View style={styles.View_2_357}>
          <Text style={styles.Text_2_357}>PAY TO THE ORDER OF</Text>
        </View>
        <View style={styles.View_2_358}>
          <Text style={styles.Text_2_358}>MEMO</Text>
        </View>
        <View style={styles.View_2_359}>
          <Text style={styles.Text_2_359}>DOLLARS</Text>
        </View>
        <View style={styles.View_2_360}>
          <Text style={styles.Text_2_360}>000000000</Text>
        </View>
        <View style={styles.View_2_361}>
          <Text style={styles.Text_2_361}>1000</Text>
        </View>
        <View style={styles.View_2_362} />
        <View style={styles.View_2_363} />
        <View style={styles.View_2_364} />
        <View style={styles.View_2_365} />
        <View style={styles.View_2_366} />
        <View style={styles.View_2_367} />
        <View style={styles.View_2_368} />
        <View style={styles.View_2_369}>
          <Text style={styles.Text_2_369}>$</Text>
        </View>
        <View style={styles.View_2_370} />
        <View style={styles.View_2_371} />
        <View style={styles.View_2_372} />
        <View style={styles.View_2_373} />
        <View style={styles.View_2_374} />
        <View style={styles.View_2_375} />
        <View style={styles.View_2_376}>
          <Text style={styles.Text_2_376}>000000000</Text>
        </View>
        <View style={styles.View_2_377} />
        <View style={styles.View_2_378} />
        <View style={styles.View_2_379} />
        <View style={styles.View_2_380} />
        <View style={styles.View_2_381} />
        <View style={styles.View_2_382} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a65/4502/6f845abec13577d9d56c085f2b1148a6"
          }}
          style={styles.ImageBackground_2_383}
        />
        <View style={styles.View_2_384}>
          <Text style={styles.Text_2_384}>Routing Number</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a65/4502/6f845abec13577d9d56c085f2b1148a6"
          }}
          style={styles.ImageBackground_2_385}
        />
        <View style={styles.View_2_386}>
          <Text style={styles.Text_2_386}>Account Number</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d05/f439/4e06f440e57ac5d9d5a73991aa9c9b6f"
          }}
          style={styles.ImageBackground_2_387}
        />
        <View style={styles.View_2_388}>
          <Text style={styles.Text_2_388}>Check Number</Text>
        </View>
      </View>
      <View style={styles.View_2_389}>
        <View style={styles.View_I2_389_137_722} />
      </View>
      <View style={styles.View_2_390}>
        <View style={styles.View_I2_390_137_706}>
          <View style={styles.View_I2_390_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I2_390_137_708}
          />
          <View style={styles.View_I2_390_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I2_390_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I2_390_137_714}
        />
        <View style={styles.View_I2_390_137_719}>
          <View style={styles.View_I2_390_137_720}>
            <Text style={styles.Text_I2_390_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_2_333: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_333_228_176: {
    flexGrow: 1,
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_333_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_333_228_177: {
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
  ImageBackground_I2_333_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_2_334: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_2_335: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_335_136_480: {
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
  View_I2_335_136_479: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_335_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_336: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_336_136_480: {
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
  View_I2_336_136_479: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_336_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_337: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_337_136_480: {
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
  View_I2_337_136_479: {
    flexGrow: 1,
    width: wp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_337_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_338: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_338_136_480: {
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
  View_I2_338_136_479: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_338_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_339: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_339_136_480: {
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
  View_I2_339_136_479: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_339_136_479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_340: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_340_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_340_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_340_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_341: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_341_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_341_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I2_341_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_2_342: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_2_343: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("71%"),
    justifyContent: "center"
  },
  Text_2_343: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_344: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("76%"),
    justifyContent: "center"
  },
  Text_2_344: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_345: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_2_346: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("83%"),
    justifyContent: "center"
  },
  Text_2_346: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_347: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("89%"),
    justifyContent: "center"
  },
  Text_2_347: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_348: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_348_377_147: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I2_348_377_148: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 252, 1)",
    borderColor: "rgba(217, 219, 233, 1)",
    borderWidth: 1.75
  },
  TouchableOpacity_2_349: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_349_202_2681: {
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
  View_I2_349_202_2682: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I2_349_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_2_350: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_350_451_9977: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_2_351: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_351_455_97: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_351_455_98: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_351_455_98: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_I2_351_455_99: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_351_455_99_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_351_455_100: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_351_455_102: {
    width: wp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_351_455_102: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_352: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_353: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(30, 11, 102, 1)",
    borderWidth: 1
  },
  View_2_354: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(30, 11, 102, 1)",
    borderWidth: 1
  },
  View_2_355: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_355: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_356: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_356: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_357: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_357: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_358: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_2_358: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_359: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_2_359: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_360: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_360: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 6.5,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.42500000000000004,
    textTransform: "none"
  },
  View_2_361: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_361: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 6.5,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.42500000000000004,
    textTransform: "none"
  },
  View_2_362: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("8%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_363: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_364: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("5%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_365: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_366: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("14%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_367: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("7%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_368: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("7%"),
    borderColor: "rgba(30, 11, 102, 1)",
    borderWidth: 1
  },
  View_2_369: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_369: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_370: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_371: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_372: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_373: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_374: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_375: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("16%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_376: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_376: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 6.5,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.42500000000000004,
    textTransform: "none"
  },
  View_2_377: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_378: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_379: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("16%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_380: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_381: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("15%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_2_382: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("16%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  ImageBackground_2_383: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%")
  },
  View_2_384: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_384: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.6000000000000001,
    textTransform: "none"
  },
  ImageBackground_2_385: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("16%")
  },
  View_2_386: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_386: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.6000000000000001,
    textTransform: "none"
  },
  ImageBackground_2_387: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("16%")
  },
  View_2_388: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_388: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.6000000000000001,
    textTransform: "none"
  },
  View_2_389: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_389_137_722: {
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
  View_2_390: {
    width: wp("100%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_390_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I2_390_137_707: {
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
  ImageBackground_I2_390_137_708: {
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
  View_I2_390_137_709: {
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
  ImageBackground_I2_390_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I2_390_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I2_390_137_719: {
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
  View_I2_390_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_390_137_720: {
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
