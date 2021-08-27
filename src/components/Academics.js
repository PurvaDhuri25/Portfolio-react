const Academics = () => {
  return (
    <div className="Academics">
      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <br />
              <br />
              <h4>
                <span>Academic </span> Details
              </h4>
              <p>
                {" "}
                These are all of the subjects I have studied in my Academics
              </p>

              <table class="styled-table">
                <thead>
                  <tr>
                    <th>First Year</th>
                    <th>Second Year</th>
                    <th>Third Year</th>
                    <th>Fourth Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Graphics</td>
                    <td>Computer Architecture</td>
                    <td>Design & Analysis of Algorithm</td>
                    <td>Software Testing</td>
                  </tr>
                  <tr>
                    <td>Engineering Mathematics</td>
                    <td>Operating Systems</td>
                    <td>System Programming</td>
                    <td>Business Analytics</td>
                  </tr>

                  <tr>
                    <td>Physics</td>
                    <td>Data Structures</td>
                    <td>Cloud Computing</td>
                    <td>Software Designing & Modeling</td>
                  </tr>

                  <tr>
                    <td>Chemistry</td>
                    <td>Database Management System</td>
                    <td>Human Computer Interaction</td>
                    <td>Internet of Things</td>
                  </tr>

                  <tr>
                    <td>Fundamentals of Programming Language</td>
                    <td>Software Engineering</td>
                    <td>Theory of Computation</td>
                    <td>Machine Learning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Academics;
