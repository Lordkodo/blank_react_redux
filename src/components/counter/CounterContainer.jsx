import { add, sub  } from '../../modules/counter/CounterActions.js';
import Counter from './Counter.jsx';
import { connect } from 'react-redux';

function mapStateToProps (state) {
	return {
		value: state.counter.get('value')
	};
}

function mapDispatchToProps (dispatch) {
	return {
		onAdd() {
			dispatch(add());
		},
		onSub() {
			dispatch(sub());
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
