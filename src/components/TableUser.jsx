import React from "react";
import { useEffect, useState } from "react";

const TableUser = ({ dataUser }) => {
  const [dataAkurasi, setDataAkurasi] = useState(0);

  const generateAkurasi = (items) => {
    let total = 0;
    let akurasi = 0;
    items.map((item) => {
      total += item.akurasi;
    });
    akurasi = Math.round((total * 100) / items.length);
    return akurasi;
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Daftar User
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Nama
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">NIS</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Kelas
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Akurasi
            </h5>
          </div>
        </div>
        {dataUser &&
          dataUser?.map((doc, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
              >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <p className="hidden text-black dark:text-white sm:block">
                    {doc.nama}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{doc.nis}</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-meta-3">{doc.kelas}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">{doc.email}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-meta-5">
                    {generateAkurasi(doc.riwayatEvaluasi)}%
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TableUser;
