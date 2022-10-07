import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connections";
import { ResponseFunctions } from "../../../utils/types";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
    const method: keyof ResponseFunctions = request.method as keyof ResponseFunctions;
    const catchError = (error: Error) => response.status(400).json({ error });
    if (method === "GET") {
        const { Character } = await connect();
        const characters = await Character.find({}).catch(catchError)
        response.status(200).json({ characters });
    }
    else {
        catchError({ message: "Request Not Found!", name: "BAD METHOD ERROR" });
    }
}

export default handler;