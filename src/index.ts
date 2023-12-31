/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
