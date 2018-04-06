/*
 * Coded by: Andy (github.com/andy9775)
 */
'use strict';

import React, { Component } from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

class Filled extends Component {

  render() {
    var size = this.props.size,
      componentColor = this.props.componentColor,
      progressBarColor = this.props.progressBarColor,
      leftProgressBarRotate = 0, rightProgressBarRotate = 0,
      rotate = this.props.rotate >= 360 ? 360 : this.props.rotate,
      rightProgressBarColor = this.props.progressBarColor;

    if (rotate < 180) {
      rightProgressBarRotate = rotate;
      leftProgressBarRotate = 0;
    } else {
      rightProgressBarRotate = 0;
      leftProgressBarRotate = rotate - 180;
      rightProgressBarColor = progressBarColor;
    }


    var leftProgressDisplay = (
      <View
        style={{backgroundColor: 'transparent',position: 'absolute', width: size, height: size,
        transform: [{rotate: leftProgressBarRotate + 'deg'}]}}>
        <View style={{position: 'absolute', flex:1, width: size/2, height: size,
        borderTopLeftRadius: size/2, borderBottomLeftRadius: size/2, backgroundColor: componentColor}}/>
        <View style={{position: 'absolute', flex:1, width: size/2, height: size, left: size/2,
        borderTopRightRadius: size/2, borderBottomRightRadius: size/2,backgroundColor: progressBarColor}}/>
      </View>
    );


    var rightProgressDisplay = (
      <View style={{backgroundColor: 'transparent', position: 'absolute', width: size, height: size,
        transform: [{rotate: rightProgressBarRotate + 'deg'}]}}>
        <View style={{position: 'absolute', flex:1, width: size/2, height: size,
        borderTopLeftRadius: size/2, borderBottomLeftRadius: size/2, backgroundColor: 'transparent'}}/>

        {rotate < 180 ? (<View style={{position: 'absolute', flex:1, width: size, height: size, left: size/2,
          borderTopRightRadius: size/2, borderBottomRightRadius: size/2, backgroundColor: componentColor}}/>) :
          (<View style={{position: 'absolute', flex:1, width: size/2, height: size ,
          left: size/2, backgroundColor: progressBarColor,
          borderBottomRightRadius: size/2, borderTopRightRadius: size/2}}/>
          )}
      </View>);

    return (
      <View style={{width: size, height: size, overflow: 'hidden', borderRadius: size/2}}>
        {leftProgressDisplay}
        {rightProgressDisplay}
      </View>
    );
  }
}

Filled.propTypes = {
  size: PropTypes.number,
  rotate: PropTypes.number,
  componentColor: PropTypes.string,
  progressColor: PropTypes.string
}

class Hollow extends Component {

  render(){
    var rotateValue = this.props.rotate >= 360 ? 360 : this.props.rotate;

    var size = this.props.size,
      progressBarWidth = this.props.progressBarWidth,
      backgroundColor = this.props.backgroundColor,
      progressBarColor = this.props.progressBarColor,
      outlineWidth = this.props.outlineWidth || 0,
      outlineColor = this.props.outlineColor || 'transparent',
      leftRotate = 0, rightRotate = 0;

    if (rotateValue < 180) {
      rightRotate = rotateValue;
    } else {
      leftRotate = rotateValue - 180;
    }
    var leftProgressBar = (
      <View
        style={{width: size, height: size, backgroundColor: 'transparent', position: 'absolute'}}
        key="leftProgressBar"
      >
        <View style={{width: size/2, height: size, position: 'absolute',
        borderBottomLeftRadius: size/2, borderTopLeftRadius: size/2,
        borderRightWidth: 0,backgroundColor: backgroundColor,
        borderTopWidth: progressBarWidth, borderBottomWidth: progressBarWidth, borderLeftWidth: progressBarWidth,
        borderLeftColor: progressBarColor, borderTopColor: progressBarColor, borderBottomColor: progressBarColor}}/>

          <View style={{width: size/2, height: size, left: size/2,
        position: 'absolute', backgroundColor: backgroundColor}}/>
      </View>
    );

    var rightProgressBar = (
      <View
        style={{width: size, height: size, backgroundColor: 'transparent', position: 'absolute'}}
        key="rightProgressBar"
      >
        <View style={{width: size/2, height: size, position: 'absolute', backgroundColor: 'transparent'}}/>

        <View style={{width: size/2, height: size, position: 'absolute', left: size/2,
        borderBottomRightRadius: size/2, borderTopRightRadius: size/2,
        borderLeftWidth: 0, backgroundColor: backgroundColor,
        borderTopWidth: progressBarWidth, borderBottomWidth: progressBarWidth, borderRightWidth: progressBarWidth,
        borderRightColor: progressBarColor, borderTopColor: progressBarColor, borderBottomColor: progressBarColor}}/>
      </View>
    );

    var leftProgressOverlay = (
      <View style={{width: size, height: size,position: 'absolute', backgroundColor: 'transparent',
      transform: [{rotate: leftRotate + 'deg'}]}}
            key="leftProgressOverlay"
      >
        <View style={{width: size/2, height: size, position: 'absolute', backgroundColor: backgroundColor}}/>
        <View
          style={{width: size/2, height: size, position: 'absolute', backgroundColor: 'transparent', left: size/2}}/>
      </View>
    );

    var rightProgressOverlay = (
      <View style={{width: size, height: size, position: 'absolute', backgroundColor: 'transparent',
      transform: [{rotate: rightRotate + 'deg'}]}}
          key="rightProgressOverlay"
      >
        <View style={{width: size/2, height: size, position: 'absolute', backgroundColor: 'transparent'}}/>
        <View
          style={{width: size/2, height: size, position: 'absolute', backgroundColor: backgroundColor, left: size/2}}/>
      </View>
    );

    var innerView = this.props.innerComponent ? (
      <View style={{width: size - progressBarWidth*2, height: size - progressBarWidth*2,
        borderRadius: (size - progressBarWidth*2)/2,
        overflow: 'hidden', backgroundColor: 'transparent',
        position: 'absolute', left: progressBarWidth, top: progressBarWidth,
        justifyContent: 'center', alignItems:'center'}}>
        {this.props.innerComponent}
      </View>
    ) : (<View/>);

    var views;
    if (rotateValue < 180) {
      views = [leftProgressBar, leftProgressOverlay, rightProgressBar, rightProgressOverlay];
    } else {
      views = [leftProgressBar, leftProgressOverlay, rightProgressBar];
    }
    return (
      <View
        style={{width: size + (outlineWidth * 2), height: size + (outlineWidth * 2), overflow: 'hidden',
        borderRadius: (size + (outlineWidth * 2))/2, borderWidth: outlineWidth, borderColor: outlineColor}}>
        {views}
        {innerView}
      </View>
    );
  }
}

Hollow.propTypes = {
  size: PropTypes.number,
  progressBarWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  progressBarColor: PropTypes.string,
  outlineWidth: PropTypes.number,
  outlineColor: PropTypes.string,
  rotate: PropTypes.number,
  innerComponent: PropTypes.element
}

module.exports = {Hollow, Filled};
