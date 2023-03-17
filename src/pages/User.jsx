import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import TableUser from "../components/TableUser";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase-setup";
import { useEffect, useState } from "react";

const User = () => {
  const [dataUser, setDataUser] = useState(false);

  const getDataUsers = async () => {
    await getDocs(collection(firestore, "users")).then((res) => {
      let temp = [];
      res.forEach((item) => {
        temp.push(item.data());
      });

      setDataUser(temp);
    });
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  // dataUser?.forEach((doc) => {
  //   console.log(doc.data().nama);
  // });
  // console.log("dataUser");
  // console.log(dataUser);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="User" />

      <div className="flex flex-col gap-10">
        <TableUser dataUser={dataUser} />
      </div>
    </DefaultLayout>
  );
};

export default User;
