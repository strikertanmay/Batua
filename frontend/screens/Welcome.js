import React, {Component} from 'react';
import {Stylesheet} from 'react-native';
import {Button , Block, Text} from '../components';
import * as themes from '../constants/theme';

class Welcome extends Component {
    static navigationOptions = {
        header : null
    }

    scrollX = new Animated.Value(0);

    
    renderIllustrations() {
        const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: 'visible' }}
          />
        )}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }])
        }
      />
    )
    }

    renderSteps() {
        const { illustrations } = this.props;
        const stepPosition = Animated.divide(this.scrollX, width);
        return (
          <Block row center middle style={styles.stepsContainer}>
            {illustrations.map((item, index) => {
              const opacity = stepPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.4, 1, 0.4],
                extrapolate: 'clamp',
              });
    
              return (
                <Block
                  animated
                  flex={false}
                  key={`step-${index}`}
                  color="gray"
                  style={[styles.steps, { opacity }]}
                />
              )
            })}
          </Block>
        )
      }

    render() {

        const { navigation } = this.props;

        return(
            <Block >
                <Block center middle flex = {0.3}>
                    <Text h1 center bold>One Family
                    <Text h1 primary>One Account</Text>
                    </Text>
                    <Text h3 gray2 style = {{marginTop : themes.size.padding/2}}>Pay Exacty the way you want</Text>
                </Block>
            <Block center middle>
                {this.renderIllustrations()}
                {this.renderSteps()}
            </Block>
            <Block middle flex={0.5} margin= {[0, themes.size.padding = 2]}>
                <Button gradient onPress = {() => navigation.navigate('Login')}>
                    <Text center semibold white>Go Ahead</Text>
                </Button>
            </Block>
            </Block>

        )
    }
}

Welcome.defaultProps = {
    illustrations: [
      { id: 1, source: require('../assets/images/icon.png') },
      { id: 2, source: require('../assets/images/icon.png') },
      { id: 3, source: require('../assets/images/icon.png') },
    ],
};

export default Welcome;

const styles = StyleSheet.create({
    stepsContainer: {
      position: 'absolute',
      bottom: theme.sizes.base * 3,
      right: 0,
      left: 0,
    },
    steps: {
      width: 5,
      height: 5,
      borderRadius: 5,
      marginHorizontal: 2.5,
    },
  })