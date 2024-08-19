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
        title: "Så ska Googles nya ai-teknik för Android knäcka Chat GPT", 
        summary: "▸ Googles senaste lanseringsjippo bjöd inte bara på ett gäng nya produkter. Det visade också hur sökjätten tänker sig att röststyrd ai och stora språkmodeller ska förändra hur smarta prylar används.", 
        link: "https://www.nyteknik.se/tech/sa-ska-googles-nya-ai-teknik-for-android-knacka-chat-gpt/4281055", 
        published: new Date(Date.now() - 86400000), // 1 dag gammal
        topic: ["Teknik"] 
    },
    {
        title: "Kivra ligger nere – går inte att logga in", 
        summary: "▸ Den digitala brevlådetjänsten Kivra ligger nere. Enligt Kivra beror felet på driftstörningar som gör att det går inte att logga in. Just nu har vi ingen prognos när det kan vara löst, säger Kivras kommunikationschef Henrik Höglin.", 
        link: "https://www.svt.se/nyheter/ekonomi/kivra-ligger-nere", 
        published: new Date(Date.now() - 604800000), // 7 dagar gammal
        topic: ["Ekonomi"] 
    },
    {
        title: "Värme och sol i veckan – men då kommer stora bakslaget", 
        summary: "▸ Värmen och solen biter sig kvar i början på nästa vecka. Men passa på att njuta – för sen vänder det. Temperaturen väntas bli 24 grader och lokalt kanske 25 grader, säger TV4:s meteorolog Antonio Fuentes Moreno.", 
        link: "https://www.tv4.se/artikel/3ffaK0qh9WTOLJVUXP7WYV/vaerme-och-sol-under-naesta-vecka-men-da-kommer-stora-bakslaget", 
        published: new Date(Date.now() - 2592000000), // 30 dagar gammal
        topic: ["Vader"] 
    },
    {
        title: "Efter sopkritiken i skärgården – Norrtäljes återvinningsfärja tillbaka", 
        summary: "▸ På sommaren ökar antalet besökare i skärgården och i samband med det även mängden sopor. Efter kritik från skärgårdsborna återinför nu Norrtälje kommun återvinningsfärjan.", 
        link: "https://www.svt.se/nyheter/lokalt/stockholm/efter-sopkritiken-i-skargarden-norrtaljes-atervinningsfarja-tillbaka", 
        published: new Date(Date.now() - 1296000000), // 15 dagar gammal
        topic: ["Miljo"] 
    },
    {
        title: "Tiotusentals technoälskare samlades i parad", 
        summary: "▸ Under lördagen dansade tiotusentals besökare i Berlin under mottot ”Love is stronger”. Arrangörerna Rave the planet jobbar för att säkra technomusikens kulturella status.", 
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