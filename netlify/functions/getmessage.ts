import * as nfunc from "@netlify/functions";

async function handler(): Promise<nfunc.HandlerResponse>  {
    const body = {
      message: "I am from a function"
    };
    
    return {
        statusCode: 200,
        body: JSON.stringify(body)
    };
}

export { handler };