import Link from "next/link";
import  AdminDashboardHeader from "../../../../component/admin_component/admin_dashboard_header";
import axios from "axios";
import HomeLayoutTailer from "../../../../component/home_layout_tailer";
import { useRouter } from 'next/router'
import Image from "next/image";

export default function EditReportByAdmin({data}) {
    const router = useRouter();
    return (

    <>
    <AdminDashboardHeader></AdminDashboardHeader>

<div style={{  paddingTop: "20px", left:"20px"}}>
<br/><br/><br/><br/>
<label>User Name: </label>
<input type="text" value={data.Uname}></input>
<br/>
<label>Email: </label>
<input type="text" value={data.Email}></input>   
<br/>
<label>Details: </label>
<input type="text" value={data.Details}></input>  
    </div>
<br/><br/>
    <button type="button" onClick={() => router.back()}>
      Save
    </button>
    <HomeLayoutTailer></HomeLayoutTailer>
    </>
  )
}

export async function getServerSideProps(context) {
    const ReportId=context.params.ReportId;
  const response = await axios.get('http://localhost:3000/admin/viewreportbyid/'+ReportId);
  const data = await response.data;

return { props: { data } }
}
