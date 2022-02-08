import Head from "next/head";

import houses from "../../houses";
import Layout from "../../components/Layout";

const House = (props) => {
  return (
    <Layout
      content={
        <div>
          <img src={props.house.picture} width="100%" alt="House Picture" />
          <p>
            {props.house.type} - {props.house.town}
          </p>
          <p>{props.house.title}</p>
        </div>
      }
    />
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0],
    },
  };
}

export default House;
