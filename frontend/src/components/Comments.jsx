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
  const dispatch = useDispatch()
  const [event, setEvent] = useState()

  async function getEvent() {
    const res = await dispatch(eventsActions.getEventById(props._id));
    setEvent(res)
  }
  useEffect(() => {
    getEvent()
  }, [])



  return (
    <div className='background-accordion-comments'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: '#FFA43A' }}
        >
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: '#F9F2ED' }}
        >
          <Typography>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. */}
            <CommentsIn eventId={props?._id} comments={props?.comments} events={event} />

          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}