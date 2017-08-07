export const COUNT_ADD = 'COUNT_ADD';
export const COUNT_SUB = 'COUNT_SUB';


export function add(){
	return function (dispatch, getState) {
		dispatch({type: COUNT_ADD});
	}
}

export function sub(){
	return function (dispatch, getState) {
		dispatch({type: COUNT_SUB});
	}
}
