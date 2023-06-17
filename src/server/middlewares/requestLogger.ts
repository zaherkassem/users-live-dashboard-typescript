export default (req:any, res:any, next:any) => {
    // TODO response body
    let requestBody = (typeof req.body !== 'string') ? JSON.stringify(req.body) : req.body;
    console.log('info', 'Method:' + req.method + ' Path:'+ req.path + ' Request Body:'+ requestBody);
    console.log('info', '--------------------------------------------------');
    next();
}
