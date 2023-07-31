import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const {data} = await axios.post(url, {username,password});
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="bg-neutral-900 h-screen flex items-center">
      <form className="w-1/3 mx-auto mb-12" onSubmit={handleSubmit}>
        <div className="text-green-500 text-center text-6xl font-bold gap-2 pb-10">Chat With Friends</div>
        <input value={username}
               onChange={ev => setUsername(ev.target.value)}
               type="text" placeholder="username"
               className="block w-full self-center rounded-sm p-2 mb-4 border" />
        <input value={password}
               onChange={ev => setPassword(ev.target.value)}
               type="password"
               placeholder="password"
               className="block w-full rounded-sm p-2 mb-4 border" />
        <button className="bg-green-500 font-bold text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === 'register' ? 'Register' : 'Log In'}
        </button>
        <div className="text-center text-white mt-7">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member?
              <button className="ml-3 font-bold" onClick={() => setIsLoginOrRegister('login')}>
                Log In
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Don't have an account?
              <button className="ml-3 font-bold" onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}