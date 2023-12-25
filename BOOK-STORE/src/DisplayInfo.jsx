import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from 'react';

export default function DisplayInfo( {show,details,onClose} ) {
  const [bookInfo, setBookInfo] = useState(null);
 
  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const response = await fetch(details);
        const json = await response.json();
        setBookInfo(json);
      } catch (error) {
        console.error('Error fetching book information:', error);
      }
    };

    if (show) {
      fetchBookInfo();
    }
  }, [show, details]);

  if (!show || !bookInfo) {
    return null;
  }



  return (
    <div>
       <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><CloseIcon/></button>
                    <div className="inner-box">
                       
                        <div className="info">
                        <h1>{bookInfo.title}</h1>
                         <p>{bookInfo.description}</p>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  );
}
