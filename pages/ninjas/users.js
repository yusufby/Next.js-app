import styles from "../../styles/ninjas.module.css"

export const getStaticProps = async () => {

   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await res.json();
   return {
      props: { users: data }

   }

}

const Users = ({ users }) => {

   return (
      <div>
         <h1>Users data</h1>

         {users.map(user => (
            <div
               key={user.id}
            >
               <p>{user.name}</p>
               <p>{user.username}</p>
               <p>{user.email}</p>

            </div>

         ))}


      </div>

   )

}
export default Users;