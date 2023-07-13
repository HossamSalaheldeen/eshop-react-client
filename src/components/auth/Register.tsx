import {FormEvent, useState} from 'react';
import './Login.css';
import {axiosPublic} from "../../common/axiosClient";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            password
        }
        try {
            const {data} = await axiosPublic.post(`auth/register`, formData);
            console.log(data);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <div className="form-floating">
                        <input type="text"
                               className="form-control"
                               id="nameInput"
                               placeholder="name@example.com"
                               value={name}
                               onChange={(e => setName(e.target.value))}
                        />
                        <label htmlFor="nameInput">Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email"
                               className="form-control"
                               id="emailInput"
                               placeholder="name@example.com"
                               value={email}
                               onChange={(e => setEmail(e.target.value))}
                        />
                        <label htmlFor="emailInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                               className="form-control"
                               id="floatingPassword"
                               placeholder="Password"
                               value={password}
                               onChange={(e => setPassword(e.target.value))}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me"
                               id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2023</p>
                </form>
            </main>
        </>
    );
};

export default Register;