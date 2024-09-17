"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
let Team = class Team {
};
exports.Team = Team;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Team.prototype, "chapters_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Team.prototype, "books_count", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Team.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Team.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_model_1.User]),
    __metadata("design:type", Array)
], Team.prototype, "users", void 0);
exports.Team = Team = __decorate([
    (0, graphql_1.ObjectType)()
], Team);
//# sourceMappingURL=team.model.js.map