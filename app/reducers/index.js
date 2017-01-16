var appReducer = function(state, action) {
    if (state === undefined){
        return  {
            isFirstTime : true,
            userEmail : null,
            isFormActive : false, // Choose whather the form is active
            deviceInfo : null,
            application : {
                hotel : {
                    name : '',
                    country : {
                        name : ''
                    }
                },
                email : null,
                airport : {
                    name : "Choose",
                    id : null
                },
                start_date : "Choose",
                end_date : "Choose",
                num_of_grown_up : 0,
                num_of_children : 0,
                transport_from_airport_to_hotel : "Yes",
                boarding : "Yes",
                room_type : {
                    "Choose" : null
                }
            }
        };
    }
    if(action.type == 'HOTEL_SELECTED'){
        let newState = state;
        newState.application.hotel = action.data.value;
        return newState;
    }
    if(action.type == 'FORM_UPDATE'){
        let newState = state;
        newState.application[action.data.key] = action.data.value;
        return newState;
    }
    return state;
};
export default appReducer;