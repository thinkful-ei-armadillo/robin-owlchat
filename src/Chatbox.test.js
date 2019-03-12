import React from 'react';
import ReactDOM from 'react-dom';
import Chatbox from './Chatbox';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chatbox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Chatbox 
          type= 'message' 
          message='hi'
          timestamp={123344}
          messagetype = "text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });