## React-Native-CircularProgress
A pure React Native Component for circular progress bars.

## Demo

<a href="https://github.com/andy9775/React-Native-CircularProgress/master/demo.gif"><img src="https://github.com/andy9775/React-Native-CircularProgress/master/demo.gif" width="350"></a>

## Basic Usage

```javascript

'use strict';
var React = require('react-native');
var {View, Text} = React;

module.exports = React.createClass({
  getInitialState(){

    return { progress:0};
  },
  componentDidMount(){
    // automatically increment the progress
    var time = 150;
    var count = 0;
    setInterval(() => {
      if (++count < 15){
        return;
      }
      var progress = this.state.progress + Math.round((Math.random() * 4));
      if (progress >100) {
        progress = 0;
        count = 0;
      }
      this.setState({progress: progress});
    }, time);
  },
  render() {
    var progress = this.state.progress;
    // displayed inside of the component
    var innerDisplay = (
      <View style={{width: 200, height: 200, flex:1, justifyContent: 'center',
      alignItems: 'center', backgroundColor: '#036282'}}>
        <Text style={{fontSize: 30}}>{progress + "%"}</Text>
      </View>
    );

    return (<View style={{backgroundColor: 'orange',flex:1, flexDirection: 'row'}}>
      <View style={{ flex: 1, top:200, left: 20}}>
        <CircularProgressDisplay.Hollow size={200}  progressBarWidth={20} outlineWidth={0} outlineColor={'black'}
                                        backgroundColor={'orange'} progressBarColor={'#02BAF7'} innerComponent={innerDisplay}
                                        rotate={((progress/100)*360)}/>
      </View>
    </View>);

  }
});
```

## Hollow Progress Bar Props
- **`size`** _(Number:ReactComponent)_ - The size of the component. The resulting components height and width
are equal
- **`progressBarWidth`** _(Integer)_ - The width of the circular progress bar.
- **`progressBarColor`** _(String)_ - The color of the progress bar.
- **`backgroundColor`** _(String)_ - The color of the center of the component and the zero progress area.
- **`outlineWidth`** _(Integer)_ - If this prop is present, the resulting component has a round border of this width.
- **`outlineColor`** _(String)_ - The color of the border outlining the component.
- **`rotate`** _(Integer)_ - The current progress to track specified in degrees. E.G. 270. Can take a value between 0
and 360, inclusive.
- **`innerComponent`** _(ReactComponent)_ - A component to display inside of the round hollow progress bar. Can be used
display an inner progress bar, or track the current progress with a `<Text>` component.

## Filled Progress Bar Props
- **`size`** _(Number:ReactComponent)_ - The size of the component. The resulting components height and width
are equal
- **`rotate`** _(Integer)_ - The current progress to track specified in degrees. E.G. 270. Can take a value between 0
and 360, inclusive.
- **`backgroundColor`** _(String)_ - The color of the center of the component and the zero progress area. This is the color
of the component when no progress has been made.
- **`progressBarColor`** _(String)_ - The color of the progress bar. This is the color when progress has been made.

---

**MIT Licensed**
