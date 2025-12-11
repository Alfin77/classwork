const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const server = http.createServer((req, res) => {

  if (req.url === '/fileupload' && req.method === 'POST') {

    const form = formidable({ multiples: false, uploadDir: __dirname + '/uploads', keepExtensions: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.end('Error uploading file');
        return;
      }

  
      const file = files.filetoupload?.[0];

      if (!file) {
        res.end("No file uploaded.");
        return;
      }

      const oldPath = file.filepath;
      const newPath = path.join(__dirname, 'uploads', file.originalFilename);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          res.end('Error saving file');
          return;
        }

        const transporter = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "6da238b1a0a314",
            pass: "5ea64c0d30db6d"
          }
        });

        const mailOptions = {
          from: "noreply@example.com",
          to: "friend@example.com",
          subject: "File Uploaded Successfully",
          text: "A file has been uploaded and stored successfully."
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
            res.end("File uploaded but email failed.");
          } else {
            res.end("File uploaded and email sent successfully!");
          }
        });

      });

    });

  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Upload a File</h2>');
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br><br>');
    res.write('<input type="submit" value="Upload">');
    res.write('</form>');
    res.end();
  }

});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});