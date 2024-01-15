import  express from "express";
import { check } from "../controllers/apic.js";
const route=express.Router()
route.get('/test',check)

export default route