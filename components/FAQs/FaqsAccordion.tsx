"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const FaqAccordion = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-10">
        <span className="text-white text-xl lg:text-3xl">FAQs</span>
      </div>
      <div className="mt-10">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What is the return policy?
          </AccordionSummary>
          <AccordionDetails className="text-zinc-400">
            We offer a 30-day return policy for all our products. If you are not
            satisfied with your purchase, you can return it within 30 days of
            the delivery date for a full refund or exchange. Please ensure the
            item is in its original condition and packaging.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How long does shipping take?
          </AccordionSummary>
          <AccordionDetails className="text-zinc-400">
            Shipping times vary depending on your location. Typically, orders
            are processed within 1-2 business days and delivery takes 3-7
            business days. International shipping may take longer, ranging from
            7-14 business days. You will receive a tracking number once your
            order has shipped.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            How can I track my order?
          </AccordionSummary>
          <AccordionDetails className="text-zinc-400">
            Once your order has been shipped, you will receive an email with a
            tracking number and a link to track your package. You can also log
            in to your account on our website to view the status of your order
            and tracking information.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What payment methods do you accept?
          </AccordionSummary>
          <AccordionDetails className="text-zinc-400">
            We accept various payment methods including major credit cards
            (Visa, MasterCard, American Express), PayPal, and Apple Pay. All
            payments are securely processed to ensure your personal information
            is protected.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordion;
