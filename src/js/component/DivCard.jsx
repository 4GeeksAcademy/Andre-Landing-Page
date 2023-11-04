import React from 'react';
import Card from './Card.jsx';

const DivCard = () => {
  let data = [
    { title: "Card title", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid." },
    { title: "Card title", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid." },
    { title: "Card title", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid." },
    { title: "Card title", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid." }
  ];

  return (
    <div className="row mt-3 mb-3">
      {data.map((item, i) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
          <Card title={item.title} des={item.des} />
        </div>
      ))}
    </div>
  );
};

export default DivCard;

