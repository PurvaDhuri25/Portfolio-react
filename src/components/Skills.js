const Skills = () => {
  return (
    <div className="Skills" style={{ height: "100vh" }}>
      <h3>
        MY <span style={{ color: "#b5e853" }}>SKILLS</span>
      </h3>
      <p class="desc">THINGS I AM COMPOSED OF</p>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 cc">
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>
                      70<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 class="text">Java programming</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 cc">
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>
                      70<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 class="text">Web development</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 cc">
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>
                      80<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 class="text">Database Management</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 cc">
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 class="text">MySQL</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
