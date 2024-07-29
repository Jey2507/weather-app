import { PropagateLoader } from "react-spinners";


export default function Loader() {
    return (
      <span>
       <PropagateLoader
            visible={true}
            height="30"
            width="30"
            color="white"
            wrapperStyle={{
              margin: "0 auto"
            }}
          
            />
      </span>
          
    )
}