import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(8080, () => {
   console.log("port8080で起動中")
})

app.get('/', async (req, res) => {
    try{
    const apiData = await fetch('https://meigen.doodlenote.net/api/json.php?c=1&e=1');
    if(!apiData){
        throw new Error("apiデータが取得できませんでした")
    }
    const data = await apiData.json();
    res.json(data);
    } catch(e) {
        console.log(e);
    }
})
