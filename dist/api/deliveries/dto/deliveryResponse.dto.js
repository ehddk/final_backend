"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryResponseDTO = void 0;
class DeliveryResponseDTO {
    id; //배송지와 연결된 유저 ID
    name; //배송지와 연결된 유저명
    postalCode; //우편번호
    defaultAddress; // 기본 주소
    detailAddress; // 상세 주소
    number; //폰번호
    isDefault; //기본 배송지 여부
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.postalCode = params.postalCode;
        this.defaultAddress = params.defaultAddress;
        this.detailAddress = params.detailAddress;
        this.number = params.number;
        this.isDefault = params.isDefault;
    }
}
exports.DeliveryResponseDTO = DeliveryResponseDTO;
//# sourceMappingURL=deliveryResponse.dto.js.map