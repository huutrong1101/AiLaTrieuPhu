import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import data from "./data/data";

function App() {
  const [username, setUsername] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "200.000" },
        { id: 2, amount: "400.000" },
        { id: 3, amount: "600.000" },
        { id: 4, amount: "1.000.000" },
        { id: 5, amount: "2.000.000" },
        { id: 6, amount: "3.000.000" },
        { id: 7, amount: "6.000.000" },
        { id: 8, amount: "10.000.000" },
        { id: 9, amount: "14.000.000" },
        { id: 10, amount: "22.000.000" },
        { id: 11, amount: "30.000.000" },
        { id: 12, amount: "40.000.000" },
        { id: 13, amount: "60.000.000" },
        { id: 14, amount: "85.000.000" },
        { id: 15, amount: "150.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const handlePlayAgain = () => {
    setUsername("");
    setStop(false);
    setQuestionNumber(1);
  };
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <>
                <div className="formPlayAgain">
                  <h1 className="endText">Bạn đã kiếm được {earned} vnđ</h1>
                  <button className="btnPlayAgain" onClick={handlePlayAgain}>
                    Chơi lại
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="top">
                  <h3>Xin chào: {username}</h3>
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((item) => (
                <li
                  key={item.id}
                  className={
                    questionNumber === item.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemAmount">{item.amount}</span>
                  <span></span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
