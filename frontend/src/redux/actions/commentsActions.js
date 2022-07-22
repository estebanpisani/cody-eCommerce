import axios from "axios";

const commentsActions = {
  addComment: (comment) => {
    console.log(comment)
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      if (comment.comment !== "") {
        const res = await axios.post(
          "http://localhost:4000/api/events/comment",
          { comment },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            
          }
          
        );
        console.log(res)
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: res.data.message,
            success: res.data.success,
          },
        });
        return res;
      } else {
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: "Por favor, ingresa un comentario para guardarlo",
            success: false,
          },
        });
      }
    };
  },
  modifiComment: (id, data) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.put(
        `http://localhost:4000/api/events/comment/${id}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });

      return res;
    };
  },
  deleteComment: (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.post(
        `http://localhost:4000/api/events/comment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res;
    };
  },
};

export default commentsActions;
