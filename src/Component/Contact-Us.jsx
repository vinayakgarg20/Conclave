import react from "react";
import './Contact-Us.css';

function ContactUs() {
    return (
  <div>
    <h3 className="text-1">Contact Us</h3>
<div className="Contact-Us">
    <div className="form"> 
        <form action="mailto:contact@yourdomain.com"
method="POST"
enctype="multipart/form-data"
name="EmailForm">
    
    <input type="text" size="19" className="Name" name="Contact-Name" placeholder="Full Name"/>
   <br/><br/>
    <input type="email" name="Contact-Email" placeholder="Email ID"/>
   
    <br/><br/>
    <button type="submit" value="Submit">Send</button>
        </form>  
        
        
         </div>
    <div>
        <div className="people">
            <div></div>
            <div>
                Anvesh Chauhan<br/>
Overall Coordinator<br/>
achauhan2@ce.iitr.ac.in
</div>
        </div>
        <div className="people">
            <div>
                <img src={process.env.PUBLIC_URL + " "} alt="" />
            </div>
            <div>Muskan Dogra<br/>
Overall Co-Coordinator<br/>
mdogra@ce.iitr.ac.in
               
            </div>
        </div>
        <div className="people">
            <div></div>
            <div>
                 Akshat Srivastava<br/>
Overall Co-Coordinator<br/>
asrivastava@ce.iitr.ac.in
            </div>
        </div>
    </div>
</div>
</div>


    );
}
export default ContactUs;