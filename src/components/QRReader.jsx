import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

const QRScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      console.log("data retrived is ------------------->", data)
    }
  }

  const handleError = (error) => {
    console.error("------------------>",error);
  }

  const [toggleCam, setToggleCam] = useState(false)

  return (
    <div>
      {toggleCam && <QrReader
        delay={500}
        onError={handleError}
        onScan={handleScan}
        // onResult={(result, error) => {
        //   if (result) {
        //     setResult(result?.text);
        //   }

        //   if (error) {
        //     console.log("iif error statement --------->",error);
        //   }
        // }}
        onResult={(data, error)=>{
          console.log(JSON.stringify(data))
        }}
        // style={{ width: 100, height:100 }}
      />}
      <div>
        <button onClick={()=>{
          setToggleCam(!toggleCam)
        }}>Camera</button>
        {/* <button>Turn off</button> */}
      </div>
      <p>{result}</p>
    </div>
  );
}

export default QRScanner;
