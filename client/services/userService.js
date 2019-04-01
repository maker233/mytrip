import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://192.168.43.136:3000/api/",
            withCredentials: true
        })
    }

    sayHello = () => {
      return this.service.get('/hello')
      .then(response => response.data)   
    }

    getUser = () => {
        return this.service.get('/getUser')
        .then(response => response.data)
      }

    updateUser = (name, username, password, bio, photo) => {
      console.log(name, username, password, bio, photo)
        return this.service.post('/profile/:id', {name, username, password, bio, photo})
            .then(response => response.data)
            
    }

    getOneUser = idUser => {
        return this.service.get(`getOneUser/${idUser}`, { withCredentials: true })
        .then(res => {
            console.log(res.data);
            return res.data;
        })
    }

    deleteUser = () => {
        return this.service.get('/delete/:id')
            .then(response => response.data)
    }

}
