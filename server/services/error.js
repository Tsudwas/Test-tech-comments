export const handleError = (code = 500, err, res) => {
    console.error(`[ERROR: ${err}`);
    res.status(code).send(err);
};