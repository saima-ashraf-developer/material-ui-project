import React from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { useHistory, useLocation } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 200

const useStyles = makeStyles((theme)=>{
    return {
        page:{
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width: drawerWidth,
        },
        drawerPaper:{
            width: drawerWidth,
        },
        root:{
            display: 'flex'
        },
        active:{
            backgroundColor: '#f4f4f4',
        },
        title:{
            padding: theme.spacing(2),
        }
    }
 });
 
    

export default function Layout({children}){
    const classes= useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuitem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color= 'secondary' />,
            path: '/create'
        },
    ]

    return(
        <div className={classes.root}>
            <Drawer 
            variant= 'permanent' 
            anchor= 'left' 
            className={classes.drawer}
            classes={{paper: classes.drawerPaper}}
            >
             <div>
              <Typography variant= 'h5' classname={classes.title}>
                  Sam Notes
              </Typography>
            </div>
            <List>
               {menuitem.map(item=>(
                   <ListItem 
                   key={item.text}
                   button
                   onClick={()=>history.push(item.path)}
                   className={location.pathname == item.path ? classes.active : null}>
                       <ListItemIcon>{item.icon}</ListItemIcon>
                       <ListItemText primary={item.text} />
                   </ListItem>
               ))}
            </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
};