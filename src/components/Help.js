import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='p-4 font-semibold ' id='helpSection'>
      <div className='text-center text-3xl '>
        Get Help
      </div>
      <div className='m-3'>
        <div>
          QUICK ASSISTS
        </div>
        <div>
          Answers to our most frequently asked questions are just one click away.
        </div>
      </div>
      <hr className='m-3' />

      <div>
        <div className='m-3'>DISPATCH & DELIVERY</div>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What are UrbanWares delivery options?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>During checkout, we'll provide an estimated delivery date. We'll also include that date in your order confirmation email.</p>

              <h3>STANDARD DELIVERY</h3>

              <ul>₹ 1 250.00 for all orders</ul>
              <ul>Arrives in 6–9 business days</ul>

              <h3>On the day your order will be delivered, the courier will send you a text message with a one-time password. When the courier arrives with your order, you'll need to provide the password to accept the delivery.</h3>


            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>



      <div><Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Can my Nike order be dispatched internationally?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>We don't deliver internationally to addresses outside of the country or region where you place your order. But you can shop Nike in a number of locations globally.</div>
            <div>We cannot deliver to PO boxes, Nike stores, reshippers or package-forwarding services.

            </div>
          </Typography>
        </AccordionDetails>
      </Accordion></div>

      <hr className='m-3' />

      <div>
        <div className='m-3'>ORDERS</div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Where is my Nike order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                The most accurate and current information for your Nike order is always available at Nike.com/orders. To check your order status, you'll need your order number and email address. Nike Members can also sign in to access their order information.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Can I cancel or change my Nike order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                You can't make changes, but you can cancel an order within 30 minutes of placing it.
              </div>
              <div>
                To cancel an order, first go to your orders page. If you're not signed in, you'll need to enter the order number from your confirmation email, along with your email address. Next, open the order you want to cancel, then tap or click the "Cancel" button and follow the prompts.
              </div>
              <div>
                If you don't see the cancel button, it has been more than 30 minutes since your order was placed, and it can no longer be cancelled. But don't worry—you can return the items within 30 days.
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
}
