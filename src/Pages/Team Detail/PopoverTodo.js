import { Popover, PopoverBody, PopoverHeader } from "react-bootstrap";
import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";

export default function PopoverTodo({
  addCardClick,
  copyListClick,
  moveAllCardClick,
  archiveAllCardClick,
  archiveListClick,
}) {
  return (
    <Popover id="popover-basic" className={style.popover_todo}>
      <PopoverHeader className={style.todo_popover_header}>
        Action List
      </PopoverHeader>
      <PopoverBody className={style.popover_todo_body}>
        <div className={style.popover_todo_body_container1}>
          <button onClick={addCardClick} className={style.todo1_button}>
            Add Card
          </button>
          <button onClick={copyListClick} className={style.todo2_button}>
            Copy List
          </button>
        </div>
        <div className={style.popover_todo_body_container2}>
          <button onClick={moveAllCardClick} className={style.todo3_button}>
            Move All Card in This List
          </button>
          <button onClick={archiveAllCardClick} className={style.todo4_button}>
            Archive All Card in This List
          </button>
        </div>
        <div className={style.popover_todo_body_container3}>
          <button onClick={archiveListClick} className={style.todo5_button}>
            Archive This List
          </button>
        </div>
      </PopoverBody>
    </Popover>
  );
}
