/** @format */

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    
    name: "",
    surname: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  // Kullanıcılar verisini günceller
  function updateUsers(e) {
    e.preventDefault();
    // formu göndermeden önce bütün verilenrin kontrolu yapılmalı
    // ! >> ünlem işareti boş mu, null mu, undefined

    if (!formData.name || !formData.surname || !formData.password) {
      alert("Lütfen Formu Doldurun");
      return;
    }
    //Yukarıdaki doğrulamadan geçerse burası Çalşır
    // spread (...) dizideki daha önce eklenenleri muhafaza eder.
    // [...users > öncekileri muhafaza eder, formData >yeni eklenecek oanlar]


    setUsers([...users, {...formData, id: new Date().getTime(),}]);

    //Bütün formu sıfırla
    // setFormData({id: "", name: "", surname: "", password: "" });
  }

  //Form Elemanı Silme

  function handleDelete(deletingId) {
    // dizideki elemanlardan silinecek elemanın ID sine eşit olmayanları getir
    const filtered = users.filter((user) => user.id !== deletingId);

    // yeni oluşan diziyi ekrana basılan diziye aktar.
    setUsers(filtered);
  }

  console.log(users);

  return (
    <>
      <form onSubmit={updateUsers}>
        <h1>FORM ALANI</h1>
        <label>İsim : </label>
        <br />
        <input
          className="form-control"
          value={formData.name}
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <label htmlFor="">Soyisim : </label>
        <br />
        <input
          className="form-control"
          value={formData.surname}
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
        />
        <br />
        <label>Şifre : </label>
        <br />
        <input
          className="form-control"
          value={formData.password}
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <br />
        <button className="btn btn-primary" type="submit">Gönder</button>
      </form>
      <table className="table table-dark bg-dark my-4 ">
        <thead>
          <th>İsim</th>
          <th>Soyisim</th>
          <th>Şifre</th>
          <th>İşlemler</th>
        </thead>
        <tbody></tbody>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.password}</td>
            <td>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Sil</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Form;
