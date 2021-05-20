import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import { Avatar, Button, makeStyles } from '@material-ui/core';
import { green, yellow, pink, blue } from '@material-ui/core/colors';

const useStyles= makeStyles({
    test: {
        border: (note)=>{
            if(note.category== 'work'){
                return '1px solid red'
            }
        }
    }
})
export default function NoteCard({note, handleDelete}){
    const classes = useStyles(note);

    return(
        <div>
         <Card elevation={1} className={classes.test}>
             <CardHeader 
             action={
              <IconButton onClick={()=>handleDelete(note.id)}>
                 <DeleteOutlined />
              </IconButton>
             }
             title={note.title}
             subheader={note.category}/>
             <CardContent>
                 <Typography color='textSecondary' variant='body2'>
                     {note.details}
                 </Typography>
             </CardContent>
         </Card>
        </div>
    )
};