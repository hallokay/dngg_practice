import { useRef, useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');

    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
      try{ 
        const response = await axios.post(LOGIN_URL, 
          JSON.stringify({user, pwd}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        );
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user, pwd, roles,accessToken})
        setUser('');
        setPwd('');
        navigate(from, { replace: true });
      } catch (err) {
        if(!err?.response) {
          setErrMsg('no Server')
        } else {
          setErrMsg("login failed");
        }
        errRef.current.focus();
      }

    }
  return (
    <>
        <section className="register-section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            가입이 필요하신가요? <br />
            <Link to="/register">Sign Up</Link>
          </p>
        </section>
    </>
  );
}

export default Login