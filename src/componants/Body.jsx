import React, {useState} from 'react';
import '../../public/styles/Body.css';

let firstImage = "images/usama-akram-kP6knT7tjn4-unsplash-removebg-preview.png";
let secondImage = "images/AIRZOOMPEGASUS41CM-removebg-preview.png";
let thirdImage = "images/GIANNISIMMORTALITY4EP-removebg-preview.png";
let fourthImage = "images/NIKEFREE2025-removebg-preview.png";

function Body() {

    const [width, setWidth] = useState({
        width: "400px",
        backgroundColor: "rgb(6, 231, 25)",
    });

    const [fontSize, setFontSize] = useState({

        fontSize: "50px"

    });

    const [removeOverlay, setOverlay] = useState({

        backgroundImage: "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        height: "100%",
        width: "100%"

    });
  
    const [loadFirstImage, setLoadFirstImage] = useState({

      transform: "scale(0) translateY(-1000px)",
      filter: "blur(30px)",

    });
  
    function loadFirstImageFun() {
    
      setLoadFirstImage({

        transform: "scale(1) rotate(-50deg) translateY(0px)",
        transition: "all 0.8s ease",
        filter: "blur(0px)",

      });

    }

    function changeWidth() {
        
        setWidth({

            width: "600px",
            transition: "all 0.8s ease",

        });

        setFontSize({

            fontSize: "100px",
            transition: "all 0.8s ease"

        });
      
        setLoadFirstImage({
          width: "600px",
          height: "600px",
          objectFit: "cover",
          position: "absolute",
          top: "40px",
          left: "-20px",
          transform: "rotate(0deg)",
          transition: "all 0.8s ease",
          filter: "drop-shadow(10px 10px 5px black)",
        });

        setOverlay({

            backgroundImage: "none",
            transition: "all 0.8s ease"

        });

      setImageContainerWidth({
        width: "350px",
        transition: "all 0.8s ease",
        backgroundColor: "#8b80f9",
      });

      setFontSize2({

        fontSize: "40px",
        transition: "all 0.8s ease",

      });

      setOverlay2({
        backgroundImage:
          "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        height: "100%",
        width: "100%",
        transition: "all 0.8s ease",
      });

      setLoadSecondImage({
        width: "400px",
        height: "400px",
        transform: "rotate(-50deg)",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "120px",
        left: "-80px",
      });

      setimageContainer3({
        width: "350px",
        backgroundColor: "#A97DC5",
        transition: "all 0.8s ease"
      });

      setfontSize3({

        fontSize: "40px",
        transition: "all 0.8s ease",

      });

      setremoveOverlay3({
        backgroundImage:
          "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        height: "100%",
        width: "100%",
        transition: "all 0.8s ease"
      });

      setLoadThirdImage({
        height: "400px",
        width: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        left: "-80px",
        top: "120px",
      });

      setimageContainer4({
        width: "350px",
        transition: "all 0.8s ease",
        backgroundColor: "#CB1F24",
      });

      setfontSize4({

        fontSize: "40px",
        transition: "all 0.8s ease",

      });


      setLoadFourthImage({
        width: "400px",
        height: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        left: "-80px",
        top: "120px",
      });

    }

    const [imageContainer2, setImageContainerWidth] = useState({
        backgroundColor: "#8b80f9",
        width: "400px",
    });

    const [fontSize2, setFontSize2] = useState({

        fontSize: "50px",

    });

    const [removeOverlay2, setOverlay2] = useState({

        backgroundImage: "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        height: "100%",
        width: "100%"

    });
  
    const [loadSecondImage, setLoadSecondImage] = useState({
      transform: "scale(0) translateY(1000px)",
      filter: "blur(30px)",
    });

    function loadSecondImageFun() {
      setLoadSecondImage({
        transform: "scale(1) rotate(-50deg) translateY(0px)",
        transition: "all 0.8s ease 0.5s",
        filter: "blur(0px)",
      });
    }

    function changeWidth2() {
        
        setImageContainerWidth({
          width: "600px",
          backgroundColor: "#8b80f9",
          transition: "all 0.8s ease",
        });

        setWidth({

            width: "350px",
            transition: 'all 0.8s ease'

        });

        setFontSize({

            fontSize: "40px",
            transition: "all 0.8s ease",

        });
      
        setLoadFirstImage({
          width: "400px",
          height: "400px",
          transform: "rotate(-50deg)",
          transition: "all 0.8s ease",
          position: "absolute",
          left: "-80px",
          top: "120px",
        });

        setOverlay({
          backgroundImage:
            "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
            height: "100%",
            width: "100%",
        });

        setFontSize2({

          fontSize: "100px",
          transition: "all 0.8s ease",  

        });

        setOverlay2({
          backgroundImage: "none",
          transition: "all 0.8s ease",
        });
      
        setLoadSecondImage({
          transform: "rotate(0deg)",
          transition: "all 0.8s ease",
          position: "absolute",
          top: "40px",
          left: "-20px",
          width: "600px",
          height: "600px",
          filter: "drop-shadow(10px 10px 5px black)",
        });
      
      setimageContainer3({
        width: "350px",
        transition: "all 0.8s ease",
        backgroundColor: "#A97DC5",
      });

      setfontSize3({

        fontSize: "40px",
        transition: "all 0.8s ease",

      });

      setremoveOverlay3({
        backgroundImage:
          "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        height: "100%",
        width: "100%",
        transition: "all 0.8s ease",
      });


      setLoadThirdImage({
        width: "400px",
        height: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "120px",
        left: "-80px",
      });

      setimageContainer4({
        width: "350px",
        transition: "all 0.8s ease",
        backgroundColor: "##BD1D22",
      });

      setfontSize4({

        fontSize: "40px",
        transition: "all 0.8s ease"

      });

      setLoadFourthImage({
        width: "400px",
        height: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "120px",
        left: "-80px",
      });

    }
  
    const [imageContainer3, setimageContainer3] = useState({
      backgroundColor: "#A97DC5",
      width: "400px",
    });
  
    const [fontSize3, setfontSize3] = useState({
    
      fontSize: "50px",

    });

    const [removeOverlay3, setremoveOverlay3] = useState({
      backgroundImage: "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
      height: "100%",
      width: "100%"
    });
  
    const [loadThirdImage, setLoadThirdImage] = useState({
    
      transform: "scale(0) translateY(-1000px)",
      filter: "blur(30px)"

    }); 
  
    function loadThirdImageFun() {
    
      setLoadThirdImage({

        transform: "scale(1) rotate(-50deg) translateY(0px)",
        filter: "blur(0px)",
        transition: "all 0.8s ease 1s"

      });

    }

    function changeWidth3() {
    
      setimageContainer3({
        width: "600px",
        transition: "all 0.8s ease",
        backgroundColor: "#A97DC5",
      });

      setfontSize3({

        fontSize: "100px",
        transition: "all 0.8s ease",

      });

      setremoveOverlay3({

        backgroundImage: "none",
        transition: "all 0.8s ease",

      });

      setLoadThirdImage({
        width: "600px",
        height: "600px",
        transform: "rotate(0deg)",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "50px",
        left: "-30px",
        filter: "drop-shadow(10px 10px 5px black)",
      });

      setImageContainerWidth({
        width: "350px",
        transition: "all 0.8s ease",
        backgroundColor: "#8b80f9",
      });

      setFontSize2({

        fontSize: "40px",
        transition: "all 0.8s ease",

      });

      setOverlay2({
        backgroundImage:
          "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        width: "100%",
        height: "100%",
        transition: "all 0.8s ease"
      });

      setLoadSecondImage({
        width: "400px",
        height: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "120px",
        left: "-80px",
      });

      setWidth({

        width: "350px",
        transition: "all 0.8s ease",

      });

      setFontSize({

        fontSize: "40px",
        transition: "all 0.8s ease"

      });

      setOverlay({
        backgroundImage:
          "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        transition: "all 0.8s ease"
      });

      setLoadFirstImage({
        width: "400px",
        height: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "120px",
        left: "-80px",
      });

      setimageContainer4({
        width: "350px",
        transition: "all 0.8s ease",
        backgroundColor: "#CB1F24",
      });

      setfontSize4({

        fontSize: "40px",
        transition: "all 0.8s ease",

      });


      setLoadFourthImage({
        width: "400px",
        height: "400px",
        transition: "all 0.8s ease",
        position: "absolute",
        top: "120px",
        left: "-80px",
      });

      setremoveOverlay4({
        backgroundImage:
          "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
        height: "100%",
        width: "100%",
        transition: "all 0.8s ease"
      });

  }
  
  const [imageContainer4, setimageContainer4] = useState({
    backgroundColor: "#CB1F24",
    width: "400px",
  });

  const [fontSize4, setfontSize4] = useState({

    fontSize: "50px",

  });

  const [removeOverlay4, setremoveOverlay4] = useState({
    backgroundImage: "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
    height: "100%",
    width: "100%",
  });

  const [loadFourthImage, setLoadFourthImage] = useState({

    transform: "scale(0) translateY(1000px)",
    filter: "blur(30px)",

  });

  function loadFourthImageFun() {
    
    setLoadFourthImage({

      transform: "scale(1) rotate(-50deg) translateY(0px)",
      filter: "blur(0px)",
      transition: "all 0.8s ease 1.5s",

    });

  }
  
  function changeWidth4() {
    
    setimageContainer4({
      width: "600px",
      transition: "all 0.8s ease",
      backgroundColor: "#CB1F24",
    });

    setfontSize4({

      fontSize: "100px",
      transition: "all 0.8s ease",

    });

    setimageContainer3({
      width: "350px",
      transition: "all 0.8s ease",
      backgroundColor: "#A97DC5",
    });

    setfontSize3({
      fontSize: "40px",
      transition: "all 0.8s ease",
    });

    setLoadThirdImage({
      width: "400px",
      height: "400px",
      transition: "all 0.8s ease",
      position: "absolute",
      top: "120px",
      left: "-80px",
    });

    setImageContainerWidth({
      width: "350px",
      transition: "all 0.8s ease",
      backgroundColor: "#8b80f9",
    });

    setLoadSecondImage({
      width: "400px",
      height: "400px",
      position: "absolute",
      top: "120px",
      left: "-80px",
      transition: "all 0.8s ease",
    });

    setFontSize2({

      fontSize: "40px",
      transition: "all 0.8s ease"

    });

    setremoveOverlay3({
      backgroundImage:
        "linear-gradient(360deg, #000000b2, #ffffff00, #000000b2)",
      height: "100%",
      width: "100%",
      transition: "all 0.8s ease"
    });

    setLoadFourthImage({
      width: "600px",
      height: "600px",
      transform: "rotate(0deg)",
      transition: "all 0.8s ease",
      position: "absolute",
      top: "50px",
      left: "-30px",
      filter: "drop-shadow(10px 10px 5px black)",
    });

    setremoveOverlay4({
      backgroundImage:
        "none",
      height: "100%",
      width: "100%",
      transition: "all 0.8s ease"
    });

    setWidth({
      width: "350px",
      transition: "all 0.8s ease",
      backgroundColor: "rgb(6, 231, 25)",
    });

    setFontSize({

      fontSize: "40px",
      transition: "all 0.8s ease"

    });

    setLoadFirstImage({
      width: "400px",
      height: "400px",
      transition: "all 0.8s ease",
      position: "absolute",
      top: "120px",
      left: "-80px",
    });

  }

    return (
      <div className="imagecontainer">
        <div className="imagesection" style={width} onClick={changeWidth}>
          <div className="coloroverlay" style={removeOverlay}>
            <div className="text">
              <h1 style={fontSize}> AIRMAX 95 </h1>

              <div className="shoeimage" onLoad={loadFirstImageFun}>
                <img src={firstImage} style={(loadFirstImage)} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="imagesection"
          style={imageContainer2}
          onClick={changeWidth2}
        >
          <div className="coloroverlay" style={removeOverlay2}>
            <div className="text">
              <h1 style={fontSize2}> JIRMA 100 </h1>

              <div className="shoeimage" onLoad={loadSecondImageFun}>
                <img
                  src={secondImage}
                  style={(loadSecondImage)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="imagesection"
          style={imageContainer3}
          onClick={changeWidth3}
        >
          <div className="coloroverlay" style={removeOverlay3}>
            <div className="text">
              <h1 style={fontSize3}> ZPXRM 500 </h1>

              <div className="shoeimage" onLoad={loadThirdImageFun}>
                <img
                  src={thirdImage}
                  style={(loadThirdImage)}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="imagesection"
          style={imageContainer4}
          onClick={changeWidth4}
        >
          <div className="coloroverlay" style={removeOverlay4}>
            <div className="text">
              <h1 style={fontSize4}> RTMZP 80 </h1>

              <div className="shoeimage" onLoad={loadFourthImageFun}>
                <img
                  src={fourthImage}
                  style={(loadFourthImage)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Body;