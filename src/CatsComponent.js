

import React, { useEffect, useState } from 'react';
import { fetchCat, fetchCatImage } from './services/CatService';
import LoadButton from './Components/LoadButton';
import './CatsComponent.css'; // Import the CSS file

const CatsComponent = () => {
  const [cat, setCat] = useState(null);
  const [catImage, setCatImage] = useState('');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const loadCat = async () => {
    try {
      setLoading(true);
      const catData = await fetchCat();
      setCat(catData);

      const base64Image = await fetchCatImage(catData._id);
      setCatImage(base64Image);

      



      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCat();
  }, []);



  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to get contrasting text color
  const getContrastingColor = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? 'black' : 'white';
  };












  useEffect(() => {
    const fetchData = async () => {
      try {
        const catData = await fetchCat();
        setCat(catData);

        const base64Image = await fetchCatImage(catData._id);
        setCatImage(base64Image);

       
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{}}>
      <h2 className="cats-sub-header">Home to cute cats</h2>
      <div className="cat-grid">
        {cat && (
          <div key={cat._id} className="cat-item">
            <img
              src={`data:${cat.mimetype};base64,${catImage}`}
              alt="Cat"
              className="catsImage"
            />
          </div>
        )}
        <div className="cat-tag-container">

          {cat.tags.map((tag, index) => {
                // <span key={index} className="cat-tag">
                //   #{tag}
                // </span>


            const backgroundColor = getRandomColor();
            const color = getContrastingColor(backgroundColor);
            return (
              <span
                key={index}
                className="cat-tag"
                style={{ backgroundColor, color }}
              >
                #{tag}
              </span>
            );

            })}
        </div>
      </div>
      <LoadButton onClick={loadCat} />
    </div>
  );
};

export default CatsComponent;