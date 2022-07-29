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


function CommentsIn({ eventId, events, setChangeReload }) {
  let oneEvent = events?.data?.response?.event
  let userComment = events?.data?.response?.event?.comments

  const [input, setInput] = useState("");
  const [modify, setModify] = useState();
  const dispatch = useDispatch();

  async function newComment(event) {
    const comment = {
      event: eventId,
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


  // useEffect(() => {
  //   async function response() {
  //     const res = await dispatch(eventsActions.getEventById(oneEvent?._id))
  //     setEvent(res)

  //   }
  //   response()

  //   // eslint-disable-next-line
  // }, [reload])

  // function reloadChanger() {
  //   setReload(!reload);
  // }

  return (
    <>
      {userComment?.map((item, index) => (
        <div className="div-comments" key={index}>
          <div className="bodyComment flex flex-wrap justify-around">
            <div className="div-user-comment">
              <div className="div-image-comment flex space-x-2 items-center">
                <img className='rounded-full h-8 w-8' src={item?.user?.image} alt="userimage"></img>
                <span className="text-sm">{item?.user?.firstName}</span>
              </div>
            </div>
            {item.user?._id === user?.user.id ?
            <div className="div-cont-comments">
              <div
              className="div-text-comments my-2"
              contentEditable
              suppressContentEditableWarning={true}
              onInput={(event) => setModify(event.currentTarget.textContent)}>
              {item?.comment}
            </div>
            </div>
           : 
           <div>
            <div className="div-text-comments my-2"> {item?.comment} </div> 
            </div> }
           
            
            {item.user?._id === user?.user.id ?
            <div className="div-cont-comments">
              <div className="div-comment-small  ">
              <div className="div-comments-buttons">
                <div className="button-comments">
                  <button className="button mx-5">
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
            </div>
            </div>
             : null }
          </div>
        </div>
      ))
      }
      {user ?
      <div className="container-text-area">
        <div className="textarea-comments">
        <textarea value={input} onInput={(event) => setInput(event.target.value)} className="text-area text-xs md:text-lg h-24  border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300 textarea-comments" placeholder="Your comment here. . . ."></textarea>
        </div>
       
        <div className="button-newcomment">
          <button onClick={newComment} id={oneEvent?._id} className="flex justify-center focus:outline-none  ml-0 md:ml-5 bg-sky-600 dark:bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-600 rounded text-white px-3 md:px-6 py-2 text-sm ">COMENTAR</button>
        </div>
      </div> : 
      
      <Box>
      <Paper sx={{
        my: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: '#2a9d9026',
        height: 40}}>
        <Typography sx={{ fontWeight: "bold", color:'black' }}>Porfavor, inicia sesión para dejar un comentario</Typography>
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
