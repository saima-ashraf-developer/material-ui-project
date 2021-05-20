import React from 'react';
import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import Grid from '@material-ui/core/Grid';
import Masonry from 'react-masonry-css';
import Container from '@material-ui/core/Container';
import { SettingsRemoteSharp } from '@material-ui/icons';
import {Paper} from '@material-ui/core';  

export default function Notes(){
    const [notes, setNotes]= useState(
        [
            {
              "title": "Yoshi's birthday bash",
              "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "category": "reminders",
              "id": 1
            },
            {
              "title": "Complete my ninja training",
              "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
              "category": "work",
              "id": 2
            },
            {
              "title": "Order a pizza!",
              "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              "category": "todos",
              "id": 3
            },
            {
              "title": "Pay the milkman",
              "details": "Pay the milkman",
              "category": "money",
              "id": 4
            }
          ]
    )
   /*  useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res=>res.json())
        .then(data=>setNotes(data))
    },[]) */

    const handleDelete= async (id)=>{
        // await fetch('http://localhost:8000/notes' + id,{
        //     method: 'DELETE'
        // })
        const newnotes= notes.filter(note=> note.id != id)
        setNotes(newnotes);
    }
    return(
        <Container>
            <Grid container spacing={3}>
            {notes.map(note=>(
                <Grid item key={note.id} xs={12} md={6} lg={4}>
                    <NoteCard note={note} handleDelete={handleDelete}/>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
};
