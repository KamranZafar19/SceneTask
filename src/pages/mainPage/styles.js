import { StyleSheet } from "react-native";
import { color, font, WP } from "../../utilities";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.white,
    //   alignItems: 'center',
    },
    wrapper: {
        paddingHorizontal: WP(5),
        marginBottom: WP(11),
    },
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: WP(90)
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        width: WP(20),
        justifyContent: 'space-between'
    },
    profileIcon: {
        borderRadius: WP(50),
        width: WP(8),
        height: WP(8),
        overflow: 'hidden'
    },
    flex: {
        flex: 1
    },
    woddleText: {
        fontFamily: font.RibeyeFont,
        fontSize: WP(10),
    },
    imageSlider: {
        height: WP(60),
        width: WP(90),
        borderRadius: WP(5),
        overflow: 'hidden',
        marginVertical: WP(5)
    },
    tagWrapper: {
        backgroundColor: '#F3F7FAB2',
        height: WP(15),
        width: WP(45),
        top: WP(5),
        left: WP(5),
        borderRadius: WP(6),
        paddingVertical: WP(2),
        paddingHorizontal: WP(5)
        
    },
    tagTextWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        // justifyContent: 'space-around'
    },
    tagText: {
        fontFamily: font.medium,
        fontSize: WP(4)
    },
    arrowIcon: {
        height: WP(5),
        width: WP(5),
    },
    box: {
        height: WP(42),
        width: WP(42),
        borderRadius: WP(4),
        overflow: 'hidden',
        // marginVertical: WP(5)
        elevation: 1,
        paddingHorizontal: WP(5),
        justifyContent: 'space-evenly'
        
    },
    boxText: {
        fontFamily: font.regular,
        fontSize: WP(4)
    },
    boxTextDetail: {
        fontFamily: font.regular,
        fontSize: WP(7)
    },
    boxTextlight: {
        fontFamily: font.light,
        fontSize: WP(3),
        color: '#878585'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    milestoneBox: {
        height: WP(60),
        width: WP(90),
        borderRadius: WP(5),
        borderWidth: WP(0.3),
        marginVertical: WP(5),
        overflow: 'hidden'
    },
    emptySpace: {
        height: WP(5)
    }
  });