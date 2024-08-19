const express = require('express');
   const cors = require('cors');
   const app = express();
   const port = 3000;

   app.use(cors());

   // Hard-coded articles data
   const articles = [
    { 
        title: "Inte klart med ersättare för Ribbenvik", 
        summary: "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.", 
        link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik", 
        published: new Date(Date.now()),
        topic: ["SamhalleKonflikter"] 
    },
    { 
        title: "Drogs in i inhägnad – dödades av 40 krokodiler", 
        summary: "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm.", 
        link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler", 
        published: new Date(Date.now()),
        topic: ["Ekonomi"] 
    },
    { 
        title: "Regionpolitiker: Mer stöd från staten behövs", 
        summary: "▸ Regeringen behöver skjuta till pengar för att välfärden inte ska drabbas drastiskt.", 
        link: "https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs", 
        published: new Date(Date.now()),
        topic: ["Politik"] 
    },
    { 
        title: "Två avlidna hittade i bostad i Sandviken", 
        summary: "▸ En man och en kvinna har hittats avlidna i en bostad i Sandviken, skriver polisen på sin hemsida. Dödsorsaken är oklar.", 
        link: "https://www.aftonbladet.se/nyheter/a/dwPPP1/tva-avlidna-hittade-i-bostad-i-sandviken", 
        published: new Date(Date.now()),
        topic: ["Miljo"] 
    },
    {
        title: "Ny teknik kan revolutionera solenergi", 
        summary: "▸ Forskare har utvecklat en ny teknik som kan öka effektiviteten hos solceller och minska kostnaderna för solenergi.", 
        link: "https://www.example.com/ny-teknik-solenergi", 
        published: new Date(Date.now() - 86400000), // 1 dag gammal
        topic: ["Teknik"] 
    },
    {
        title: "Ekonomiska utsikter för 2024", 
        summary: "▸ Ekonomer analyserar de förväntade ekonomiska trenderna för det kommande året och vad de betyder för hushåll och företag.", 
        link: "https://www.example.com/ekonomiska-utsikter-2024", 
        published: new Date(Date.now() - 604800000), // 7 dagar gammal
        topic: ["Ekonomi"] 
    },
    {
        title: "Stormens påverkan på den lokala infrastrukturen", 
        summary: "▸ Den senaste stormen har orsakat omfattande skador på vägar och elnät i flera delar av landet.", 
        link: "https://www.example.com/stormens-paverkan-infrastruktur", 
        published: new Date(Date.now() - 2592000000), // 30 dagar gammal
        topic: ["Vader"] 
    },
    {
        title: "Innovativa lösningar för att bekämpa plastavfall", 
        summary: "▸ Forskarna presenterar nya metoder för att minska och återvinna plastavfall i hav och på land.", 
        link: "https://www.example.com/bekampa-plastavfall", 
        published: new Date(Date.now() - 1296000000), // 15 dagar gammal
        topic: ["Miljo"] 
    },
    {
        title: "Kulturevenemang för sommaren 2024", 
        summary: "▸ En översikt över de mest efterlängtade kulturevenemangen och festivalerna som planeras för nästa sommar.", 
        link: "https://www.example.com/kulturevenemang-sommaren-2024", 
        published: new Date(Date.now() - 4320000000), // 50 dagar gammal
        topic: ["Kultur"] 
    }
];

   // API endpoint to get articles
   app.get('/api/articles', (req, res) => {
       let filteredArticles = articles;
       const { topic, sortBy } = req.query;

       if (topic) {
           filteredArticles = filteredArticles.filter(article => article.topic.includes(topic));
       }

       if (sortBy === 'newest') {
           filteredArticles = filteredArticles.sort((a, b) => new Date(b.published) - new Date(a.published));
       } else if (sortBy === 'oldest') {
           filteredArticles = filteredArticles.sort((a, b) => new Date(a.published) - new Date(b.published));
       }

       res.json(filteredArticles);
   });

   app.listen(port, () => {
    console.log(`Backend API running at http://localhost:${port}`);
});