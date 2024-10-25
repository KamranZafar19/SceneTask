import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import * as Util from '../../utilities';
import { styles } from './styles';

const App = () => {
  const profileImage = 'https://s3-alpha-sig.figma.com/img/84bb/5244/5741f62c586d4a2050a78d80ed03ccc7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MSNRlWEzrNSZoJBGwEuSsndg4E1h~59m6SpyHyhFGDBJSVO9KnPEaRJn2u1QdORi9ZH-ZZEm0~xWXXt5U2U5KM2KiFDOqQTHOBrwUsuLT49kLt-hXSWs1xfmWlVWhwv0GFeAQTffsnxztk~FoedjQxANMvG19XJdLRxXOy3hhs6GFqVJEIPRSCOB62SH8EUgoOMxf2Je6V64uv1hbw7tfqFU0DWq0Ghel47auAadiEMO-qt4f4NfcrK4FKiprp1gBLRLmhylpCmbFjWBV4v~40mM8sYYkWg66M7nRtqUCkqKdEABx4ouVJnmlQfpyy~gqrMCJbUDJQVujyhQMhCTFg__'
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Util.color.white} barStyle={'dark-content'} />
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.woddleText}>Woddle</Text>
        <View style={styles.headerWrapper}>
          // When push notification trigger the icon badge hightlight
          // here or if user have some new Activities then icon badge shown
        <Image source={require('../../assets/images/notification.png')} /> 
        <View style={styles.profileIcon}>
          // Profile image get from the user details, when user upload in their profile section 
          <Image source={{uri: profileImage}} style={styles.flex} />
        </View>
        </View>
      </View>
      <ImageBackground source={require('../../assets/images/RectangleImage.png')} style={styles.imageSlider}>
        <View style={styles.tagWrapper}>
          <View style={styles.tagTextWrapper}>
            // slider images get from the API response.
            <Text style={styles.tagText}>Christian Bowen  </Text>
            <Image source={require('../../assets/images/arrow.png')} />
          </View>
          <Text style={styles.tagText}>1y 2m</Text>
        </View>
      </ImageBackground>
      <View style={styles.flexRow}>
        // Data return from the API
        <View style={[styles.box, {backgroundColor: '#FFF5DC',}]}>
          <Text style={styles.boxText}>Weight</Text>
          <Text style={styles.boxTextDetail}>15 lbs 3 oz</Text>
          <Text style={styles.boxTextlight}>1:00 PM Dec 05 2023</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#EFF1FF',}]}>
          <Text style={styles.boxText}>Diaper</Text>
          <Text style={styles.boxTextDetail}>Pee Medium</Text>
          <Text style={styles.boxTextlight}>2h 55m ago</Text>
        </View>
      </View>
      <View style={[styles.flexRow,{marginVertical: Util.WP(5)}]}>
        <View style={[styles.box, {backgroundColor: '#FFEEE7',}]}>
          <Text style={styles.boxText}>Feeding</Text>
          <Text style={styles.boxTextDetail}>Formula 5oz</Text>
          <Text style={styles.boxTextlight}>2h 30m ago</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#F8EEFF',}]}>
          <Text style={styles.boxText}>Sleep</Text>
          <Text style={styles.boxTextDetail}>2h 20m</Text>
          <Text></Text>
          <Text style={styles.boxTextlight}>3h 35m ago</Text>
        </View>
      </View>
      <View>
      <Image source={require('../../assets/images/bundles.png')} style={{width: Util.WP(90)}} />
      </View>
      <View style={styles.milestoneBox}>
      <Image source={require('../../assets/images/RectangleBottomImage.png')} style={{width: Util.WP(90)}} />
      <View style={{paddingHorizontal: Util.WP(5), paddingTop: Util.WP(3)}}>
      <Text style={styles.boxText}>Milestones</Text>
      <View style={[styles.flexRow, {alignItems: 'center'}]}>
      <Text style={styles.boxTextDetail}>Month 12</Text>
      <Image source={require('../../assets/images/rightArrow.png')}/>
      </View>
      </View>
      </View>
      <View style={styles.emptySpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
