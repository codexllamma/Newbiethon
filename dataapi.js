const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

const datasets = {
    Switzerland: { title: "Switzerland", description: "Switzerland is renowned for its multilingualism, with four official languages: German, French, Italian, and Romansh. It consistently ranks as the world's most innovative economy, excelling in research and development, particularly in biotech and nanotechnology. The country is also famous for its picturesque landscapes, including the majestic Alps and pristine lakes, which attract millions of tourists each year. Switzerland's commitment to sustainability is evident in its extensive public transportation system and eco-friendly practices, making it a leader in environmental conservation. Additionally, the Swiss education system is highly regarded, producing a skilled workforce that contributes to the nation's economic success. The blend of cultural diversity, cutting-edge innovation, and breathtaking natural beauty makes Switzerland a unique and captivating destination.", images: ["switz.jpg", "switz1.jpg"] },
    Norway: { title: "Norway", description: "The Northern Lights, or Aurora Borealis, are among the most spectacular of nature's displays, entrancing viewers with their colorful displays of light dancing across the night sky. The natural light display is caused when charged particles from the sun interact with atoms in the Earth's atmosphere, producing breathtaking visual effects that can vary from soft greens to brilliant purples and reds. The finest locations to view this stunning sight are in Arctic latitudes, such as Norway, Sweden, Finland, Canada, and Alaska, where clear, dark skies are the best conditions for viewing.The spectacle of viewing the Northern Lights has been described as magical and mystical. Most visitors take guided tours or reside in special accommodations, including glass igloos or secluded lodges, that provide optimal viewing. The spectacle normally happens during winter when nights are longest and skies are darkest, so it has become a sought-after activity among those who love adventure and nature.", images: ["northernlights1.jpg","norway1.jpg"] },
    
    Greece: { title: "Greece", description: "This is dataset for greece", images: ["greece.jpg", "greece1.jpg"] },
    Italy: { title: "Italy", description: "This is dataset for italy", images: ["georgia.jpg", "georgia1.jpg"] },
    Mauritius: { title: "Mauritius", description: "This is dataset for mauritius", images: ["mauritius.jpg", "mauritius1.jpg"] },
    Maldives: { title: "Maldives", description: "This is dataset for maldives", images: ["maldives.jpg", "maldives1.jpg"] }
};


app.get("/getData", (req, res) => {
    const datasetName = req.query.dataset;
    res.json(datasets[datasetName] || { error: "Dataset not found" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
