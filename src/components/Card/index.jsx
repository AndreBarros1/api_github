import { useEffect, useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import api from '../../axios/config'


const Card = ()=>{



    const [issues,setIssues] = useState([])
    

    const getIssues = async()=>{
        try {
            const resposta = await api.get("repos/rocketseat-education/reactjs-github-blog-challenge/issues")

            const data = resposta.data
            setIssues(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getIssues()
    },[])

    const truncateBody = (body, maxLength) => {
        if (!body) return '';
        if (body.length > maxLength) {
            return body.substring(0, maxLength) + '...';
        }
        return body;
    };

    

    return(
        <div className="cardlayout">
            {issues.length === 0 ? <p>carregando...</p> : (
                issues.map((issue)=>(
                    <div className="Card">
                        <div className="Card__cabecalho">
                            <h2>{issue.title}</h2>
                            <span>Há 1 dia</span>
                        </div>
                        <p>{truncateBody(issue.body, 200)}</p>
                        <Link to={`/issue/${issue.number}`} className='btn'>Ler mais</Link>
                    </div>
                ))
            )}
            
            
        </div>
        
    )
}

export default Card