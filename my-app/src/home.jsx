import  { useState } from 'react';
import { Button, TextField, Typography, List, ListItem } from '@mui/material';

function Home() {

  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [history, setHistory] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value)
    }

  async function meigenFetch () {
    console.log("hello");
    try{
    const res = await fetch('http://localhost:8080');
    const resData = await res.json();
    if(!resData) throw new Error("取得失敗");
    const data = "「著者」："+resData[0].auther+"  「名言」："+resData[0].meigen;
    return data;

    } catch(e) {
      console.log(e);
      alert("データが取得できませんでした。")
    }
  }
  

  async function handleSend() {
    let botReply = '';
    if (input === 'こんにちは') {
      botReply = 'こんにちは！今日は天気がいいですね！';
    } else if (input === '元気？') {
      botReply = '元気です！';
    } else if (input.includes('名言')){
      botReply = await meigenFetch();
    } else {
      botReply = 'ごめんなさい、意味が分かりません。';
    }
    setReply(botReply);
    setHistory([...history, {user: input, bot: botReply}]);
    setInput('');
  }

  return (
    <div>
  <Typography variant="h4" sx={{ color: 'navy', fontWeight: 'bold', mb: 2 }}>名言Botアプリ</Typography>
  <Typography variant="h5" sx={{ color: 'navy', fontWeight: 'bold', mb: 2 }}>※外部APIからデータを取得しています。</Typography>
  <Typography variant="body1" sx={{ mb: 2 }}>ボットの返答: {reply}</Typography>
  <TextField
    value={input}
    onChange={handleInputChange}
    onKeyDown={e => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }}
    placeholder="メッセージを入力"
    variant="outlined"
    size="small"
    sx={{ mr: 2, width: '300px' }}
  />
  <Button
    variant="contained"
    color="primary"
    onClick={handleSend}
    sx={{ height: '40px' }}
  >
    送信
  </Button>

  <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
    会話履歴を管理 ↓
  </Typography>
  <List>
  {history.map((item, idx) => (
    <ListItem key={idx} sx={{ background: '#f0f0f0', margin: '8px 0', padding: '8px', borderRadius: '4px', display: 'block' }}>
      <strong>あなた:</strong> {item.user} <br />
      <strong>ボット:</strong> {item.bot}
    </ListItem>
  ))}
</List>
</div>
  );
}
export default Home;