import React, { useState } from 'react';

const Alert = ({ message, onClose }) => {
     const [showAlert, setShowAlert] = useState(true);
     const handleClose = () => {
          setShowAlert(false);
          onClose && onClose();
     };

     return (
          showAlert && (
               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                         <div className="flex justify-between items-center mb-4">
                              <h2 className="text-lg font-semibold">BSC's Adviser</h2>
                              <button
                                   className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                   onClick={handleClose}
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                   </svg>
                              </button>
                         </div>
                         <p className="text-gray-700">Expand your viewing pleasure – switch to a larger screen/ Desktop site for optimal enjoyment. But ok this is responsive Yar enjoy. But try once in large screen</p>
                         <button
                              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                              onClick={handleClose}
                         >
                              OK
                         </button>
                    </div>
               </div>
          )
     );
};

export default Alert;
