import { Post, Route, Tags, Body, Controller } from "tsoa";
import { ErrorResponse, LogedInUser } from "../model.js";
import { PrismaClient }  from "../../prisma/generated/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { checkFields } from "../utils.js";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || "secret";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginSuccessResponse {
    role: "user" | "caregiver";
    token: string;
    user: { id: string; name: string; email: string };
}

@Route("login")
@Tags("Login")
export class LoginController extends Controller {
    @Post("/")
    public async login(@Body() body: LoginRequest): Promise<LoginSuccessResponse | ErrorResponse> {
        const isValidBody = checkFields<LoginRequest>(body);

        if (!isValidBody) {
            this.setStatus(400);
            return { message: "Invalid request body" } as ErrorResponse;
        }

        const { email, password } = body;

        try {
            const user = await prisma.user.findUnique({ where: { email } });
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (!match) {
                    this.setStatus(401);
                    return { message: "Unauthorized" };
                }

                const token = jwt.sign({ id: user.id, role: "user" } as LogedInUser, SECRET_KEY, { expiresIn: "1d" });
                return {
                    role: "user",
                    token,
                    user: { id: user.id, name: user.name, email: user.email },
                } as LoginSuccessResponse;
            }

            this.setStatus(401);
            return { message: "Unauthorized" };
        } catch (err) {
            this.setStatus(500);
            return { message: (err as Error).message };
        }
    }
}
