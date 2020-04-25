import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () =>{
  it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () =>{
    const tree = renderer
      .create(<Card title="Card" content="something"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders the UI without title and content', () =>{
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})