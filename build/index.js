"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="@types/google.maps" />
const Company_1 = require("./Company");
const User_1 = require("./User");
const CustomMap_1 = require("./CustomMap");
const user = new User_1.User();
const company = new Company_1.Company();
const map = new CustomMap_1.CustomMap('map');
map.addMarker(user);
map.addMarker(company);
