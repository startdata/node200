const express =require('express');

const app = express();

app.use(express.static(`${__dirname}/multimedia`));
app.use((req,res) => {
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    res.end(`<img src="/newyork.jpg" width="100%"`);
});

app.listen(3000, () => {
    console.log(`server`);
})