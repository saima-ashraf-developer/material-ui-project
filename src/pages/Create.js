import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';


const useStyles= makeStyles({
    field:{
        marginTop: 20,
        marginBottom:20,
        display: 'block',
    }
})

export default function Create(){
    const classes= useStyles();
    const history= useHistory();
    const [title, setTitle]= useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError]= useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos')

    const submitHandler=(e)=>{
        e.preventDefault()
        setTitleError(false);
        setDetailsError(false);

        if(title == ''){
            setTitleError(true)
        }
        if(details== ''){
            setDetailsError(true)
        }
        if(title && details){
           fetch('http://localhost:8000/notes', {
               method: 'POSt',
               headers: {'Content-type': 'application/json'},
               body: JSON.stringify({title,details,category})
           }).then(()=>history.push('/'))
        }
    };
    return(
        <Container>
              <Typography
            variant='h6' 
            color="textSecondary"
             component='h2' 
             gutterBottom>
                Create a new note
            </Typography>
            <form noValidate autoComplete='off' onSubmit={submitHandler}>
                <TextField onChange={(e)=>setTitle(e.target.value)} 
                className={classes.field} 
                color='secondary' 
                variant='outlined' 
                fullWidth label='Note Title'
                 required
                 error={titleError} />
                <TextField onChange={(e)=>setDetails(e.target.value)} 
                className={classes.field} 
                color='secondary' 
                variant='outlined' 
                fullWidth label='Details' 
                required 
                multiline
                rows={4} 
                error={detailsError} />
                <FormControl className={classes.field}>
                <FormLabel>Note Category</FormLabel>
                 <RadioGroup value={category} onChange= {(e)=>setCategory(e.target.value)}>
                    <FormControlLabel label='money' control={<Radio />} value='money'/>
                    <FormControlLabel label='todos' control={<Radio />} value='todos'/>
                    <FormControlLabel label='reminders' control={<Radio />} value='reminders'/>
                    <FormControlLabel label='work' control={<Radio />} value='work'/>
                 </RadioGroup>
                </FormControl>
                <Button 
            type='submit' 
            color='secondary' 
            variant='contained'>
                submit
            </Button>
            </form>
            
        </Container>
    )
};