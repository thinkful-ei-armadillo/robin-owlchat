import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Chatbox from './Chatbox';
import Stage from './Stage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const participants= [{  id: 5,
    name: 'Ashla Attwool',
    avatar:
        'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true

  }] ;
  const chatEvents=[{
    participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
  }];
  ReactDOM.render(<App participants = {participants} chatEvents={chatEvents} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const participants= [{  id: 5,
    name: 'Ashla Attwool',
    avatar:
        'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true

  }] ;
  const chatEvents=[{
    participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
  }];
  const tree = renderer
    .create(<app participants = {participants} chatEvents={chatEvents}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });