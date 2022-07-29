import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentsIn from '../components/CommentsIn';
import { useDispatch } from 'react-redux';
import eventsActions from '../redux/actions/eventsActions';
import { useState, useEffect } from 'react';

export default function Comments({ props }) {
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch()
  const [event, setEvent] = useState()


  function reloadChanger() {
    setReload(!reload);
  }
  async function getEvent() {
    const res = await dispatch(eventsActions.getEventById(props._id));
    setEvent(res)
  }
  useEffect(() => {
    getEvent()
    // eslint-disable-next-line
  }, [reload])



  return (
    <div className='background-accordion-comments'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#F9B384' }}
        >
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: '#F9F2ED' }}
        >


          <CommentsIn eventId={props?._id} comments={props?.comments} events={event} setChangeReload={reloadChanger} />


        </AccordionDetails>
      </Accordion>

    </div>
  );
}