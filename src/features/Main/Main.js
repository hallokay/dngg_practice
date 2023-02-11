// import { useSelector } from "react-redux";
import {useGetManagersQuery} from './ManagerSlice'

const Main = () => {
   const {
    data,
     isLoading, isSuccess, isError, error } = useGetManagersQuery();

    //  console.log(data);
   let content;
   if(isLoading) {
    content = <p>Loading...</p>
   } else if (isSuccess) {
    content = data.map((data) => {
      return <div>{data.title}</div>;
    });
   } else if (isError){
    content = <p>{error}</p>
   }
  return (
    <div>
    {content}
    </div>
  )
}

export default Main