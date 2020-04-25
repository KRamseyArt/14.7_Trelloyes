import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () =>{
  it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () =>{
    const tree = renderer
      .create(<List header="List" cards={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders the UI as expected', () =>{
    const tree = renderer
      .create(<List header="List" cards={[{title:"title1", content:"content1"}, {title: 'title2', content: 'content2'}]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders the UI without title and content', () =>{
    const tree = renderer
      .create(<List />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})