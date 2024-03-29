import App from './App';
import React from 'react';
import {shallow} from 'enzyme';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });
    it('should have the `th` "Items"', () => {
        const wrapper = shallow(
            <App/>
        );
        expect(
            wrapper.contains(<th>Items</th>)
        ).toBe(true);
    });
    it('should have a `button`', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.containsMatchingElement(
            <button>Add item</button>
        )).toBe(true);
    });
    it('`button` should be disabled', () => {
        const wrapper = shallow(<App/>);
        const button = wrapper.find('button').first();
        expect(
            button.props().disabled
        ).toBe(true);
    });
    it('should have an `input` element', () => {
        const wrapper = shallow(<App/>);
        expect(
            wrapper.containsMatchingElement(<input/>)
        ).toBe(true);
    });

    describe('the user populates the input', () => {
        const item = 'Vancouver';

        beforeEach(() => {
            const input = wrapper.find('input').first();
            input.simulate('change', {
                target: {value: item}
            });
        });

        it('should update the state property `item`', () => {
            expect(
                wrapper.state().item
            ).toEqual(item);
        });
    });

});