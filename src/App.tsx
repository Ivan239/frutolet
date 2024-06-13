import './App.scss';
import frutolet from './assets/frutolet.png';
import alien from './assets/alien.svg';
import sad from './assets/sad.svg';
import happy from './assets/happy.svg';
import apple from './assets/apple.png';
import logo from './assets/logo.png';
import { Fragment } from 'react/jsx-runtime';
import Media from 'react-media';

function App() {
  return (
    <Media
      queries={{
        small: '(max-width: 479px)',
        medium: '(min-width: 480px)',
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
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
                <div className="message">
                  Счастье приходит тогда, когда ты перестаёшь жаловаться на проблемы, которые у тебя
                  есть, и начинаешь благодарить за проблемы, которых у тебя нет
                  <div className="message_line" />
                </div>
                <div className="reactions">
                  <img src={sad} alt="sad" className="reaction" />
                  <div className="reactions_line" />
                  <img src={happy} alt="happy" className="reaction" />
                </div>
                <img src={frutolet} alt="frutolet" className="frutolet" />
              </div>
              <img src={alien} alt="alien" className="alien" />
            </div>
          )}
          {matches.medium && (
            <div className="sky">
              <img src={logo} alt="logo" className="logo" />
              <div className="message_wrap">
                <div className="top_block">
                  <div className="apple_wrap">
                    <img src={apple} alt="apple" className="apple" />
                  </div>
                  <div className="title_wrap">
                    <div className="title">Послание для тебя</div>
                    <div className="title_line" />
                  </div>
                </div>
                <div className="message">
                  Счастье приходит тогда, когда ты перестаёшь жаловаться на проблемы, которые у тебя
                  есть, и начинаешь благодарить за проблемы, которых у тебя нет
                  <div className="message_line" />
                </div>
                <div className="reactions">
                  <img src={sad} alt="sad" className="reaction" />
                  <div className="reactions_line" />
                  <img src={happy} alt="happy" className="reaction" />
                </div>
                <img src={frutolet} alt="frutolet" className="frutolet" />
              </div>
              <img src={alien} alt="alien" className="alien" />
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}

export default App;

