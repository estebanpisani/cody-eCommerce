import axios from "axios";
import URL_API from "../../url";

const eventsActions = {

    getEvents: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`${URL_API}/api/events`)
                dispatch({ type: 'GET_EVENTS', payload: res.data.response.events })
            } catch (error) {
                console.log(error)
            }
        }
    },
    getEventById: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`${URL_API}/api/events/${id}`)
            // dispatch({ type: "GET_EVENT_BY_ID", payload: res.data.response.event })
            return res

        }
    },
    modifyEvent: (_id, data) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.put(`${URL_API}/api/events/${_id}`, data);
                return res
            } catch (error) {
                console.log(error)
            }

        }
    },
    addEvent: (name, description, authors, categories, images, price, limit, date, tags, attendance, likes, comments) => {
        return async (dispatch, getState) => {
            try {
                await axios.post(`${URL_API}/api/events`, { name, description, authors, categories, images, price, limit, date, tags, attendance, likes, comments })
            } catch (error) {
                console.log(error)
            }
        }
    },
    deleteEvent: (_id) => {
        return async (dispatch, getState) => {
            try {
                await axios.delete(`${URL_API}/api/events/${_id}`)
            } catch (error) {
                console.log(error)
            }
        }
    },
    likeDislike: (_id) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`${URL_API}/api/events/like/${_id}`, {},
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })
                return response
            } catch (error) {
                console.log(error)
            }
        }
    },
    bookingYesNo: (_id) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`${URL_API}/api/events/attendance/${_id}`, {},
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })
                return response
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default eventsActions;