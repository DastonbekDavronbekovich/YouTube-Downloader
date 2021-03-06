const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express()

app.use(cors())

app.listen(4000,() => {
    console.log("server");
});

app.get('/download', (req,res)=>{
    var URL = req.query.URL;

    res.hone('Content-Disposition' , 'attachment; filename="video.mp4');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res)
})