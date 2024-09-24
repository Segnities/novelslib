"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComplaintModule = void 0;
const common_1 = require("@nestjs/common");
const user_complaint_service_1 = require("./user-complaint.service");
const user_complaint_controller_1 = require("./user-complaint.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let UserComplaintModule = class UserComplaintModule {
};
exports.UserComplaintModule = UserComplaintModule;
exports.UserComplaintModule = UserComplaintModule = __decorate([
    (0, common_1.Module)({
        providers: [user_complaint_service_1.UserComplaintService, prisma_service_1.PrismaService],
        controllers: [user_complaint_controller_1.UserComplaintController]
    })
], UserComplaintModule);
//# sourceMappingURL=user-complaint.module.js.map