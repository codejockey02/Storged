module.exports = () => {
    if (process.env.PORT === undefined) {
        process.env.PORT = 3000;
    }
    if (process.env.MONGO_URL === undefined) {
        process.env.MONGO_URL = 'mongodb+srv://bellyshot:Priyesh1234@cluster0-avan2.gcp.mongodb.net/test?retryWrites=true&w=majority';
        // process.env.MONGO_URL = 'mongodb://admin:Priyesh123@ds363008.mlab.com:63008/storge';

    }
};