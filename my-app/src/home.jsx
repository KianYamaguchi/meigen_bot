import React, { useState } from 'react';

function Home() {

  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [history, setHistory] = useState([])
  let res = "";
  let resData = "";
  let data = "";

  
  function handleInputChange(e) {
    setInput(e.target.value)
    }


  async function meigenFetch () {
    console.log("hello");
    try{
    res = await fetch('http://localhost:8080');
    resData = await res.json();
    if(!resData) throw new Error("取得失敗");
    data = "著者："+resData[0].auther+"名言："+resData[0].meigen;
    return data;
    } catch(e) {
      console.log(e);
    }
  }
  

  async function handleSend() {
    let botReply = '';
    if (input === 'こんにちは') {
      botReply = 'こんにちは！今日は天気がいいですね！';
    } else if (input === '元気？') {
      botReply = '元気です！';
    } else if (input === '名言'){
      await meigenFetch();
      botReply = data;
    } else {
      botReply = 'ごめんなさい、意味が分かりません。';
    }
    setReply(botReply);
    setHistory([...history, {user: input, bot: botReply}]);
    
    setInput('');
  }

  return (
    <div>
      <h1>名言Botアプリ</h1>
      <p>ボットの返答: {reply}</p>
      <input type="text" value={input} onChange={handleInputChange} placeholder="メッセージを入力" />
      <button onClick={handleSend}>送信</button>

    <h2>会話履歴を管理 ↓</h2>
    <div>{history.map((item, idx) => (
  
      <li key={idx}>
            <strong>あなた:</strong> {item.user} <br />
            <strong>ボット:</strong> {item.bot}
          </li>
      ))}

      </div>


    </div>
  );
}
export default Home;