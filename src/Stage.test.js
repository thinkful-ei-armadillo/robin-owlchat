import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage 
        name = 'sdfff'
        avatar = "https"
        onStage = {false}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });