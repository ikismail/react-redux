import React from "react";
import { Person } from "../../store/model/person";

function Album({ person }: { person: Person }) {
  return (
    <div className='card mb-4 shadow-sm'>
      <div className='card-body'>
        <p className='card-text'>{person.name}</p>
        <p className='card-text'>{person.email}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              View
            </button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Edit
            </button>
          </div>
          <small className='text-muted'>9 mins</small>
        </div>
      </div>
    </div>
  );
}

export default Album;
