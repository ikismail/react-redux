import React, { useEffect } from "react";
import "./App.css";
import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import { connect } from "react-redux";
import { Person } from "../store/model/person";
import Album from "../components/album/album";
import { fetchAllPersons } from "../store/actions/person.action";
const App = ({
  persons,
  fetchAllPersons
}: {
  persons: Person[];
  fetchAllPersons: () => {};
}) => {
  useEffect(() => {
    fetchAllPersons();
  }, [fetchAllPersons]);

  return (
    <div className=''>
      <Navbar />
      <Banner />
      <div className='album py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            {persons.map((person, index) => (
              <div className='col-md-4' key={index}>
                <Album person={person} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { person: { persons: Person[] } }) => ({
  persons: state.person.persons
});

const mapDispatchToProps = {
  fetchAllPersons
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
