import React, {Component} from 'react';
import {Stylesheet} from 'react-native';
import {Button , Block, Text} from '../components';
import * as themes from '../constants/theme';

export default class Welcome extends Component {
    static navigationOptions = {
        header : null
    }

    renderIllustrations() {
        return(
            <Block>
                <Text>Image</Text>
            </Block>
        )
    }

    render(){
        return(
            <Block>
                <Text>* * *</Text>
            </Block>
        )
    }
    render() {
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
                {this.renderSreps()}
            </Block>
            <Block middle flex={0.5} margin= {[0, themes.size.padding = 2]}>
                <Button gradient onPress = {}>
                    <Text center semibold white>Go Ahead</Text>
                </Button>
            </Block>
            </Block>

        )
    }
}