import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import eventsActions from "../redux/actions/eventsActions";
import Comments from "./Comments";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { styled } from "@mui/material/styles";
import { Collapse } from "@mui/material";
import { Box } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/ModalEvent.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
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
    <>
      {/* <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div> */}

      {/* FIN MODAL EDIT EVENT*/}
      <div className="container-info-calendar">
        {/* <tr className="h-52 text-sm leading-none text-black-800 bg-white hover:bg-black-100 border-b border-t border-black-100">
        <td className="pl-4 cursor-pointer"> */}
        <div className="flex items-centre">
          <div className="img-calendar">
            <img
              className="w-full h-full"
              src={props.images}
              alt="Nombre del Evento"
            />
          </div>
          <div className="pl-4 info-calendar">
            <p className="font-medium">{props.name}</p>
            {props?.authors.map((author, i) => (
              <p key={i} className="text-xs leading-3 text-black-600 pt-2">
                {author}
              </p>
            ))}
          </div>
        </div>
        {/* </td> */}
        <div className="pl-12 info-calendar">
          <p className="font-medium">Límite {props.limit}</p>
          <p className="text-xs leading-3 text-black-600 mt-2">
            {props?.attendance.length} asistentes confirmados
          </p>
        </div>
        <div className="pl-20 info-calendar">
          <p className="font-medium">${props.price}</p>
          <p className="text-xs leading-3 text-black-600 mt-2">Precio</p>
        </div>
        <div className="pl-20 info-calendar">
          <p className="font-medium">
            {new Date(props.date).toLocaleDateString("es-ES", options)}
          </p>
          <p className="text-xs leading-3 text-black-600 mt-2">Fecha</p>
        </div>
        <div className="pl-16 info-calendar">
          <div className="flex items-center">
            <img
              className="shadow-md w-16 h-16 rounded-full"
              src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
              alt="Presentador"
            />
          </div>
        </div>
        <div className="px-7 2xl:px-0">
          {user?.user?.role === "admin" ? (
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
          ) : null}
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
        {/* </tr> */}
      </div>

      <div className="container-tr">
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <div className="expander-button">
            <ExpandCircleDownIcon fontSize="medium" />
          </div>
        </ExpandMore>
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="text-sm leading-none text-black-800 bg-white border-b border-t justify-center item-center border-black-100 div-modal">
          <div className="px-5 xl:px-10 div-modal">
            <div className="flex justify-center xl:justify-end pt-1 xl:pt-5"></div>
            <div className=" flex flex-col xl:flex-row xl:items-center justify-between">
              <div className="container-modal-info">
                <div className="img-modal">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded"
                    src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                    alt="Imagen del Autor del Evento"
                  />
                </div>
                <div className="modal-author">
                  <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-black-800 dark:text-black-100 font-medium tracking-normal">
                    {props.authors}
                  </h2>
                </div>
              </div>

              <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                <div className="container-modal-info">
                  <div className="modal-info">
                    <div className="likes-modal">
                      <h2 className="text-black-600 dark:text-black-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                        {" "}
                        {`${props.likes?.length}`}
                      </h2>
                      {user ? (
                        <IconButton
                          className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
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

                    <p className="text-black-800 dark:text-black-100 text-sm xl:text-xl leading-5">
                      Likes
                    </p>
                  </div>
                  <div className="modal-info">
                    <h2 className="text-black-600 dark:text-black-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                      {props.limit}
                    </h2>
                    <p className="text-black-800 dark:text-black-100 text-sm xl:text-xl leading-5">
                      Capacidad
                    </p>
                  </div>
                  <div className="modal-info">
                    <h2 className="text-black-600 dark:text-black-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                      {props?.limit - props?.attendance?.length}
                    </h2>
                    <p className="text-black-800 dark:text-black-100 text-sm xl:text-xl leading-5">
                      Vacantes
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-modal-info">
                <div className="modal-info">
                  {user ? (
                    props?.attendance?.length ? (
                      <Button
                        // sx={{
                        //   background: "#f8b384",
                        //   color: "black",
                        //   marginTop: 3,
                        // }}
                        variant="contained"
                        onClick={bookingEvent}
                        className="button-reserva"
                      >
                        Dar de baja
                      </Button>
                    ) : (
                      <Button
                        // sx={{
                        //   background: "#f8b384",
                        //   color: "black",
                        //   marginTop: 3,
                        // }}
                        variant="contained"
                        onClick={bookingEvent}
                        className="button-reserva"
                      >
                        Reservar lugar
                      </Button>
                    )
                  ) : (
                    <p>Inicia sesión para reservar!</p>
                  )}
                </div>
                <div className="modal-info">
                  {!user ? (
                    <LinkRouter
                      to={"/login"}
                      className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm"
                    >
                      Iniciar sesión
                    </LinkRouter>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="description-modal">
            <p className="text-center xl:text-left mt-2 text-base tracking-normal text-black-600 dark:text-black-400 leading-5">
              {props.description}
            </p>
          </div>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <div className="container-comments">
              <Comments props={props} />
            </div>
          </Collapse>
        </div>
      </Collapse>

      {/* </td >
        
      </tr>  */}
    </>
  );
};

export default Calendar;
