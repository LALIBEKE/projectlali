import React, { FC } from 'react';
import './PersonList.scss';
import Person from '../Person/Person';
import { PersonModel } from '../../models/PersonModel';

interface PersonListProps {}

const PersonList = () => {

let personList:PersonModel[]=[{firstName:'אליהו',phone:"0527616887"},{firstName:'זאב',phone:"0527616887"},{firstName:'גילה',phone:"0527616887"},{firstName:'דיצה',phone:"0527616887"},
{firstName:'דוד',phone:"0527616887"},{firstName:'דוד',phone:"0527616887"},{firstName:'דוד',phone:"0527616887"},{firstName:'חדווה',phone:"0527616887"}];

return   <div className="PersonList">
   {personList.map((a)=>{
    return <Person personDetails={a}  ></Person>
   })}
</div>
}


export default PersonList;
