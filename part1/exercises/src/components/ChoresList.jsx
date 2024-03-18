import React from "react";
import classes from './ChoresList.module.css';

export default function ChoresList () {

   let pageTitle = "To Do List" ;
   return (
   <div className={classes.container} >
         <h3 className={classes.choresHeading}>{pageTitle}</h3>
         <li className={classes.choresText}>Clean room!</li>
         <li className={classes.choresText}>Wash dishes!</li>
         <li className={classes.choresText}>Vacuum!</li>
         
      </div>
   );
}