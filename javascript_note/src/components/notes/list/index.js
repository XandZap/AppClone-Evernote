import React, { Fragment, useState } from "react";
import Moment from "moment";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListNotes(props) {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (key) => {
    setIsActive(key);
  };

  return (
    <Fragment>
      <div className="columns" breakpoint="mobile">
        <div className="column is-6 is-offset-1">
          <p className="title is-6">{props.notes.length} Notes</p>
        </div>
        <div className="column is-2">
          <button
            id="nova-lista"
            className="button is-custom-purple is-outlined is-normal"
            onClick={() => props.createNote()}
          >
            Notes +
          </button>
        </div>
      </div>
      <div className="list" id="notes-list">
        <ul id="notes">
          {props.notes.map((item, key) => (
            <li>
              <button
                className={`list-item ${isActive === key ? "active" : ""}`}
                key={key}
                onClick={() => {
                  handleClick(key);
                  return props.selectNote(item._id);
                }}
                active={item == props.current_note}
              >
                {/* Retirar carcters de marcação e mostrar apenas os 16 e 29 primeiros caracters */}
                <div className="title is-6">{item.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15)}</div>
                <div className="subtitle is-6">{item.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30)}</div>

                <div className="columns" breakpoint="mobile">
                  <div className="column is-2">
                    <span className="tag is-dark">{Moment(item.created_at).format("DD/MM")}</span>
                  </div>
                  <div className="column"></div>
                  <div className="column is-2">
                    <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={() => props.deleteNote(item)} color="grey" />
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default ListNotes;
