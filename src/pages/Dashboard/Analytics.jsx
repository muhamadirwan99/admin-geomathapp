import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import CardVideo from "../../components/CardVideo";
import CardUser from "../../components/CardUser";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase-setup";
import { useEffect } from "react";
import { useState } from "react";

const Analytics = () => {
  const [lengthUser, setLengthUser] = useState("0");
  const [lengthVideo, setLengthVideo] = useState("0");

  const getDataUsers = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    setLengthUser(querySnapshot.docs.length);
  };
  const getDataVideos = async () => {
    const querySnapshot = await getDocs(collection(firestore, "videos"));
    setLengthVideo(querySnapshot.docs.length);
  };

  useEffect(() => {
    getDataUsers();
    getDataVideos();
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardVideo lengthVideo={lengthVideo} />
        <CardUser lengthUser={lengthUser} />
      </div>

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </DefaultLayout>
  );
};

export default Analytics;
