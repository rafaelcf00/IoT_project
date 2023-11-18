const preResponse = (request, h) => {
    const { response } = request;

    if (response.isBoom) {
        const { statusCode, payload } = response.output;

        const errorMessage = payload.message || 'Error internal server';
        const customError = {
            statusCode,
            error: payload.error,
            message: errorMessage
        };

        return h.response(customError).code(statusCode);
    }

    return h.continue;
}

module.exports = preResponse;
