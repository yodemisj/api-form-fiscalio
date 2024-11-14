import { Request, Response } from "express";
import path from 'path';
import { NumberService } from "../services/NumberService";

export class HomeController {

    static index(req: Request, res: Response) {
        const filePath = path.join(__dirname, '../views/home.html');
        res.sendFile(filePath);
    }

    static convertNumber(req: Request, res: Response) {
        const number = parseInt(req.body.number, 10);

        const numberText = NumberService.numberToText(number);

        res.json(numberText);
    }


}