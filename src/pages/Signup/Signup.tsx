import React, { FormEvent } from 'react';
import './Signup.scss';
import { Sign } from '../../components/Sign/Sign';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/slicers/user.slicer';

export const Signup = () => {
  const dispatch = useDispatch();
  const handleRegisterUser = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    let data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log(data);
    // const data = Object.fromEntries(formData.entries());
    //const { name, password } = data as { name: string; password: string };
    dispatch(signup(data));
  };

  return (
    <section className="signup">
      <Sign onSubmit={handleRegisterUser} />
    </section>
  );
};
