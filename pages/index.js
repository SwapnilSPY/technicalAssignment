import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { setUserObject } from '../redux/actions/actions';
import '../styles/Home.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
      props: {
        userList: data
      }
  }
}

export default function Home({ userList }) {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleUserClick = (dispatch, router, user) => {
    dispatch(setUserObject(user));
    router.push("/user");
  }

  return (
    <div className="main">
      <h1 className="main-heading">All Users</h1>
      <div className="user-fields-wrapper">
        {userList.map((userObj)=>{
          return (
            <p key={`user_${userObj.id}`} className="user-field" 
              onClick={()=>handleUserClick(dispatch, router, userObj)}
            >
              Name: {userObj.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}
