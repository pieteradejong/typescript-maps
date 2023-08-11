"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    constructor() {
        this.color = 'red';
        this.companyName = faker_1.faker.company.name();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
    markerContent() {
        return `
            <div>    
                <h1>Company name: ${this.companyName}</h1>
                <h3>Company catch phrase: ${this.catchPhrase}</h3>
            </div>
        `;
    }
}
exports.Company = Company;
