import React from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import WalkthroughComponent from '../routes/walkthrough';
import HomeComponent from '../routes/home';
const scenes = Actions.create(
    <Scene key="roots" component={HomeComponent}>
        <Scene key="walkthrough" component={WalkthroughComponent}/>
    </Scene>
);
export default scenes;