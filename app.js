const express = require("express");
const app = express();
app.listen(8000, () => {
    console.log("HTTP Proje calıştırıldı " + 8000);
});


const pdfUrls = [
    "https://api.bring.com/labels/id/759cee9f-2ac1-4815-9d69-1d0ebc8d46b0.pdf",
    "https://api.bring.com/labels/id/1d07caca-ebd2-420d-939b-6c17dfbbf68d.pdf",
    "https://api.bring.com/labels/id/52379786-fa5d-4497-9cfc-d7d23f64886e.pdf"
];

const fs = require("fs");
const request = require("request-promise-native");
const merge = require('easy-pdf-merge');


async function downloadPDF(pdfURL, outputFilename) {
    let pdfBuffer = await request.get({uri: pdfURL, encoding: null});
    console.log("Writing downloaded PDF file to " + outputFilename + "...");
    fs.writeFileSync(outputFilename, pdfBuffer);
}
var count=1

pdfUrls.forEach(pdf=>{
    downloadPDF(pdf, "./upload/download_pdf/"+count+".pdf");
    count+=1;

})
count=1
margePDF=[]
pdfUrls.forEach(element=>{

    margePDF.push("./upload/download_pdf/"+count+".pdf")
    count+=1
})
console.log(margePDF)
merge(margePDF, './upload/pdf/final.pdf', function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('Successfully merged!')
});