import React, { Fragment, useState, useEffect } from "react";
import { push as Menu } from "react-burger-menu";
import "../../styles/notes.scss";
import List from "../notes/list";
import Editor from "../notes/editor/index";
import NotesService from "../../services/notes";
import Search from "./search";

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

  async function fetchNotes() {
    const response = await NotesService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse());
      setCurrentNote(response.data[0]);
    } else {
      setNotes([]);
    }
  }

  const createNote = async () => {
    await NotesService.create();
    fetchNotes();
  };

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NotesService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data);
  };

  const deleteNote = async (note) => {
    await NotesService.delete(note._id);
    fetchNotes();
  };

  const searchNote = async (query) => {
    const response = await NotesService.search(query);
    setNotes(response.data);
  };

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    });
    setCurrentNote(note);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      <div className="columns" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <div className="columns">
            <div className="column is-10 is-offset-1"><Search searchNote={searchNote} fetchNotes={fetchNotes} /></div>
          </div>
          <List
            notes={notes}
            selectNote={selectNote}
            current_note={current_note}
            createNote={createNote}
            deleteNote={deleteNote}
          />
        </Menu>

        <div className="notes-editor column is-12" id="notes-editor">
          <Editor note={current_note} updateNote={updateNote} />
        </div>
      </div>
    </Fragment>
  );
};

export default Notes;
