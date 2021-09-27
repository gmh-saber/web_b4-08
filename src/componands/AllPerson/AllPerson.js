import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';

const AllPerson = () => {
    const [persons, setPerson] = useState([])
    // cart a add korar jonno state
    const [cart, setCart] = useState([])

    const handleAddPerson = (person) => {
        const newPerson = [...cart, person]
        setCart(newPerson)
    }
    // data are loading here
    useEffect(() => {
        fetch("/fakePersondb.json")
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    {/* single person's data are going to person component */}
                    <div className="row ">
                        {
                            persons.map(person =>
                                <Person
                                    key={person.key}
                                    person={person}
                                    handleAddPerson={handleAddPerson}
                                >
                                </Person>
                            )
                        }
                    </div>
                </div>
                {/* data are going to cart component */}
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    ></Cart>

                </div>

            </div>
        </div>
    );
};

export default AllPerson;