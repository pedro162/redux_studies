const INCREASE = 'count/INCREASE'
const DECREASE = 'count/DECREASE'

export const increase_action = ()=>{
    return {type:INCREASE}
}

export const decrease_action = ()=>{
    return {type:DECREASE}
}

const initialState = {qtd:0}
const reducer = (state = initialState, action)=>{
    let {type, payload} = action;
    
    switch(type){
        case INCREASE:
            return {...state, qtd:state?.qtd + 1}
        case DECREASE:
            return {...state, qtd:state?.qtd - 1}
        default:
            return state;
    }
}

export default reducer;