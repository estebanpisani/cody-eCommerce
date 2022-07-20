const initialState = {
    events: [],
    auxiliar: [],
    oneEvent: {},
    eventRemove: {},
    // filterEvents: [],
    eventById:[]
}

const eventsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_EVENTS":
            return {
                ...state,
                events: action.payload
            }
        case 'GET_EVENT_BY_ID':
            return {
                ...state,
                eventById:action.payload,
                auxiliar: action.payload,
            }
            case 'MODIFY_EVENT':
                let event = [...state.events]
                event.push(action.payload)
                return{
                    ...state,
                    events: action.payload,
                    auxiliar: [...event]
                }
    
                case 'CREATE_EVENT':
                    return {
                        ...state,
                        events: action.payload
                }
    
                case 'REMOVE_EVENT':
                return {
                    ...state,
                    eventRemove: action.payload
                }
                default:
                    return state
    }
    

}

           
export default eventsReducer;