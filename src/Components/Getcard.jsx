import { LiaDownloadSolid } from "react-icons/lia";
import img1 from '../assets/cards/form.svg'
import img2 from '../assets/cards/approve.svg'
const Getcard = () => {
const data = [
    {
      id: "01.",
      icon: "none",
      title: "Download The App",
      p: "Lorem ipsum dolor sit amet,consectetu adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua quis.",
    },
    {
      id: "02.",
      icon: img1,
      title: "Submit The Form",
      p: "Lorem ipsum dolor sit amet,consectetu adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua quis.",
    },
    {
      id: "03.",
      icon: img2,
      title: "Wait Till Approved",
      p: "Lorem ipsum dolor sit amet,consectetu adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua quis.",
    },
    {
      id: "04.",
      icon: img1,
      title: "Step 4",
      p: "Lorem ipsum dolor sit amet,consectetu adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua quis.",
    },
    {
      id: "05.",
      icon: img2 ,
      title: "Step 5",
      p: "Lorem ipsum dolor sit amet,consectetu adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua quis.",
    },
  ];
  return (
    <div className=" w-[80%] mx-auto my-10  bg-[#F9F9F9] pb-10">
      <div className=" text-center w-[80%]  mx-auto">
        <h1 className="text-3xl font-extrabold">How to Get The Card</h1>
        <p className="paragraph font-semibold">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className=" text-center  justify-center mx-auto  md:grid md:grid-cols-3  relative  mt-10">
        {data.map((data, index) => (
          <div key={index} className="gap-4 w-[70%] mx-auto relative group">
            <div>
              <div className=" w-fit rounded-full p-4 py-[14px] mx-auto relative bg-[#1172A9] font-bold text-white mt-6 z-[999] group">
                {data.id}
              </div>
              {data.id == "03." || data.id == "05." || (
                <span className="md:border border-gray-500 h-0 absolute w-[120%] top-12 border-dashed sm:left-[60%] "></span>
              )}
            </div>
            <div className=" rounded-md  space-y-4 p-4 mt-10 hover:bg-[#1172A9] hover:shadow-2xl hover:text-white transition-all duration-200 my-auto  ">
             
                <div>
                  {" "}
                  {data.icon == "none" ? (
                    <div>
                      <LiaDownloadSolid  className="font-bold size-10 mx-auto group-hover:bg-white  rounded-md text-blue-600"/>
                    </div>
                  ):(
                    <div ><img src={data.icon} alt="#" className="mx-auto group-hover:bg-white rounded-md p-1" /></div>
                  )}
                </div>
          
       
              <div className="font-bold">{data.title}</div>
              <div>{data.p}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getcard;
