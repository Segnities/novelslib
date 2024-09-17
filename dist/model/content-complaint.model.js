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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentComplaint = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const complaint_reason_model_1 = require("./complaint-reason.model");
const complaint_target_type_model_1 = require("./complaint-target-type.model");
const enums_1 = require("./enums");
let ContentComplaint = class ContentComplaint {
};
exports.ContentComplaint = ContentComplaint;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContentComplaint.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.ApprovalStatus),
    __metadata("design:type", String)
], ContentComplaint.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContentComplaint.prototype, "contentId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ContentComplaint.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ContentComplaint.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContentComplaint.prototype, "reasonId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_reason_model_1.ComplaintReason),
    __metadata("design:type", complaint_reason_model_1.ComplaintReason)
], ContentComplaint.prototype, "complaintReason", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContentComplaint.prototype, "complaintTargetId", void 0);
__decorate([
    (0, graphql_1.Field)(() => complaint_target_type_model_1.ComplaintTargetType),
    __metadata("design:type", typeof (_a = typeof complaint_target_type_model_1.ComplaintTargetType !== "undefined" && complaint_target_type_model_1.ComplaintTargetType) === "function" ? _a : Object)
], ContentComplaint.prototype, "complaintTargetType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ContentComplaint.prototype, "resolvedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContentComplaint.prototype, "issuedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], ContentComplaint.prototype, "issuedByUser", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContentComplaint.prototype, "resolvedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], ContentComplaint.prototype, "resolvedByUser", void 0);
exports.ContentComplaint = ContentComplaint = __decorate([
    (0, graphql_1.ObjectType)()
], ContentComplaint);
//# sourceMappingURL=content-complaint.model.js.map