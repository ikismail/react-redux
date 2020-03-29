import React from "react";

const Banner = () => {
  return (
    <section className='jumbotron text-center pt-0'>
      <div className='container'>
        <img
          src={process.env.PUBLIC_URL + "/banner.png"}
          alt=''
          width='500'
          height='230'
          style={{ padding: 15 }}
        />
        <h1 className='jumbotron-heading'>Person Application using REDUX</h1>
        <p className='lead text-muted'>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <a href='/' className='btn btn-primary my-2'>
            Open React App
          </a>
        </p>
      </div>
    </section>
  );
};

export default Banner;
