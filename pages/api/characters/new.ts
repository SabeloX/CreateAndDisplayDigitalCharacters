import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connections";
import { ResponseFunctions } from "../../../utils/types";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    try { 
        const method: keyof ResponseFunctions = request.method as keyof ResponseFunctions;
        const catchError = (error: Error) => response.status(400).json({ error });
        if (method === "POST") {
            const { Character } = await connect();
            const character = await Character.create(JSON.parse(request.body));
            response.status(200).json({ character });
        }
        else {
            catchError({ message: "Request Not Found!", name: `BAD METHOD ERROR: ${method}` });
        }
    }
    catch (error) {
        console.log(error)
        response.status(400).json({ error, message: "Internal Error!" });
    }
}

export default handler;