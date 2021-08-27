const Contact = () => {
  return (
    <div className="Contact">
      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <br />
              <br />
              <h4>
                <span>Contact </span> Me!
              </h4>
              <p> Let's connect..</p>
            </div>

            <div class="item">
              {" "}
              <img src="phone.png" alt="phone" />
              <h3>Phone</h3>
              <p>+91 - 2461532457</p>
            </div>

            <div class="item">
              {" "}
              <img src="mail.png" alt="phone" />
              <h3>EmailID</h3>
              <p>
                <a href="mailto:abcdefghilk@gmail.com" />
                abcdefghilk@gmail.com
              </p>
            </div>

            <div class="item">
              {" "}
              <img src="linkedin.png" alt="phone" />
              <h3>Linkedin</h3>
              <p>
                <a href="https://www.linkedin.com/" />
                https://www.linkedin.com/
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
