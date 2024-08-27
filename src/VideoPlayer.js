import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef1 = useRef();
  const videoRef2 = useRef();
  const videoRef3 = useRef();

  const handlePlay1 = () => {
    videoRef1.current.play();
  };
  const handlePause1 = () => {
    videoRef1.current.pause();
  };

  const handlePlay2 = () => {
    videoRef2.current.play();
  };
  const handlePause2 = () => {
    videoRef2.current.pause();
  };

  const handlePlay3 = () => {
    videoRef3.current.play();
  };
  const handlePause3 = () => {
    videoRef3.current.pause();
  };

  return (
    <>
      <div className="pro">
        <div className="container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L80,26.7C160,21,320,11,480,37.3C640,64,800,128,960,165.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>{" "}
          {/* WAVE----------------------------------- */}
          <div className="pro-in1">
            <div className="left">
              <h2>Module 1: Personal Protective Equipment (PPE)</h2>
              <h1>01.</h1>
              <p className="ptextp">
                Importance of PPE: Explain the significance of PPE in preventing
                injuries and illnesses in the workplace. <br />
                <br />
                Types of PPE: Introduce various types of PPE, such as hard hats,
                safety glasses, gloves, earplugs, respirators, and steel-toed
                boots
              </p>
              <br />
              <p className="ptextp">
                Proper Use and Maintenance: Demonstrate how to properly use and
                maintain PPE, including inspection procedures and storage
                guidelines.
              </p>
            </div>

            <div className="right">
              <video ref={videoRef1}>
                <source src="./Video/Video2.mp4" />
              </video>

              <div className="btn">
                <button className="play" onClick={handlePlay1}>
                  Play
                </button>
                <button className="pause" onClick={handlePause1}>
                  Pause
                </button>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L40,42.7C80,53,160,75,240,101.3C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,154.7C1040,139,1120,117,1200,138.7C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              width="20%"
            ></path>
          </svg>{" "}
          {/* WAVE----------------------------------- */}
          <p class="blank">
            <br />
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L80,26.7C160,21,320,11,480,37.3C640,64,800,128,960,165.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>{" "}
          {/* WAVE----------------------------------- */}
          <div className="pro-in1">
            <div className="left">
              <h2>Module 2: Fire Safety and Prevention</h2>
              <h1>02.</h1>
              <ul>
                <li>
                  {" "}
                  <p className="ptextp">
                    Fire Hazards: Identify potential fire hazards in the
                    workplace, such as electrical equipment, open flames, and
                    chemical reactions.
                  </p>
                </li>

                <li>
                  <p className="ptextp">
                    Fire Extinguisher Training: Train learners on how to use a
                    fire extinguisher correctly, including the PASS method
                    (Pull, Aim, Squeeze, Sweep).
                  </p>
                </li>

                <li>
                  <p className="ptextp">
                    Emergency Procedures: Explain emergency procedures in case
                    of a fire, such as evacuation routes, assembly points, and
                    fire alarm systems.
                  </p>
                </li>
              </ul>
            </div>

            <div className="right">
              <video ref={videoRef2}>
                <source src="./Video/Video1.mp4" />
              </video>

              <div className="btn">
                <button className="play" onClick={handlePlay2}>
                  Play
                </button>
                <button className="pause" onClick={handlePause2}>
                  Pause
                </button>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L40,42.7C80,53,160,75,240,101.3C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,154.7C1040,139,1120,117,1200,138.7C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              width="20%"
            ></path>
          </svg>
          <p class="blank">
            <br />
          </p>{" "}
          {/* WAVE----------------------------------- */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L80,26.7C160,21,320,11,480,37.3C640,64,800,128,960,165.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>{" "}
          {/* WAVE----------------------------------- */}
          <div className="pro-in1">
            <div className="left">
              <h2>Module 3: Slip, Trip, and Fall Prevention</h2>
              <h1>03.</h1>
              <p className="ptextp">
                Hazards: Identify potential hazards that can lead to slips,
                trips, and falls, such as wet floors, uneven surfaces, loose
                cords, and cluttered walkways.
              </p>
              {/* <br /> */}
              <p className="ptextp">
                Prevention Measures:Explain prevention measures to prevent
                slips, trips, and falls, including:
                <ul>
                  <li>Cleaning up spills promptly</li>
                  <li>Using non-slip mats or signs on stairs</li>
                  <li>Securing cords and cables</li>
                  <li>Maintaining a clean and organized workspace</li>
                  <li>Wearing proper footwear</li>
                </ul>
              </p>

              <p className="ptextp">
                Reporting Incidents: Emphasize the importance of reporting
                incidents to supervisors or safety personnel.
              </p>
            </div>
            <div className="right">
              <video ref={videoRef3}>
                <source src="./Video/Video3.mp4" />
              </video>

              <div className="btn">
                <button className="play" onClick={handlePlay3}>
                  Play
                </button>
                <button className="pause" onClick={handlePause3}>
                  Pause
                </button>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L40,42.7C80,53,160,75,240,101.3C320,128,400,160,480,176C560,192,640,192,720,186.7C800,181,880,171,960,154.7C1040,139,1120,117,1200,138.7C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              width="20%"
            ></path>
          </svg>{" "}
          {/* WAVE----------------------------------- */}
        </div>
      </div>
    </>
  );
}

export { VideoPlayer };
