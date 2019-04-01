import axios from "axios";

export default class runService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.1.130:3000/api/",
            withCredentials: true
        })
    }

    getRuns = () => {
        const promise = this.service.get("getAllRuns", { withCredentials: true })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })

        return promise;
    }

    createRun = run => {
        console.log(run)
        return this.service.post("/createRun", run)
            .then(res => {
            console.log(res);
            return res.data;
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


    handleUpload = theFile => {

        console.log('file in service: ', theFile)

        return this.service.post('/upload', theFile)
            .then(res => res.data)
            .catch(err => console.log(err));
    }
}