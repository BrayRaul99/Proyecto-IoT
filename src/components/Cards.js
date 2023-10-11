import React from 'react'
import Card from './Card';
import image1 from "../assets/imagen.jpg"
import image2 from "../assets/Practica1.jpg.png"
import image3 from "../assets/skl.jpg"

const cards = [
{
  id: 1,
  title: 'Fast React',
  image: image1,
  instructor: "Brayan Raul"
},
{
  id: 2, 
  title: 'Fast React 2',
  image: image2,
  instructor: "Brayan Raul"  
},
{
  id: 3,
  title: 'Fast React 3',
  image: image3,
  instructor: "Brayan Raul"
}
]


export default function Cards() {
  console.log ()
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className='row'>
        {
          cards.map(c =>(
            <div className="col-md-4" key={cards.id}>
              <Card
              key = {c.id}
              id = {c.id}
              title = {c.title}
              image = {c.image}
              instructor = {c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>  
  )
  
}