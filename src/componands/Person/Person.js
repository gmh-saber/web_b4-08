import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Person.css'
const Person = (props) => {
    const { name, picture, designation, company, gender, honorarium } = props.person;
    const element = <FontAwesomeIcon icon={faUser} />
    return (
        <div className ="col-md-4 ">
            <div className="card mb-3">
                <div className="col g-0 ">
                    <img src={picture} className=" avatar rounded-circle mt-4
                        card-img-top " style={{ "width": "200px" }} alt="..." />
                    <div className="card-body ">
                        <h4 className="card-title">Name: {name}</h4>
                        <h5>Designation: {designation}</h5>
                        <h5>Company: {company}</h5>
                        <h5>Gender: {gender}</h5>
                        <h5>Honorarium:${honorarium}</h5>
                        <button onClick={() => props.handleAddPerson(props.person)} className="btn btn-color text-white">{element} Invite</button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Person;