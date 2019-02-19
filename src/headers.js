module.exports.echo = async (event, context) => {
    console.log(`event is ${JSON.stringify(event)}`);

    let headers = event.headers
    let output = [];

    for(headerName in headers) {
        output.push(`${headerName}: ${headers[headerName]}`);
    }

    return {
        'statusCode': 200,
        'body': output.join("\n")
    };
}