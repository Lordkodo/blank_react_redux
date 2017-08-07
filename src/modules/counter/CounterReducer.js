import { COUNT_ADD, COUNT_SUB } from './CounterActions';
import { Map } from 'immutable';

const defaultState = Map({
	value: 0,
});

export default function count(state = defaultState, action) {
	switch (action.type) {
		case COUNT_ADD:
			return state.set('value', state.get('value') + 1);

		case COUNT_SUB:
			return state.set('value', state.get('value') - 1);

		default:
			return state;
	}
}
