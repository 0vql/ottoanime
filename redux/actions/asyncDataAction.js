import { MyAction } from "./actions";

const fetchData = () => {
  return { type: MyAction.FETCH };
};
const recieveData = (payload) => {
  return { type: MyAction.RECEIVE, payload: payload };
};

export const asyncDataAction = (URL) => {
  return async function getServerSideProps(dispatch) {
    dispatch(fetchData());
    console.log(URL);
    const response = await fetch(URL);
    const result = await response.json();
    dispatch(recieveData(result.json_data));
    console.log(result.json_data);
    return {
      props: {
        data: result.json_data,
      },
    };
  };
};
