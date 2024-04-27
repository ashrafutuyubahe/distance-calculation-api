

function calculateDistance(lat1, lon1, lat2, lon2) {
    if (!isValidLatitude(lat1) || !isValidLatitude(lat2) || !isValidLongitude(lon1) || !isValidLongitude(lon2)) {
        console.error('Invalid input. Latitude must be between -90 and 90 degrees. Longitude must be between -180 and 180 degrees.');
        return null;
    }

    const R = 6371; 

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance;
}

function isValidLatitude(latitude) {
    return latitude >= -90 && latitude <= 90;
}

function isValidLongitude(longitude) {
    return longitude >= -180 && longitude <= 180;
}

module.exports = calculateDistance;
