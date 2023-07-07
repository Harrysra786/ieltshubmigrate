exports.handle = async function({ request, resolve }) {
    const response = await resolve(request);

    // Add CORS headers to the response
    response.headers['Access-Control-Allow-Origin'] = '*';
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS';
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type';

    return response;
};
