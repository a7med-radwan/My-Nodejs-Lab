// عمل import لمكتبة ال http
const http = require('http')
const port =5050;
// عرفت السيرفر
const server = http.createServer((req, res) => {
    // ال createServer بتاخد 2 براميتر (req, res)
    // ال req لتبجي من جهة ال ...
    // وال res بترجع من ال clint
    res.end('Welcom to the page');
    // الناتج تبعها على صفحة الويب فالرابط هاد http://localhost:5050
});
//تشغيل السيرفر
// هتاخد شغلتين callback و port
server.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});
// http://localhost:5050
