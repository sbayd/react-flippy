### React-Flippy


React-Flippy allows you to create flipping cards in React projects. 
It can be used as controlled or uncontrolled component.

![Vertical](hover_flippy.gif)

![Horizontal](toggle_flippy.gif)


[Live Demo](http://flippy.sbaydin.com "Live Demo")


#### How to install ?

`npm install react-flippy` or `yarn add react-flippy`

#### How to use ?

```javascript
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function Sample() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: '#41669d'}} >
      RICK <br />
      <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button>
    </FrontSide>
    <BackSide style={{ backgroundColor: '#175852'}}>
      ROCKS
    </BackSide>
  </Flippy>
  )
}

```

## API for Components

### Flippy
| Prop Name | Description   | Values  | Default   |
| :------------: | :------------: | :------------: | :------------: |
|  flipDirection | Direction of flip effect  |  horizontal/vertical | horizontal|
|  flipOnHover | Should card flip on mouse hover  |  true/false  |  false  |
|  flipOnClick   | Should card click on mouse click/touch  | true/false   | true  |
|  isFlipped   |  If you pass isFilipped prop component will be "controlled react component" and flipOnHover, flipOnClick functions will not work. You must handle this functionalities with your own logic.   | undefined/true/false   | undefined  |
| ...props   | Other props will be passed to container.  |   |   |

Note: Flippy component has a function named "toggle" in its reference.

### FrontSide

| Prop Name | Description   | Values  | Default   |
| :------------: | :------------: | :------------: | :------------: |
|  animationDuration | Duration of flip animation, should be used equal with back side for a good view.  |  number | 600 |
|  elementType | Dom element type for card  | dom element types  |  div  |
| ...props   | Other props will be passed to card.  |   |   |


### BackSide

| Prop Name | Description   | Values  | Default   |
| :------------: | :------------: | :------------: | :------------: |
|  animationDuration | Duration of flip animation, should be used equal with front side for a good view.  |  number | 600 |
|  elementType | Dom element type for card  | dom element types  |  div  |
| ...props   | Other props will be passed to card.  |   |   |


#### Notes

To run sample project, clone the repository and run yarn && yarn start
To build project, clone repository and run yarn && yarn build


### Changelog
#### 1.0.0 (10 May, 2021)
- React updated to 17.0.2
- Component converted to react-hook
- Dependencies upgraded
- Fixed bugs
#### 0.1.5 New build system targeting es5 modules. 

### Credits

Thanks to: https://github.com/fffilo/flipper I have used same methodology for style management. 
