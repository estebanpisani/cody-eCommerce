import * as React from "react";
import { useState } from "react";
import commentsAction from "../redux/actions/commentsActions";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Comments.css";
import Delete from '../media/delete.svg'
import Edit from '../media/edit.svg'
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
// import eventsActions from "../redux/actions/eventsActions";


function CommentsIn({ event, setChangeReload }) {
  console.log(event);
  let oneEvent = event?.data?.response?.event
  let userComment = event?.comments;

  const [input, setInput] = useState("");
  const [modify, setModify] = useState();
  const dispatch = useDispatch();

  async function newComment(event) {
    const comment = {
      event: event._id,
      comment: input,
    };

    await dispatch(commentsAction.addComment(comment));
    setInput("")
    setChangeReload()
  }

  async function removeComment(id) {
    await dispatch(commentsAction.deleteComment(id));
    setChangeReload()
  }

  async function changeComment(id) {
    const data = {
      comment: modify,
    };
    await dispatch(commentsAction.modifiComment(id, data));
    setChangeReload()
  }

  const user = useSelector(store => store.userReducer.user)

  return (
    <>
      {userComment?.map((item, index) => (
        <div key={index} className="bodyComment flex flex-wrap flex-col items-center sm:flex-row justify-start">
          <div id='comment-user-info' className="flex flex-col items-center justify-between w-full sm:w-1/4 my-1">
            <img id="user-img" className='rounded-full h-8 w-8' src={item?.user?.image} alt="userimage"></img>
            <span className="text-sm text-center">{item?.user?.firstName}</span>
          </div>
          {item.user?._id === user?.user.id ?
            <div className="comment-content flex flex-col sm:flex-row items-center justify-between w-full sm:w-3/4">
              <div
                className="comment-text my-1"
                contentEditable
                suppressContentEditableWarning={true}
                onInput={(event) => setModify(event.currentTarget.textContent)}>
                {item?.comment}
              </div>
              <div className="button-comments flex flex-col sm:flex-row justify-around items-center my-1 w-44">
                <button className="button my-1">
                  <div className="flex flex-row">
                    <img id={item._id} onClick={() => changeComment(item._id)} src={Edit} alt="" className='h-4 w-4' />
                    <p>EDITAR</p>
                  </div>
                </button>
                <button className="button" >
                  <div className="flex flex-row">
                    <img id={item._id} onClick={() => removeComment(item._id)} src={Delete} alt="" className='h-4 w-4' />
                    <p>BORRAR</p>
                  </div>
                </button>
              </div>
            </div>
            :
            <div className='comment-content flex flex-col sm:flex-row items-center justify-between w-full sm:w-3/4'>
              <div className="comment-text my-1"> {item?.comment} </div>
            </div>
          }
        </div>
      ))
      }
      {user ?
        <div className="container-text-area">
            <textarea value={input} onInput={(event) => setInput(event.target.value)} className="w-full text-area text-xs md:text-lg h-24  border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300" placeholder="Your comment here. . . ."></textarea>
            <button onClick={newComment} id={oneEvent?._id} className="mt-3 w-24 flex justify-center focus:outline-none bg-sky-600 dark:bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-600 rounded text-white px-3 py-2 text-sm ">COMENTAR</button>

        </div> :

        <Box>
          <Paper sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: '#2a9d9026',
            height: 40
          }}>
            <Typography sx={{ fontWeight: "bold", color: 'black' }}>Porfavor, inicia sesión para dejar un comentario</Typography>
          </Paper>
        </Box>}

      {/* <div className="div-comments">
        <div className="div-new-comment">
          <textarea
            maxLength="140"
            id="nuevoComentario"
            cols="30"
            rows="10"
            placeholder="Please, let us your message here"
            onKeyUp={(event) => setInput(event.target.value)}
          ></textarea>


          <div className="button-comments-send">
            <button className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full" onClick={newComment}>
              SEND
            </button>
          </div>
        </div>
      </div> */}

    </>
  );
}

export default CommentsIn;
