//import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

//const UserDashboard = () => {
 // const [monuments, setMonuments] = useState([]);
  //const [loading, setLoading] = useState(true);

  // Fetch the list of monuments when the component loads
  //useEffect(() => {
   // const fetchMonuments = async () => {
     // try {
     //   const response = await axios.get('/api/monuments');
     //   setMonuments(response.data);
     // } catch (error) {
     //   console.error('Error fetching monuments', error);
     // } finally {
     //   setLoading(false);
     // }
   // };
   // fetchMonuments();
 // }, []);

  //return (
   // <div className="container my-4">
    //  <h2 className="text-center mb-4">User Dashboard</h2>

   //   <div>
     //   <h4 className="text-center mb-4">Explore Indian Monuments</h4>
        
    //     {loading ? (
    //       <p className="text-center">Loading monuments...</p>
    //     ) : (
    //       <div className="row">
    //         {monuments.map((monument) => (
    //           <div className="col-md-4 mb-4" key={monument.id}>
    //             <div className="card h-100">
    //               <img 
    //                 src={monument.imageUrl} 
    //                 alt={monument.name} 
    //                 className="card-img-top" 
    //                 style={{ objectFit: 'cover', height: '200px' }} 
    //               />
    //               <div className="card-body">
    //                 <h5 className="card-title">{monument.name}</h5>
    //                 <p className="card-text">{monument.description}</p>
    //                 <Link to={`/monument/${monument.id}`} className="btn btn-primary w-100">
    //                   View Details
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //  </div>
    // </div>
 // );
//};

//export default UserDashboard;
