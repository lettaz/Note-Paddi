import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {


  notes: Note[] = new Array<Note>();
  
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {

  //Retrieve all notes from NoteService

  this.notes = this.noteService.getAll();
  }

  deleteNote( i: number){
    this.noteService.delete(i);
  }

}
