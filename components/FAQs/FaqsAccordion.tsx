"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

// interface FAQSArray {
//   [index: number]: FAQ;
// }

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is ApkXchange about??",
    answer:
      "Traders looking to maximize profit with the right market rate and a sustainable way of trading without been scammed. ApkXchange has been established as the best place to Trade Gift Cards, Make Bank Payments, and Trade Cryptocurrencies. The ApkXchange consist of a team that have been in this kind of business for more than 5 years and knows the Ins and Outs of this space. Picking us as your GOTO place for these services mentioned above is going to be the right choice for you and we’re glad you have decided to choose us.",
  },

  {
    question: "How fast is the delivery systems at ApkXchange?",
    answer:
      "Here at ApkXchange every trade or transaction happening has a duration of 30mins Max for our team to satisfy your needs or deliver the services you’re acquiring. Incase there is a delay and we exhaust our time limit of 30mins you always has the option to either cancel the said trade or approach us in the Chat Section where you’d be able to chat directly with our team and the Admin working on your order. Anytime you have a question or a sort of an enquiry on How Far your order is going you can always feel free to message the Admin in the chat box who is serving you.",
  },
  {
    question: "How does the rate system work at ApkXchange?",
    answer:
      "Whenever a user chooses a product say “ Sale of a $100 Playstation Gift Card”. Before the user proceeds to START TRADE, there is a window that shows the exact value he’s going to get for the said product, in this scenario it might be $50 USDT. Meaning you’re going to be paid a $50 USDT for your $100 Amazon Gift Card. Same way works for all the other products selected been from a BUY or Sell Order.",
  },

  {
    question: "Can i deposit funds to my ApkXchange account?",
    answer:
      "This is a frequently asked question but the answer is NO. As of now when this FAQs is been written we still haven’t implemented an option where users can make deposit of Crypto, Bank payments or anything of the sort to ApkXchange yet. This may be different in the near future.",
  },
  {
    question: "How do i get paid when i sell a gift card on ApkXchange?",
    answer:
      "Getting paid on ApkXchange is so easier and very fast as well. Once your trade has been completed with the admin you’re dealing with been a gift card sale, or Crypto Sale. You will be asked to drop your payment details been Crypto or Bank Payment; For Crypto we issue payments in the form of Bitcoin, USDT-TRC20/BRC-20 and Solana only. For Bank Payments this becomes an option only for local traders and those are (Ghanaians and Nigerians only). Bank payments can be made to these countries only and at a very swift delivery.",
  },
  {
    question: " Buying a giftcard on ApkXchange",
    answer:
      "To buy a gift card on apkxchange has been made very easier for users. Pick the product you want to buy and select the number of quantities, Proceed to the next page you’d be asked to click on Start Trade, Only Click on start trade when you’re ready to make payment for the said product. Make sure to Read Instructions and Guidelines on How this works before proceeding to trade. Local users (GHANA ONLY) can be able to make payment through Bank or Mobile Money also known as MOMO. The exact amount to pay in our Local currency will be made available to you on screen. Once you paid you can then click Start Trade and we’ll be notified immediately. Within 30mins max you’d served with your gift card ASAP.",
  },
  {
    question: "I’m not receiving 2FA notifications through email",
    answer:
      "We ran into some 2FA issues when we first launched but those have all been resolved! If you’re still not receiving 2FA notifications in your email, please reach out to our support team and we’ll get to the bottom of it. ",
  },
  {
    question: "Benefits of Using a Referral Code on to register on ApkXchange.",
    answer:
      "Our referral program is mainly reserved for certain individuals; Promoters and Marketers.Whenever a user uses a referral code to register for our service that user is exempt from paying fees during trades for the next 3 months. There are also rewards to individuals with access to referral codes. If you want to help promote ApkXchange contact us on our social media handles and we’ll be more than happy to give you access to one of our referral codes to earn rewards for such work.",
  },
  {
    question: "HOW BANK PAYMENTS WORKS ON APKXCHANGE",
    answer:
      "These bank payments are mainly reserved for LOCAL users( Ghana and Nigeria Only) Goto the Bank Payments tab and select the bank you want to make payment to. Make sure to READ Instructions or Guidelines for Bank Payments. Click start trade and Make the payment of the amount you want to deposit to your bank account. Every bank transaction will incur a fee of GHC50, do add that when paying. You’d be asked to provide the Bank Details in the chat section. Within 30mins max your Deposit would have been completed. If you have any questions do ask the Admin in the chat screen.",
  },
  {
    question: "I’m not able to verify my ID after several attempts",
    answer:
      "Please make sure the photo of the document you’re uploading is clear and taken in a well lighted area. Your photo, name, and all other text must be legible.",
  },
];
const FaqAccordion = () => {
  return (
    <div>
      <div className="w-full flex justify-center mt-10">
        <span className="text-white text-xl lg:text-3xl">FAQs</span>
      </div>
      <div className="mt-10">
        {faqs.map((faq: FAQ, index: number) => (
          <Accordion defaultExpanded={index == 0} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {`${faq.question}`}
            </AccordionSummary>
            <AccordionDetails className="text-zinc-400">
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
