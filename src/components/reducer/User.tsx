import { useReducer, useState } from 'react';

const firstUser = {
  id: '123456',
  firstName: 'hasegawa',
  lastName: 'shu',
  city: 'tokyo',
  age: 38,
  admin: false,
};
// state ver
export const UserState = () => {
  const [user, setUser] = useState(firstUser);
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>age: {user.age}</p>
      <p>loc: {user.city}</p>
      <p>admin: {user.admin}</p>
      <button
        onClick={() => {
          setUser({ ...user, admin: true });
        }}
      >
        make admin
      </button>
    </div>
  );
};

// reducer var
export const UserReducer = () => {
  const [user, setUser] = useReducer(
    (user, newDetails) => ({
      ...user,
      ...newDetails,
    }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>age: {user.age}</p>
      <p>loc: {user.city}</p>
      <p>admin: {user.admin ? 'admin' : 'not admin'}</p>
      <button
        onClick={() => {
          setUser({ admin: !user.admin });
        }}
      >
        make admin
      </button>
    </div>
  );
};
