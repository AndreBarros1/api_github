import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../axios/config';
import './issue.css';
import Header from '../../components/Header';
import Post from '../../components/Post';

const Issue = () => {
  const  { id }  = useParams(); 
  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIssue = async () => {
      try {
        console.log(id)
        const resposta = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`);
        console.log(resposta)
        setIssue(resposta.data);
      } catch (error) {
        console.error('Erro ao buscar a issue:', error);
      } finally {
        setLoading(false);
      }
    };

    getIssue();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!issue) return <p>Issue não encontrada.</p>;

  return (
    <div className='issue'>
      <Header/>
      <Post/>
    </div>
  );
};

export default Issue;
