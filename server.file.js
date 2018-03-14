

module.exports = (req, res, readFile, context, renderer) => {
    let url = req.url;
    if (/\.js/.test(url)) {
        res.end(readFile(url.split('?')[0]));
    } else if (/favicon.ico/.test(url)) {
        res.end(readFile(url));
    }

    else {
        context(req).then((app) => {
            renderer.renderToString(app, (err, html) => {
                // console.log(html);
                if (err) {
                    console.log(err);
                    res.status(500).end('Internal Server Error')
                    return
                }
                res.end(html);
            });
        });
    }
}