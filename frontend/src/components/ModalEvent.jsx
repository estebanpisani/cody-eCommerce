import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import "../styles/ModalEvent.css";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import eventsActions from "../redux/actions/eventsActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
  }),
}));


export default function ModalEvent({ everyEvent }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const user = useSelector((store) => store.userReducer.user);


  async function likesOrDislikes() {
    const res = await dispatch(eventsActions.likeDislike(everyEvent._id));

  }

  //   useEffect( () => {
  //     dispatch(eventsActions.getEventById(id));
  //  },[id])

  //  const everyEvent = useSelector(store=> store.eventsReducer.eventById)




  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          {everyEvent.name}
        </h3>
      </Button>
      
        <>
          <Box>
            <div className="flex items-center justify-center py-8 container-modal">
              {/* Card code block start */}
              <div className="bg-white dark:bg-gray-800 shadow rounded background-modal">
                <div className="relative">
                  <img
                    className="h-56 shadow rounded-t w-full object-cover object-center"
                    src="https://technwzs.com/wp-content/uploads/2022/06/webstorm-vs-vscode-780x470.jpeg"
                    alt
                  />
                  <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                    <img
                      className="w-full h-full overflow-hidden object-cover rounded"
                      src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                      alt
                    />
                  </div>
                </div>
                <div className="px-5 xl:px-10 pb-10">
                  <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5"></div>
                  <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                    <div className="xl:pr-16 w-full xl:w-2/3">
                      <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                        <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                          {everyEvent.authors}
                        </h2>

                        {user ? (
                          <div>
                            {everyEvent.likes?.includes(user._id) ? (
                              <>
                                <button
                                  className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
                                  onClick={likesOrDislikes}
                                >
                                  DISLIKE
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
                                  onClick={likesOrDislikes}
                                >
                                  LIKE
                                </button>
                              </>
                            )}
                          </div>
                        ) : (
                          <>
                            <button className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                              LIKE
                            </button>
                          </>
                        )}

                        {/* <button
                          className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
                          onClick={likesOrDislikes}
                        >
                          LIKE
                        </button> */}
                      </div>
                      <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                        {everyEvent.description}
                      </p>
                    </div>
                    <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                      <div className="mr-6 xl:mr-10">
                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                          {" "}
                          {`${everyEvent.likes?.length}`}
                        </h2>
                        <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                          Likes
                        </p>
                      </div>
                      <div className="mr-6 xl:mr-10">
                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                          {everyEvent.limit}
                        </h2>
                        <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                          Capacidad
                        </p>
                      </div>
                      <div>
                        <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                          {everyEvent.limit - everyEvent.attendance}
                        </h2>
                        <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                          Vacantes
                        </p>
                      </div>
                    </div>
                    <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                      <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                        <button className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">
                          RESERVAS
                        </button>

                        {/* <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">Reservas</div> */}
                      </div>
                      <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">
                        SignIn
                      </button>
                    </div>
                  </div>
                </div>
                <Comments everyEvent={everyEvent} />
              </div>
              {/* Card code block end */}
            </div>
          </Box>
        </>
    </div>
  );
}