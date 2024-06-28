/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import './App.scss';
import frutolet from './assets/frutolet.png';
import tear from './assets/tear.svg';
import sad from './assets/sad.svg';
import happy from './assets/happy.svg';
import heart from './assets/heart.svg';
import apple from './assets/apple.png';
import logo from './assets/logo.png';
import house from './assets/house.svg';
import { Fragment } from 'react/jsx-runtime';
import Media from 'react-media';
import { useEffect, useRef, useState } from 'react';
import { firebaseConfig } from '../firebase';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { child, get, getDatabase, ref } from 'firebase/database';

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

function App() {
  const [pred, setPred] = useState();

  useEffect(() => {
    if (!pred) {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `predictions/${Math.trunc(Math.random() * 328)}`))
        .then((snapshot) => {
          console.log(snapshot);
          if (snapshot.exists()) {
            const val = snapshot.val();
            console.log(val);
            setPred(val.title);
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const tearRef = useRef(null);
  const onSad = (): void => {
    if (tearRef?.current) {
      // @ts-expect-error exists
      tearRef.current.className = tearRef.current.className + ' tearStarted';

      setTimeout(() => {
        // @ts-expect-error exists
        tearRef.current.className = tearRef.current.className.replaceAll('tearStarted', '');
      }, 1000);
    }
  };

  const heartRef = useRef(null);
  const onHappy = (): void => {
    console.log('call');
    if (heartRef?.current) {
      // @ts-expect-error exists
      heartRef.current.className = heartRef.current.className + ' heartStarted';

      setTimeout(() => {
        // @ts-expect-error exists
        heartRef.current.className = heartRef.current.className.replaceAll('heartStarted', '');
      }, 1000);
    }
  };

  return (
    <Media
      queries={{
        portarit: '(orientation:portrait)',
        landscape: '(orientation:landscape)',
        phone:
          '(((orientation:portrait) and (max-width:479px)) or ((orientation:landscape) and (max-height:479px)))',
        tablet:
          '(((orientation:portrait) and (min-width:480px)) or ((orientation:landscape) and (min-height:480px)))',
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.portarit && (
            <div className="sky small">
              <img src={logo} alt="logo" className="logo" />
              <div className="message_wrap">
                <div className="top_block">
                  <div className="apple_wrap">
                    <img src={apple} alt="apple" className="apple" />
                  </div>
                  <div className="title_wrap">
                    <div className="title">
                      Послание для тебя
                      <div className="title_line" />
                    </div>
                  </div>
                </div>
                <div className="message">{pred}</div>
                <div className="message_line" />
                <div className="reactions">
                  <div className="reactionWrap" onClick={onHappy}>
                    <img src={happy} alt="happy" className="reaction" />
                    <img src={heart} alt="heart" className="heart" ref={heartRef} />
                  </div>
                  <div className="reactions_line" />
                  <div className="reactionWrap" onClick={onSad}>
                    <img src={sad} alt="sad" className="reaction" />
                    <img src={tear} alt="tear" className="tear" ref={tearRef} />
                  </div>
                </div>
                <img src={frutolet} alt="frutolet" className="frutolet" />
              </div>
              <img src={house} alt="house" className="house" />
            </div>
          )}
          {matches.landscape && (
            <div className="sky">
              <img src={logo} alt="logo" className={`logo ${matches.tablet && 'tablet'}`} />
              <div className="message_wrap">
                <div className={`top_block ${matches.tablet && 'tablet'}`}>
                  <div className="apple_wrap">
                    <img src={apple} alt="apple" className="apple" />
                  </div>
                  <div className="title_wrap">
                    <div className={`title ${matches.tablet && 'tablet'}`}>Послание для тебя</div>
                    <div className="title_line" />
                  </div>
                </div>
                <div className={`message ${matches.tablet && 'tablet'}`}>{pred}</div>
                <div className="message_line" />
                <div className="reactions">
                  <div className="reactionWrap" onClick={onHappy}>
                    <img
                      src={happy}
                      alt="happy"
                      className={`reaction ${matches.tablet && 'tablet'}`}
                    />
                    <img src={heart} alt="heart" className="heart" ref={heartRef} />
                  </div>
                  <div className="reactions_line" />
                  <div className="reactionWrap" onClick={onSad}>
                    <img src={sad} alt="sad" className="reaction" />
                    <img src={tear} alt="tear" className="tear" ref={tearRef} />
                  </div>
                </div>
                <img
                  src={frutolet}
                  alt="frutolet"
                  className={`frutolet ${matches.tablet && 'tablet'}`}
                />
              </div>
              <img src={house} alt="house" className="house" />
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}

export default App;

