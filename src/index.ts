/// <reference types="@types/google.maps" />
import config from "../config.json"
import { Company } from './Company';
import { User } from "./User";

const user = new User();
const company = new Company();

console.log(user);
console.log(company);
