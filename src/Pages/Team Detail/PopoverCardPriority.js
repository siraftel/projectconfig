import { Popover, PopoverBody, PopoverHeader } from "react-bootstrap";
import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";
import { useState } from "react";

import greenCheck from "../../Assets/Icons/green check.png";
import lowest from "../../Assets/Icons/lowest.png";
import low from "../../Assets/Icons/low.png";
import high from "../../Assets/Icons/high.png";
import highest from "../../Assets/Icons/highest.png";

export default function PopoverCardPriority() {
  const [priority, setPriority] = useState("");

  return (
    <>
      <Popover id="popover-basic" className={style.popover_card_priority}>
        <PopoverHeader className={style.popover_priority_header}>
          Select an Option
        </PopoverHeader>
        <PopoverBody className={style.popover_priority_body}>
          <div className={style.form_group}>
            <div
              onClick={() => setPriority("highest")}
              className={style.priority_wrapper}
            >
              <div className={style.priority_container}>
                <img
                  className={style.priority_image_check}
                  src={highest}
                  alt="Highest"
                />
                <span>Highest</span>
              </div>
              <div className={style.check_container}>
                {priority === "highest" ? (
                  <img
                    src={greenCheck}
                    className={style.priority_image_check}
                    alt="checklist"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div
              onClick={() => setPriority("high")}
              className={style.priority_wrapper}
            >
              <div className={style.priority_container}>
                <img
                  className={style.priority_image_check}
                  src={high}
                  alt="High"
                />
                <span>High</span>
              </div>
              <div className={style.check_container}>
                {priority === "high" ? (
                  <img
                    src={greenCheck}
                    className={style.priority_image_check}
                    alt="checklist"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div
              onClick={() => setPriority("low")}
              className={style.priority_wrapper}
            >
              <div className={style.priority_container}>
                <img
                  className={style.priority_image_check}
                  src={low}
                  alt="Low"
                />
                <span>Low</span>
              </div>
              <div className={style.check_container}>
                {priority === "low" ? (
                  <img
                    src={greenCheck}
                    className={style.priority_image_check}
                    alt="checklist"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div
              onClick={() => setPriority("lowest")}
              className={style.priority_wrapper}
            >
              <div className={style.priority_container}>
                <img
                  className={style.priority_image_check}
                  src={lowest}
                  alt="Lowest"
                />
                <span>Lowest</span>
              </div>
              <div className={style.check_container}>
                {priority === "lowest" ? (
                  <img
                    src={greenCheck}
                    className={style.priority_image_check}
                    alt="checklist"
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </PopoverBody>
      </Popover>
    </>
  );
}
