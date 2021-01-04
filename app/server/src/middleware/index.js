import { generatePDFFromData } from "../generator";

export function printRequest(req, res, next) {
  console.log("middleware function");
  console.log(req.body);

  return next();
}

export function generatePDF(req, res, next) {
  let pdf = generatePDFFromData(req.body);
  pdf.pipe(res);

  //res.end();

  console.log(res);
  return next();
}

export function accessControlAllowOrigin(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,responseType,accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
}
