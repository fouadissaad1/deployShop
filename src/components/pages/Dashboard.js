// import { useContext } from "react";
// import { AuthContext } from "../Auth";
// import { Redirect } from "@reach/router";
//
// const Dashboard = () => {
//     const { currentUser } = useContext(AuthContext);
//     if (!currentUser) {
//         return <Redirect to="/login" />;
//     }
//     return (
//         <div>
//             <h1>Welcome</h1>
//             <p>This is the dashboard, if you can see this you're logged in.</p>
//             <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
//         </div>
//     );
// };
//
// export default Dashboard;