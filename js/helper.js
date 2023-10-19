export function encodeQueryUrl(data) {
    if(typeof data == Object){
        return Object.keys(data).map(function(key) {
            return [key, data[key]].map(encodeURIComponent).join("=");
        }).join("&");
    }
}

export function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
        console.log(   location.search
            .substr(1)
            .split("&"));
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          console.log(tmp);

          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}