import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { MdOutlineArrowDropDown } from "react-icons/md";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../utils/Accordian";

function Value() {
  return (
    <div className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">

        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="house" />
          </div>
        </div>

        <div className="flexColStart v-right">

          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {data.map((data, index) => {
                const [className,setClassName] = useState("")
              return (
                <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                            {({expanded})=> expanded ? setClassName('expanded') : setClassName("collapsed")}
                        </AccordionItemState>
                      <div className="flexCenter icon">{data.icon}</div>
                      <span className="primaryText">{data.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={16} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{data.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Value;
