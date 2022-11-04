import {useEffect, useRef, useState} from 'react';

const TesteCamera = () => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {width: 1920, heigt: 1080},
      })
      .then((stream) => {
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
    const a = new Image();
    a.src = video.src;
    console.log(a);
    ctx.drawImage(video, 0, 0, width, height);
    // console.log(ctx);
    setHasPhoto(true);
  };

  const closePhoto = () => {
    // let video = videoRef.current;

    // video.clearRect('');
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, []);

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

        {/* {console.log(photoRef)} */}
        <button onClick={closePhoto}>Fechar!</button>
      </div>
    </div>
  );
};

export default TesteCamera;
