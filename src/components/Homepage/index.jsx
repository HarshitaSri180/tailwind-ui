import React from 'react';
import './style.css';

export default function Index() {
  return (
    <div>
      <div className='bg-[#3B5D50]'>
        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 grid-cols-1 pb-8">
          <div className='flex mx-auto items-center'>
            <div className="headingtext">
              <h1 className='mx-auto text-5xl font-bold text-white py-4'>
                Modern Interior <br /> Design Studio
              </h1>
              <p className='mx-auto text-normal text-gray-300 py-2'>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                <br /> velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
          </div>
          <div className=''>
            <div className="couchImg">
              <img
                className=''
                src='https://themewagon.github.io/furni/images/couch.png'
                alt="Couch"
              />
              {/* Positioned background dot image */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h1 className='text-4xl flex mx-auto pb-4'>
              Crafted with <br /> excellent material.
            </h1>
            <p className='pb-4'>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <button className='btn btn-success rounded-pill'>Explore</button>
          </div>

          {/* Image section with overlay */}
          <div className="col-12 col-md-6 col-lg-3 mb-4 imgsec">
            <img
              className="imgcont"
              src='https://themewagon.github.io/furni/images/product-1.png'
              alt="Product"
            />
            <div className="imgcont-overlay">
              <h2 className='text-dark'>Overlay Title</h2>
              <p>Overlay content goes here.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4 imgsec">
            <img
              className="imgcont"
              src='https://themewagon.github.io/furni/images/product-1.png'
              alt="Product"
            />
            <div className="imgcont-overlay">
              <h2 className='text-dark'>Overlay Title</h2>
              <p>Overlay content goes here.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4 imgsec">
            <img
              className="imgcont"
              src='https://themewagon.github.io/furni/images/product-1.png'
              alt="Product"
            />
            <div className="imgcont-overlay">
              <h2 className='text-dark'>Overlay Title</h2>
              <p>Overlay content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
