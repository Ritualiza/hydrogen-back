import {useEffect, useRef, useState} from 'react';

const TesteCamera = () => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [closeCamera, setCloseCamera] = useState(false);

  //   const [camera, setCamera] = useState();
  const camera = useRef(null);

  const solveMount = useRef(false);
  const solveUnmount = useRef(false);

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {width: 1920, heigt: 1080},
      })
      .then((stream) => {
        camera.current = stream;
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    // console.log(photo.toDataURL());

    setHasPhoto(true);
  };

  const closePhoto = () => {
    // let video = videoRef.current;

    // video.clearRect('');
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);

    setCloseCamera(true);

    setHasPhoto(false);
  };

  useEffect(() => {
    if (solveMount.current) {
      getVideo();
    }

    solveMount.current = true;
  }, []);

  useEffect(
    () => () => {
      if (solveUnmount.current) {
        camera.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
      console.log(solveUnmount.current);
      console.log(camera.current);

      solveUnmount.current = true;

      //   console.log(hasPhoto);
    },
    [],
  );

  return (
    <div className="divCamera">
      <div className="divCamera">
        <video ref={videoRef}>
          {/* <track
            src="fgsubtitles_no.vtt"
            kind="subtitles"
            srcLang="no"
            label="Norwegian"
          /> */}
        </video>
        <button onClick={takePhoto}>TIRAR FOTO!</button>
      </div>
      <div className="divCamera">
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>Fechar!</button>
      </div>
    </div>
  );
};

export default TesteCamera;
