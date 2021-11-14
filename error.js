function error (errorText) {
    process.stdout.write(`Error: ${errorText}`);
    process.exit(1);
}

module.exports = error;