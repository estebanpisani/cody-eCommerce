import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";

import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Collapse } from "@mui/material";
import { Box } from "@mui/material";
import Comments from "./Comments";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from '@mui/icons-material/Comment';
import Button from "@mui/material/Button";

import eventsActions from "../redux/actions/eventsActions";
import "../styles/ModalEvent.css";
// import toast, { Toaster } from 'react-hot-toast';
// import Cody from '../media/cody2.png'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Calendar = ({ props }) => {
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [popUpHandler, setPopUpHandler] = useState(false);
  const [reload, setReload] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.user);
  var options = { year: "numeric", month: "long", day: "numeric" };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function likesOrDislikes() {
    await dispatch(eventsActions.likeDislike(props._id));
    setReload(!reload);
  }
  async function bookingEvent() {
    await dispatch(eventsActions.bookingYesNo(props._id));
    setReload(!reload);
  }
  async function deleteEvent() {
    await dispatch(eventsActions.deleteEvent(props._id));
    setReload(!reload);
  }
  const modifyEvent = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      description: e.target[7].value,
      authors: e.target[2].value,
      images: e.target[4].value,
      price: Number(e.target[5].value),
      limit: Number(e.target[6].value),
      date: e.target[1].value,
    };
    await dispatch(eventsActions.modifyEvent(props._id, data));
    setPopUpHandler(!true);
    setReload(!reload);
  };
  useEffect(() => {
    dispatch(eventsActions.getEvents());
    // eslint-disable-next-line
  }, [reload]);

  // const notify = () => toast.custom(<div className='w-full bg-orange-400 rounded-lg '>
  //   <div>
  //     <div className='flex  justify-center items-center'>
  //       <img className='h-16 w-16' src={Cody} alt="" />
  //       <p className='text-white w-full'>dañslkdñalskdñasl</p>
  //     </div>

  //   </div>
  // </div>, {
  //   duration: 7000,
  //   position: 'bottom-left'
  // });

  return (
    <div className="container-info-calendar flex flex-col items-center justify-between
      w-full p-2 rounded mt-1 mb-3">
      <div className="event-basic-info flex flex-col md:flex-row justify-around md:justify-between items-center md:items-center">
        <img
          src={props.images}
          alt="Nombre del Evento"
          className="w-4/5 sm:w-96 md:w-60"
        />
        <div className="calendar-item">
          <h4 className="font-medium text-lg">{props.name}</h4>
          {props?.authors.map((author, i) => (
            <h6 key={i} className="font-medium text-xs text-black-600 pt-2">
              {author}
            </h6>
          ))}
        </div>
        <div className="calendar-item">
          <p className="font-medium text-lg my-1">
            {new Date(props.date).toLocaleDateString("es-ES", options)}
          </p>
          <h5 className="font-medium my-1">Capacidad: {props.limit} personas</h5>
          <p className="text-xs leading-3 text-black-600 mb-2">
            {props?.attendance.length} asistentes confirmados
          </p>
        </div>

        <div className="container-modal-info">
          <div className="modal-info">
            <h5 className="text-black-600 dark:text-black-400 font-bold text-xl xl:text-2xl text-center">
              {`${props.likes?.length}`}
            </h5>
            {user ? (
              <IconButton
                className="text-sm text-white font-normal"
                sx={{ p: 0 }}
                onClick={likesOrDislikes}
                aria-label="add to favorites"
              >
                {props.likes?.includes(user.user?.id) ? (
                  <FavoriteIcon sx={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            ) : (
              <FavoriteBorderIcon />
            )}
          </div>
          <div className="modal-info">
            <h5 className="text-black-600 dark:text-black-400 font-bold text-xl xl:text-2xl text-center">
              {props.comments.length > 0 ? props?.comments.length : 0}
            </h5>
            <div className="text-black-800 text-sm px-5 font-normal rounded-full">
              <CommentIcon />
            </div>
          </div>
          <div className="modal-info">
            <h5 className="text-black-600 dark:text-black-400 font-bold text-xl xl:text-2xl text-center">
              {props?.limit - props?.attendance?.length}
            </h5>
            <p className="text-black-800 text-lg font-normal">
              Vacantes
            </p>
          </div>
        </div>
        {user?.user?.role === "admin" ?
          <div className="px-7 2xl:px-0">
            {
              show === 0 ? (
                <button
                  onClick={() => setShow(null)}
                  className="focus:outline-none pl-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setShow(0)}
                  className="focus:outline-none pl-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )
            }
            {show === 0 && (
              <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                <div
                  className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                  onClick={() => setPopUpHandler(true)}
                >
                  <p>Editar</p>
                </div>
                <div
                  onClick={deleteEvent}
                  className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                >
                  <p>Eliminar</p>
                </div>
              </div>
            )}
          </div>
          : null
        }
      </div>

      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <ExpandCircleDownIcon fontSize="medium" />
      </ExpandMore>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="text-sm leading-none text-black-800  justify-center item-center">
          <div className="flex flex-col items-center justify-between">
            <div className="description-modal">
              <p className="text-center text-base text-justify text-black-600 dark:text-black-400">
                {props.description}
              </p>
            </div>
            <div className="modal-info">
              {user ? (
                props?.attendance?.length ? (
                  <Button
                    variant="contained"
                    onClick={bookingEvent}
                    className="button-reserva"
                  >
                    Dar de baja
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={bookingEvent}
                    className="button-reserva"
                  >
                    Reservar lugar
                  </Button>
                )
              ) : (
                <LinkRouter
                  to={"/login"}
                  className="focus:outline-none button-reserva transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 py-2 text-sm text-center"
                >
                  Inicia sesión para reservar!
                </LinkRouter>
              )}
            </div>
          </div>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className="container-comments">
              <Comments props={props} />
            </div>
          </Collapse> */}
        </div>
      </Collapse>
    </div>
  );
};

export default Calendar;
