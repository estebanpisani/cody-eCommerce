import * as React from "react";
import { useState } from "react";
import commentsAction from "../redux/actions/commentsActions";
import { useDispatch } from "react-redux";
import "../styles/Comments.css";

function CommentsIn({ comments, setChangeReload, eventId }) {

  const [input, setInput] = useState("");
  const [modify, setModify] = useState();
  const dispatch = useDispatch();

  async function newComment(event) {
    const comment = {
      event: eventId,
      comment: input,
    };

    await dispatch(commentsAction.addComment(comment));
    setChangeReload();
    document.querySelector("#nuevoComentario").textContent = "";
  }

  async function removeComment(id) {
    await dispatch(commentsAction.deleteComment(id));
    setChangeReload();
  }

  async function changeComment(id) {
    const data = {
      comment: modify,
    };
    await dispatch(commentsAction.modifiComment(id, data));
    setChangeReload();
  }

  return (
    <>
      {comments?.map((comment) => (
        <div className="div-comments">
          <div className="bodyComment">
            <div className="div-user-comment">
              <div className="div-image-comment">
                <img src={comment.userId.photoUrl} alt="userimage"></img>
              </div>
              <div className="div-name-comments">
                <h4>{comment.userId.firstName}</h4>
              </div>
            </div>

            <div className="div-comment-small">
              <div
                className="div-text-comments"
                contentEditable
                onInput={(event) => setModify(event.currentTarget.textContent)}
              >
                {comment.comment}
              </div>
              <div className="div-comments-buttons">
                <div className="button-comments">
                  <button
                    className="button"
                    id={comment._id}
                    onClick={() => changeComment(comment._id)}
                  >
                    {" "}
                    EDIT{" "}
                  </button>
                </div>
                <div className="button-comments">
                  <button
                    className="button"
                    id={comment._id}
                    onClick={() => removeComment(comment._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="div-comments">
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
            <button className="button" onClick={newComment}>
              SEND
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default CommentsIn;
