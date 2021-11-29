import { useEffect, useState } from 'react';
import CardRelation from '../../components/CardRelation';
import api from '../../services/api';

function InitialPage() {
  const [users, setUsers] = useState([])
  const [cats, setCats] = useState([])

  useEffect(() => {
    api.get('users').then(data => {
      const responseUsers = data.data.data
      setUsers(responseUsers)
    })
    api.get('cats').then(data => {
      const responseCats = data.data.data
      setCats(responseCats)
    })
  }, [])
  return (
    <div>
      <div>
        <h2>Usuários</h2>
        {users.map(user => <CardRelation name={user.name} information={user.phone}/> )}
      </div>
      
      <div>
        <h2>Gatos</h2>
        {cats.map(cat => <CardRelation name={cat.name} information={cat.breed}/> )}
      </div>
    </div>
  )
}


export default InitialPage;