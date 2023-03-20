import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RoleGuard implements CanActivate {

    private rollPassed: string;

    constructor(role: string) {
        this.rollPassed = role;
    }

    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const req: any = ctx.getRequest<Request>();
        return this.rollPassed === req.user.role;
    }
}