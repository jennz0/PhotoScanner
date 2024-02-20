# PhotoScanner App

## Overview

PhotoScanner is a React web application designed to capture photos of driver's licenses and extract information from them using optical character recognition (OCR) technology. The application allows users to use their device's camera to capture an image of a driver's license, which is then processed to extract relevant information such as name, address, date of birth, and license number.

## Architecture

The architecture of the PhotoScanner app is based on a client-server model:

- **Frontend**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces. React Router is used for client-side routing to navigate between different screens of the application.
- **Backend**: The backend server is responsible for serving the frontend assets and handling API requests for OCR processing. For OCR functionality, Tesseract.js, a JavaScript library for optical character recognition, is used.

## Technologies Used

- **Frontend**:
  - React.js
  - React Router
  - Tesseract.js
- **Backend**:
  - Node.js (for serving frontend assets)
  - Express.js (for handling API requests)
- **Other**:
  - Webcam React component (for accessing the device's camera)
  - PropTypes (for type-checking in React components)
  
## Obstacles and Assumptions

During development, the following obstacles were encountered:

- **Camera Access**: Implementing camera access in a web application required understanding how to use the `react-webcam` component and handling its integration with the OCR functionality.
- **License Information Extraction**: Extracting information accurately from driver's licenses using OCR can be challenging due to variations in the layout and quality of different licenses. Assumptions were made regarding the format and structure of the license information to improve extraction accuracy.

## Future Improvements

- Implement user authentication and secure storage of captured license information.
- Improve OCR accuracy by fine-tuning Tesseract.js settings and preprocessing images.
- Add support for capturing photos in different lighting conditions and angles.
- Enhance user interface and add additional features such as validation of extracted information.
