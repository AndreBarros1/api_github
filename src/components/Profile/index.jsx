import { FaGithub, FaUserAlt, FaRegBuilding, FaExternalLinkAlt } from "react-icons/fa";
import './profile.css';
import { useEffect, useState } from "react";
import api from "../../axios/config";


const Profile = () => {
    

    const [users,setUsers] = useState([])

    const getUsers = async()=>{
        try {
            const resposta = await api.get('/users/AndreBarros1')
            
            const data = resposta.data
            setUsers([data])
            // console.log(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
            
        getUsers()
        

    },[])
    return(
        <header>
            {users.length === 0 ? <p>carregando</p> : (
                users.map((user)=>(
                    <div className="profile">
                        <div className="profile__img" >
                            <img src={user.avatar_url}/>
                        </div>
                                <div className="profile__info">
                                    <div className="profile__info__cabecalho">
                                                <h2>{user.login}</h2>
                                                <a target="_blank" href={user.html_url}><FaExternalLinkAlt/>Github</a>
                                    </div>    
                                    <p>{user.bio}</p>
                                    <div className="links">
                                            <a href="#"><FaGithub/>{user.name}</a>
                                            <a href="#"><FaRegBuilding />Em busca de uma estágio</a>
                                            <a href="#"><FaUserAlt />{user.followers}</a>
                                    </div>
                                    <div/>
                                </div>
                            </div>
                ))
            )}
        </header>
    )
};

export default Profile;
