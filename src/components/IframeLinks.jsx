import React, { useEffect, useRef } from "react";
import { IoIcons } from "../tools/icons";

export default function IframeLinks(props) {
  const { isOpen, link, setFrameopen } = props;
  const popupIframe = useRef(null);
  useEffect(() => {
    if (isOpen == true) {
      popupIframe.current.style.transform = "scale(1)";
    } else {
      popupIframe.current.style.transform = "scale(0)";
    }
  });
  const closeMenu = () => {
    setFrameopen(false);
  };
  return (
    <section className="popupIframe" ref={popupIframe}>
      <h1 id="close" onClick={closeMenu}>
        <IoIcons.IoCloseSharp />
      </h1>
      <div className="liveViewContainer">
        {link === "#" ? (
          <div className="pageNotFoundDisplay">
            <img src="/notFound.png" alt="notFound" />
            <h2>Live link is not available!</h2>
          </div>
        ) : (
          <>
            <div className="preview">
              <img src="/preview.png" alt="preview" />
              <iframe
                src={link}
                width="800"
                height="600"
                title="Embedded Website"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
