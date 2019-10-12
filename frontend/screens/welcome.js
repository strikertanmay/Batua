import React, {Component} from 'react';
import {Stylesheet} from 'react-native';
import {Button , Block, Text} from '../components';
import * as themes from '../constants/theme';

export default class Welcome extends Component {
    static navigationOptions = {
        header : null
    }
    render() {
        return(
            <Block center midddle>
                <Block center middle>
                    <Text h1 center bold>One Family
                    <Text h1 primary>One Account</Text>
                    </Text>
                    <Text h3 gray2 style = {{marginTop : themes.size.padding/2}}>Pay Exacty the way you want</Text>
                </Block>
                <Text>Welcome</Text>
            </Block>
        )
    }
}