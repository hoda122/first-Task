import express from "express";
const app = express();

const Students = ["Hoda", "Asmaa", "Noran"];

const x = (request, response) => {
  let output = "<ul>";

  for (let i = 0; i < Students.length; i++) {
    output += "<li>" + Students[i] + "</li>";
  }
  output += "</ul>";
  response.send(output);
};
app.get("/students", x);
app.listen(3000);
