import react from "react";
import "./Footer.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Footer (){
return (
    <div className="footer">
        <div className="footer-top">
            <div className="text-box-1">
                <div className="text-1">Civil Engineering Department</div>
                <div className="text-2">Indian Institute of Technology, Roorkee</div>
                <div><a className="text-3" href="http://civil.iitr.ac.in">http://civil.iitr.ac.in</a></div>
            </div>
            <div>
                <div className="text-4">Mail Us at</div>
                <div ><a className="text-5" href="mailto:civilconclave@iitr.ac.in">civilconclave@iitr.ac.in</a></div>
            </div>
            <div className="social-media">
                <div className="text-6">Follow Us On:</div>
               
                    <div className="icon">
                        <div><a href="https://www.facebook.com/cec.iitroorkee/" className="fa fa-facebook"></a></div>
                        <div><a href="https://www.instagram.com/cec_iitr/" className="fa fa-instagram"></a></div>
                        <div><a href="https://www.linkedin.com/company/civil-engineering-consortium/" className="fa fa-linkedin"></a></div>
                    
                </div>
            </div>
        </div>



        <div className="bottom-line"></div>
    </div>
);


}
export default Footer;