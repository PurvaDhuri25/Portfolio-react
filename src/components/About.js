const About = () => {
  return (
    <div className="About">
      <div style={{ height: "100vh", backgroundcolor: "white" }}>
        <h2>
          ABOUT <span style={{ color: "#b5e853" }}>ME</span>
        </h2>
        <p class="desc">Know me a little better</p>
        <div class="row">
          <div class="col-md-6">
            <img
              class="svg"
              src="about.svg"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            class="col-md-6"
            style={{
              color: "black",
              padding: "5px 25px",
              fontSize: "1rem",
              fontFamily: "Roboto,sans-serif",
              marginTop: "70px"
            }}
          >
            <p>
              Hey!! I am Purva Dhuri. I hail from Pune. I am a Recent
              Information Technology Engineering Graduate from PCET's Nutan
              Maharashtra Institute of Engineering & Technology, Pune{" "}
            </p>
            <p>
              I love learning new things and am always on the lookout for new
              opportunities to develop and grow within my role, whether that’s
              learning new skills, taking on a new project or collaborating with
              other departments. I’m a positive person who likes to excel at
              what I do, and I think the best way to do that is to constantly
              challenge myself to learn as much as I can and to perform to the
              best of my abilities every day.
            </p>
            <p>
              I am currently learning how to develop Websites and Applications.
              I love working on Databases. Besides, I like to participate in
              Competitions & Hackathons.
            </p>
            <p>
              Here are some technologies I have been recently playing with:{" "}
              <br />
              <br />
              <span class="skills">HTML</span>
              <span class="skills">CSS</span>
              <span class="skills">JavaScript(ES6)</span>
              <span class="skills">Python</span>
              <span class="skills">Java</span>
              <span class="skills">C++</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
