import axios from "axios";
import urlBack from "../services/urlBack"

export default class runService {

    constructor() {

        this.service = axios.create({
            baseURL: urlBack,
            withCredentials: true
        })
    }

    getAllRuns = () => {
        return this.service.get("getAllRuns")
        .then(res => {
            // console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    }

    getMyRuns = () => {
        return this.service.get("getMyRuns")
        .then(res => {
            // console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    }

    createRun = run => {
        //console.log(run)
        return this.service.post('/createRun', run)
            .then(response => {
            console.log(response.data);
            return response.data;
        })
    }

    getOneRun = idCoaster => {
        const promise = this.service.get(`getOneRun/${idCoaster}`, { withCredentials: true })
            .then(res => {
                console.log(res);
                return res.data;
            })

        return promise;
    }

    getUsersRanked = itemid => {
        return this.service.post('/getUsersRanked', {itemid})
            .then(response => {
            console.log(response.data);
            return response.data;
        })
    }

    addMeRun = itemid => {
        return this.service.post('/addMeRun', {itemid})
            .then(response => {
            // console.log(response.data);
            return response.data;
        })
    }

    updateRunDistances = steps => {
        return this.service.post('/updateRunDistance', {steps: steps})
            .then(response => {
            console.log(response.data);
            return response.data;
        })
    }
}