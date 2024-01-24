import React, { FC } from 'react';
import './Person.scss';
import { PersonModel } from '../../models/PersonModel';
import Button from '../Button/Button';



interface PersonProps {
  // firstName:string
  // phone:string
  // age:number
  // isBack?:boolean
  // typeConnect?:'תהילים' | 'שיר השירים'

  //מאפיין חדש לתגית person
  personDetails:PersonModel
}

//כל קומפוננטה דינאמיץת מקבלת אובייקט עם מאפיינים
//כל מאפיין שהאבא שולח יכנס לתוך אובייקט ה props
const Person=(props:PersonProps)=>{
  return <div className="card" >
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.personDetails.firstName}</h5>
    <p className="card-text">{props.personDetails.phone}</p>
   

   <Button>צפה בפרטי : {props.personDetails.firstName}</Button>
  </div>
</div>
}

export default Person;
