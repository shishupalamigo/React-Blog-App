import React from 'react';
import { Link } from 'react-router-dom';
import { validations } from "../utilities/validations"

class Signup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        password: '',
        email: '',
      },
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
     validations(errors, name, value);
    this.setState({ [name]: value, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    let { username, password, email } = this.state.errors;
    return (
      <main>
        <section className="mt-20">
          <form
            className="w-1/3 mx-auto border border-gray-400 p-6 rounded-md shadow-md"
            onSubmit={this.handleSubmit}
          >
            <div className="text-center">
              <legend className="text-2xl font-bold">Sign Up</legend>
              <Link to="/login">
                <span className="text-green-700 text-lg text-center">
                  Already Have an account?{' '}
                </span>
              </Link>
            </div>
            <fieldset className="my-3">
              <input
                className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md"
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                name="username"
                onChange={(e) => this.handleChange(e)}
              />
              <span className="text-red-500">{username}</span>

              <input
                className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md"
                type="text"
                placeholder="Enter Email"
                value={this.state.email}
                name="email"
                onChange={(e) => this.handleChange(e)}
              />
              <span className="text-red-500">{email}</span>

              <input
                className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md"
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                name="passwd"
                onChange={(e) => this.handleChange(e)}
              />
              <span className="text-red-500">{password}</span>

              <input
                type="submit"
                value="Sign Up"
                className="block w-full btn bg-green-500 text-white font-bold cursor-pointer"
                disabled={username || email || password}
              />
            </fieldset>
          </form>
        </section>
      </main>
    );
  }
}

export default Signup;
