export function getQueryParam(data: any) {
    if (typeof(data) !== 'object') {
        return '?' + data;
    }
    var str = [] as any;
    for (var p in data) {
        if (data[p] && data.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
        }
    }
    return '?' + str.join('&');
}

export function getPathParam(...args:any) {
    var params = [] as any;

    for (var a in args) {
        params.push(args[a]);
    }
    return params.join('/');
}