import axios from "axios";

const eventsActions = {

    getEvents: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get ('http://localhost:4000/api/events')
                dispatch ({type:'GET_EVENTS', payload:res.data.response.events})
            } catch(error) {
                console.log(error)
            }
            
        }
        
    },


    getEventById: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/events/${id}`)
            dispatch({type: "GET_EVENT_BY_ID", payload: res.data.response.event})
            return res
            
        }
    },

    modifyEvent: (_id,data) => {
        return async(dispatch, getState) => {
            try {
                await axios.put(`http://localhost:4000/api/events/${_id}`,data)
            } catch(error) {
                console.log(error)
            }
        }
    },

    addEvent: (name,description,authors,categories,images,price,limit,date,tags,attendance,likes,comments) => {
        return async(dispatch,getState) => {
            try {
                await axios.post('http://localhost:4000/api/events',{name,description,authors,categories,images,price,limit,date,tags,attendance,likes,comments})    
            } catch(error) {
                console.log(error)
            }            
        }
    },

    deleteEvent: (_id) => {
        return async(dispatch, getState) => {
            try {
                await axios.delete(`http://localhost:4000/api/events/${_id}`)
            } catch(error) {
                console.log(error)
            }
        }
    },

//     getItineraryByCity: (_id)=> {
//         return async(dispatch,getState)=> {
//             try {
//             const res = await axios.get(`https://mytinerary-fortini-backend.herokuapp.com/api/itinerarybycity/${_id}`)
//             dispatch ({type:'GET_ITINERARY_BY_CITY', payload:res.data.res.itinerary})
//         } catch(error) {
//             console.log(error)
//         }
        
//     }
// },

likeDislike: (id) => {
    const token = localStorage.getItem('token')
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/events/like/${id}`, {},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            return response
            
        }catch (error) {
            console.log(error)
        }
    }
}

    // filterCities: (input)=> {
    //     return (dispatch,getState)=>{
    //         dispatch({type:'FIlTER_CITIES', payload:input})
    //     }
    // }

}

export default eventsActions;