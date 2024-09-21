import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";

function Contact() {
  const [getusername, setusername] = useState();
  const [getusermailid, setusermailid] = useState();
  const [Errormsg, seterrormsg] = useState();
  const [msguser, setmsguser] = useState();
  const [Errormsgemailid, seterrormsgmailid] = useState();
  const userdata = () => {
    setusername(event.target.value);
  };
  const userdatamailid = () => {
    setusermailid(event.target.value);
  };
  const messageuser = () => {
    setmsguser(event.target.value.toUpperCase());
  };
  const getdata = (event) => {
    if (getusername.length < 3) {
      seterrormsg("MIN 3 Char");
      event.preventDefault();
    } else {
      seterrormsg("");
    }

    // emailvalidation
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const result = pattern.test(getusermailid);

    // logic part

    if (!result) {
      const msg = "email is not correct";
      seterrormsgmailid(msg.toUpperCase());
    } else {
      seterrormsgmailid("");
    }
  };
  console.log(msguser)
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="container ">
          <center>
            <h4 className="text-secondary">Contact Me</h4>
          
          </center>
          <form action="" className="">
            <label htmlFor="username" className="text-secondary">
              Name :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              onChange={userdata}
              placeholder="Ravi tharun"
            />
            <p className="text-danger">{Errormsg}</p>
            <br />
            <label htmlFor="useremail_id" className="text-secondary">
              Email id :
            </label>
            <input
              type="email"
              className="form-control"
              name="useremail"
              id="useremail_id"
              required
              onChange={userdatamailid}
              placeholder="example@gmail.com"
            />
            <p className="text-danger">{Errormsgemailid}</p>
            <br />
            <textarea
              name=""
              id=""
              className="form-control"
              onChange={messageuser}
              placeholder="Message To Me"
            ></textarea>
            <br />
            <button className="btn btn-outline-primary" onClick={getdata}>
              SubmitData
            </button>
          </form>
        </div>
        <br />
        <br />
        <Footer></Footer>
      </div>
    </>
  );
}

export default Contact;
