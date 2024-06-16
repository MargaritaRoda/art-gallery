import React from 'react';
import './ImgFullScreen.scss';

type ImgFullScreen = {
  img: string;
  title: string;
  isOpen: boolean;
  onHide: () => void;
};
export const ImgFullScreen = ({
  img,
  title,
  isOpen,
  onHide,
}: ImgFullScreen) => {
  const handleCloseDialog = () => {
    onHide();
  };
  return (
    <dialog className={isOpen ? 'screen' : 'hidden'} open={isOpen}>
      <div className="screen-img">
        <img src={img} alt={title} />
      </div>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="screen-close"
        onClick={handleCloseDialog}
      >
        <path
          d="M9.33745 28.2367L7.76245 26.6617L16.4249 17.9992L7.76245 9.33672L9.33745 7.76172L17.9999 16.4242L26.6624 7.76172L28.2374 9.33672L19.5749 17.9992L28.2374 26.6617L26.6624 28.2367L17.9999 19.5742L9.33745 28.2367Z"
          fill="#F7F7F7"
        />
      </svg>
    </dialog>
  );
};
