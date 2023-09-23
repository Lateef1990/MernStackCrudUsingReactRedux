import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { deleteUser } from './redux/UserSlice';


function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res =>{
      dispatch(deleteUser({id}))
      console.log(res)
    })
    .catch(err => console.log(err))
  }
          
  return (
          <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
          <div className='w-50 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-sm btn-success'>Add +</Link>
                    <table className='table'>
                              <thead>
                                        <tr>
                                                  <th>Name</th>
                                                  <th>Email</th>
                                                  <th>Age</th>
                                                  <th>Action</th>
                                        </tr>
                              </thead>
                              <tbody>
                              {
                              // eslint-disable-next-line array-callback-return
                              users.map((user) => {
                              return <tr>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.age}</td>
                              <td> <Link to={`/update/${user.id}`} className='btn btn-sm btn-success me-2'>Update User</Link>
                              <button onClick={() =>{handleDelete(user.id)}} className='btn btn-sm btn-danger'>Delete</button>
                              </td>
                              </tr>
                              })
                              }
                            
                              </tbody>
                    </table>

          </div>
      
    </div>
  )
}

export default Users
