var StorageService = function() {
    var setObject = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    var getObject = function(key) {
        var value = localStorage.getItem(key);
        // if(value) return parsed JSON else undefined
        return value && JSON.parse(value);
    };

    var isSupported = function() {
        return typeof (Storage) !== "undefined";
    };

    // exposed functions
    return {
        isSupported: isSupported,
        getObject: getObject,
        setObject: setObject
    };
};
