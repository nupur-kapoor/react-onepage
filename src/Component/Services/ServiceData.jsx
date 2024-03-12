import { CiWallet } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { GiPodiumWinner } from "react-icons/gi";
import { IoIosBusiness } from "react-icons/io";

const ServicesData = [
{
  icon:<CiWallet />,
  head:"Easy Payment",
  para:"Easy payments streamline the transaction process, providing a user-friendly experience with minimal steps and hassle. Simplified interfaces and quick confirmations contribute to a seamless and convenient payment experience."
},

{
    icon:<TbReport />,
    head:"Automated Reports",
    para:"Automated reports efficiently generate and deliver essential information, saving time and reducing manual efforts in data compilation. They contribute to increased productivity by providing timely insights without the need for manual report generation."
  },

  {
    icon:<GrSecure />,
    head:"Secure First",
    para:"Secure payments employ encryption and authentication protocols, ensuring the protection of sensitive financial information during online transactions. This safeguards against unauthorized access and enhances trust in the security of digital payment processes."
  },


]


 export  const ideaData =[
  {
    icon:<IoIosBusiness />,
    text:"Create a business Map",
    des:"Business maps visually showcase .",
  },
  {
    icon:<GiPodiumWinner />,
    text:"The Organization Goals",
    des:"Business maps visually showcase.", 
  }
]

export default ServicesData;